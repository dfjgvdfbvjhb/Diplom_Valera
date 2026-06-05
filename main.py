from fastapi import FastAPI, HTTPException, Depends
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from sqlalchemy.orm import Session
import json

from database import get_db, User as DBUser, engine, Base
from models import UserCreate, UserLogin, UserResponse, ProgressUpdate, TeacherCreate

app = FastAPI(title="Учебная платформа ИБ")

app.mount("/static", StaticFiles(directory="static"), name="static")

@app.get("/")
async def root():
    return FileResponse("static/index.html")

# Функция определения роли для ВХОДА (существующие пользователи)
def determine_role_by_login(login: str) -> str:
    login_lower = login.lower()
    if 'admin' in login_lower:
        return 'admin'
    elif 'teacher' in login_lower:
        return 'teacher'
    else:
        return 'student'

# === АВТОРИЗАЦИЯ ===
@app.post("/api/login")
async def login(user: UserLogin, db: Session = Depends(get_db)):
    db_user = db.query(DBUser).filter(
        DBUser.login == user.login,
        DBUser.password == user.password
    ).first()
    
    if not db_user:
        raise HTTPException(status_code=401, detail="Неверный логин или пароль")
    
    return {
        "id": db_user.id,
        "login": db_user.login,
        "name": db_user.name,
        "role": db_user.role,
        "progress": db_user.get_progress()
    }

# === РЕГИСТРАЦИЯ (ТОЛЬКО СТУДЕНТЫ) ===
@app.post("/api/register")
async def register(user: UserCreate, db: Session = Depends(get_db)):
    existing = db.query(DBUser).filter(DBUser.login == user.login).first()
    if existing:
        raise HTTPException(status_code=400, detail="Логин уже существует")
    
    # При регистрации всегда создаём студента
    progress = {str(i): False for i in range(1, 11)}
    
    db_user = DBUser(
        login=user.login,
        password=user.password,
        role="student",  # Всегда student при регистрации
        name=user.name,
        progress=json.dumps(progress)
    )
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    
    return {
        "id": db_user.id, 
        "login": db_user.login, 
        "name": db_user.name, 
        "role": db_user.role
    }

# === ОБНОВЛЕНИЕ ПРОГРЕССА ===
@app.put("/api/progress/{user_id}")
async def update_progress(user_id: int, update: ProgressUpdate, db: Session = Depends(get_db)):
    db_user = db.query(DBUser).filter(DBUser.id == user_id).first()
    if not db_user:
        raise HTTPException(status_code=404, detail="Пользователь не найден")
    
    progress = db_user.get_progress()
    progress[str(update.section_id)] = update.completed
    db_user.set_progress(progress)
    db.commit()
    
    return {"success": True, "progress": progress}

# === ПОЛУЧИТЬ ВСЕХ СТУДЕНТОВ (для преподавателя и админа) ===
@app.get("/api/students")
async def get_students(db: Session = Depends(get_db)):
    students = db.query(DBUser).filter(DBUser.role == "student").all()
    return [
        {
            "id": s.id,
            "login": s.login,
            "name": s.name,
            "progress": s.get_progress()
        }
        for s in students
    ]

# === СОЗДАТЬ ПРЕПОДАВАТЕЛЯ (только админ через отдельный эндпоинт) ===
@app.post("/api/teachers")
async def create_teacher(teacher: TeacherCreate, db: Session = Depends(get_db)):
    existing = db.query(DBUser).filter(DBUser.login == teacher.login).first()
    if existing:
        raise HTTPException(status_code=400, detail="Логин уже существует")
    
    db_teacher = DBUser(
        login=teacher.login,
        password=teacher.password,
        role="teacher",
        name=teacher.name,
        progress="{}"
    )
    db.add(db_teacher)
    db.commit()
    db.refresh(db_teacher)
    
    return {"id": db_teacher.id, "login": db_teacher.login, "name": db_teacher.name}

# === ПОЛУЧИТЬ ВСЕХ ПРЕПОДАВАТЕЛЕЙ (для админа) ===
@app.get("/api/teachers")
async def get_teachers(db: Session = Depends(get_db)):
    teachers = db.query(DBUser).filter(DBUser.role == "teacher").all()
    return [{"id": t.id, "login": t.login, "name": t.name} for t in teachers]

# === ПОЛУЧИТЬ ПОЛЬЗОВАТЕЛЯ ПО ID ===
@app.get("/api/user/{user_id}")
async def get_user(user_id: int, db: Session = Depends(get_db)):
    user = db.query(DBUser).filter(DBUser.id == user_id).first()
    if not user:
        raise HTTPException(status_code=404, detail="Пользователь не найден")
    
    return {
        "id": user.id,
        "login": user.login,
        "name": user.name,
        "role": user.role,
        "progress": user.get_progress()
    }

# === ИНИЦИАЛИЗАЦИЯ БАЗЫ ДАННЫХ С НАЧАЛЬНЫМИ ПОЛЬЗОВАТЕЛЯМИ ===
def init_db():
    """Создаёт таблицы и добавляет начальных пользователей если их нет"""
    Base.metadata.create_all(bind=engine)
    
    db = SessionLocal()
    try:
        # Проверяем есть ли уже пользователи
        if db.query(DBUser).count() == 0:
            print("📚 Создание начальных пользователей...")
            
            # Создаём студента
            student_progress = {str(i): False for i in range(1, 11)}
            student = DBUser(
                login="student",
                password="123",
                role="student",
                name="Иван Студент",
                progress=json.dumps(student_progress)
            )
            db.add(student)
            
            # Создаём преподавателя
            teacher = DBUser(
                login="teacher",
                password="123",
                role="teacher",
                name="Анна Преподаватель",
                progress="{}"
            )
            db.add(teacher)
            
            # Создаём администратора
            admin = DBUser(
                login="admin",
                password="admin123",
                role="admin",
                name="Главный Администратор",
                progress="{}"
            )
            db.add(admin)
            
            db.commit()
            print("✅ Пользователи созданы:")
            print("   - Студент: student / 123")
            print("   - Преподаватель: teacher / 123")
            print("   - Админ: admin / admin123")
        else:
            print("📚 База данных уже содержит пользователей")
            
    except Exception as e:
        print(f"❌ Ошибка при инициализации БД: {e}")
        db.rollback()
    finally:
        db.close()

# Импортируем SessionLocal для init_db
from database import SessionLocal

# Запускаем инициализацию БД при старте приложения
@app.on_event("startup")
async def startup_event():
    init_db()

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)