from modules.search_product.usecase import SearchProductusecase
from modules.delete_product.infra import DeleteProductRepository

class DeleteProductUsecase:
  def delete_by_id(self, id: str):
    delete_product_repository = DeleteProductRepository()
    search_product = SearchProductusecase()
    product_found = search_product.search_by_id(id)
    if product_found == None:
      raise Exception('product with id: ' + id + ' does not exists')
    delete_product_repository.delete_by_id(id)