# Ecommerce-shop-backend


# Run

### Install

```
npm install
```

### Start API

```
npm start
```

# Routes

### Products

```
GET      https://thach-eshop.herokuapp.com/api/v1/products
GET      https://thach-eshop.herokuapp.com/api/v1/products/:id
POST     https://thach-eshop.herokuapp.com/api/v1/products
PUT      https://thach-eshop.herokuapp.com/api/v1/products/:id
DELETE   https://thach-eshop.herokuapp.com/api/v1/products/:id
PUT gallery-images : https://thach-eshop.herokuapp.com/api/v1/products/gallery-images/:id
GET featured products: https://thach-eshop.herokuapp.com/api/v1/products/get/featured/:count
GET products count: https://thach-eshop.herokuapp.com/api/v1/products/get/count
```

### Orders

```
GET      https://thach-eshop.herokuapp.com/api/v1/orders
GET      https://thach-eshop.herokuapp.com/api/v1/orders/:id
POST     https://thach-eshop.herokuapp.com/api/v1/orders
PUT      https://thach-eshop.herokuapp.com/api/v1/orders/:id
DELETE   https://thach-eshop.herokuapp.com/api/v1/orders/:id
GET orders count: https://thach-eshop.herokuapp.com/api/v1/orders/get/count
```

### Users

```
GET      https://thach-eshop.herokuapp.com/api/v1/users
GET      https://thach-eshop.herokuapp.com/api/v1/users/:id
POST     https://thach-eshop.herokuapp.com/api/v1/users
PUT      https://thach-eshop.herokuapp.com/api/v1/users/:id
DELETE   https://thach-eshop.herokuapp.com/api/v1/users/:id
GET users count: https://thach-eshop.herokuapp.com/api/v1/users/get/count
```

#### Register new user

```
POST     https://thach-eshop.herokuapp.com/api/v1/users/register
```

#### Login user

To login the user and get the auth token you can use:

```
POST     https://thach-eshop.herokuapp.com/api/v1/users/login
```
