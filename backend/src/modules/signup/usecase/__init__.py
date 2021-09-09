from uuid import uuid4
from modules.signup.entity.user import User
from modules.signup.infra.create_user import CreateUserRepository
import bcrypt


class SignUpUsecase:
    def handle(self, email: str, password: str) -> None:
        id = uuid4().__str__()
        new_user = User(id, email, password)
        passwd_hashed = bcrypt.hashpw(password.encode(), bcrypt.gensalt())
        new_user.password = passwd_hashed.decode()
        repository = CreateUserRepository()
        repository.create(new_user)
