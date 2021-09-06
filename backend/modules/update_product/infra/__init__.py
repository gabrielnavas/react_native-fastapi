from modules.shared.infra.database.database import conn

from modules.create_product.entity.product import Product

class UpdateProductRepository:
  def update(self, product: Product) -> bool:
    cursor = conn.cursor()
    sql = """
      UPDATE public.product 
        SET name = %s
      WHERE id = %s
    """
    params = (product.name, product.id)
    cursor.execute(sql, params)
    conn.commit()
    success = cursor.rowcount > 0
    cursor.close()
    return success
