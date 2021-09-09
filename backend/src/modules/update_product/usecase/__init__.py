from modules.create_product.entity.product import Product
from modules.update_product.infra import UpdateProductRepository

class UpdateProductUsecase:
  def update(self, id: str, name: str) -> bool:
    product = Product(id, name)
    repository = UpdateProductRepository()
    success = repository.update(product)
    return success