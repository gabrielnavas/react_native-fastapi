from typing import List, Union

from modules.shared.infra.database.database import conn
from modules.create_product.entity.product import Product

class SearchProductRepository:

  def by_name(self, name: str) -> List[Product]:
    name = name + '%'
    cursor = conn.cursor()
    cursor.execute("""
      SELECT id, name 
      FROM public.product 
      WHERE name like %s
      ORDER BY name
    """
    , (name,))
    results = cursor.fetchall()
    products = [Product(result[0], result[1]) for result in results ]
    cursor.close()
    return products

  def by_id(self, id: str) -> Union[Product, None]:
      cursor = conn.cursor()
      cursor.execute("""
        SELECT id, name 
        FROM public.product 
        WHERE id = %s
      """
      , (id,))
      result = cursor.fetchone()
      
      if result == None:
        cursor.close()
        return None

      product = Product(result[0], result[1])
      cursor.close()
      return product
