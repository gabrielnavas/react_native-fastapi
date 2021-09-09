from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routes_http.product import route as routeProduct
from routes_http.signup import route as routeSignUp

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(routeProduct)
app.include_router(routeSignUp)
