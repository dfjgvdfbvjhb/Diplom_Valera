from pydantic import BaseModel
from typing import Dict, Optional

class UserCreate(BaseModel):
    login: str
    password: str
    name: str
    role: str = "student"

class UserLogin(BaseModel):
    login: str
    password: str
    role: str

class UserResponse(BaseModel):
    id: int
    login: str
    name: str
    role: str
    progress: Optional[Dict] = None

class ProgressUpdate(BaseModel):
    section_id: int
    completed: bool

class TeacherCreate(BaseModel):
    login: str
    password: str
    name: str