# Ecommerce-App
Backend API for an ecommerce platform admin to manage product inventory

#### Installation Instructions
1. Clone the repository to the system
2. `npm install` - To install required packages
3. `npm start` - To start the server

##### Testing with postman
`POST` `/products/create` - API to create product<br />
`GET` `/products` - API to get details of created products<br />
`DELETE` `/products/:id` - API to delete product with given id<br />
`POST` `/products/:id/update_quantity/?number=10` - API to update quantity of product(increment/decrement)

###### Technologies used
nodeJS, ExpressJS, MongoDB
