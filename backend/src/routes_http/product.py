from typing import Optional

from fastapi import APIRouter, Response, status
from pydantic import BaseModel


from modules.create_product import make_create_product_usecase
from modules.search_product import make_search_product_usecase
from modules.delete_product import make_delete_product_usecase
from modules.update_product import make_update_product_usecase


route = APIRouter()


class PostProductBody(BaseModel):
    name: str


@route.post("/product")
def create_product(product: PostProductBody, response: Response):
    try:
        product_usecase = make_create_product_usecase()
        product = product_usecase.create(product.name)
        response.status_code = status.HTTP_201_CREATED
        return product.__dict__
    except:
        response.status_code = status.HTTP_500_INTERNAL_SERVER_ERROR
        return {'message': 'server error'}


@route.get("/product")
def get_product(response: Response, name: str):
    try:
        usecase = make_search_product_usecase()
        if name != None:
            products = usecase.search_by_name(name)
            print(products)
        return products
    except Exception as ex:
        print(ex)
        response.status_code = status.HTTP_500_INTERNAL_SERVER_ERROR
        return {'message': 'server error'}


@route.delete("/product")
def delete_product(response: Response, id: str):
    try:
        print(id)
        usecase = make_delete_product_usecase()
        usecase.delete_by_id(id)
    except Exception as error:
        print(error)
        response.status_code = status.HTTP_500_INTERNAL_SERVER_ERROR
        return {'message': 'server error'}


class UpdateProductBody(BaseModel):
    id: str
    name: str


@route.put("/product")
def update_product(response: Response, product: UpdateProductBody):

    try:
        usecase = make_update_product_usecase()
        if not usecase.update(product.id, product.name):
            response.status_code = status.HTTP_400_BAD_REQUEST
            return {'message': 'Erro no servidor'}

    except Exception as error:
        print(error)
        response.status_code = status.HTTP_500_INTERNAL_SERVER_ERROR
        return {'message': 'server error'}
