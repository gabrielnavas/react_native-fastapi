from typing import List, Union

from modules.create_product.entity.product import Product
from modules.search_product.infra.search_product_by_id import SearchProductRepository

class SearchProductusecase:
    def search_by_name(self, name: str) -> List[Product]:
      search_repository = SearchProductRepository()
      name = name.lower().strip()
      products = search_repository.by_name(name)
      return products

    def search_by_id(self, id: str) -> Union[Product, None]:
      search_repository = SearchProductRepository()
      id = id.lower().strip()
      return search_repository.by_id(id)