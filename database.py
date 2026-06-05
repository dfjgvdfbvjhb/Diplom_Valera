from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import json

SQLALCHEMY_DATABASE_URL = "sqlite:///./students.db"

engine = create_engine(SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False})
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

class User(Base):
    __tablename__ = "users"
    
    id = Column(Integer, primary_key=True, index=True)
    login = Column(String, unique=True, index=True)
    password = Column(String)
    role = Column(String)  # student, teacher, admin
    name = Column(String)
    progress = Column(String, default="{}")  # Храним JSON строку
    
    def get_progress(self):
        return json.loads(self.progress) if self.progress else {}
    
    def set_progress(self, progress_dict):
        self.progress = json.dumps(progress_dict)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()