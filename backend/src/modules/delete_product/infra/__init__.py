from modules.shared.infra.database.database import conn

class DeleteProductRepository:
  def delete_by_id(self, id: str):
    cursor = conn.cursor()
    cursor.execute("""
      DELETE FROM product
      WHERE id = %s
    """, (id,))
    conn.commit()
    cursor.close()
    