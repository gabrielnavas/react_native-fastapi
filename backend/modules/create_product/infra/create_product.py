from modules.shared.infra.database.database import conn

from modules.create_product.entity.product import Product

class CreateUserRepository:
  def create_user_repository(self, product: Product):
    cur = conn.cursor()
    resulte = cur.execute("""
      INSERT INTO public.product 
        (id, name) 
      VALUES (%s, %s)
    """, (product.id, product.name))
    conn.commit()
