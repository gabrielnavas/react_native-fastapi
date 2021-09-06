from uuid import uuid4

from modules.create_product.entity.product import Product 
from modules.create_product.infra.create_product import CreateUserRepository 


class CreateProductUsecase:
  def create(self, name) -> Product:
    repository = CreateUserRepository()
    id = uuid4().__str__()
    product = Product(id, name)
    repository.create_user_repository(product)
    return product
