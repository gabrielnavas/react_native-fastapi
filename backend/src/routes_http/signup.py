from fastapi import APIRouter, Response, status
from pydantic import BaseModel

from modules.signup import make_sign_up_usecase

route = APIRouter()


class Signup(BaseModel):
    email: str
    password: str


@route.post("/signup")
def signup(signup: Signup, response: Response):
    try:
        usecase = make_sign_up_usecase()
        usecase.handle(signup.email, signup.password)
        response.status_code = status.HTTP_201_CREATED
    except Exception as ex:
        print(ex)
        response.status_code = status.HTTP_201_CREATED
        return {'message': 'server error'}
