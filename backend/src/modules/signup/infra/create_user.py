from modules.shared.infra.database.database import conn
from modules.signup.entity.user import User


class CreateUserRepository:
    def create(self, user: User):
        sql = """
            INSERT INTO "user"
            (id, email, password)
            VALUES (%s, %s, %s)
        """
        cursor = conn.cursor()
        cursor.execute(sql, (user.id, user.email, user.password))
        conn.commit()
