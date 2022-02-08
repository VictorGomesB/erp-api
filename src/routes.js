const express = require("express");
const routes = express.Router();
const jwt = require("jsonwebtoken");
const productController = require("./products/controller");
const userController = require("./user/controller");
const clientController = require("./clients/controller");
const saleController = require("./sale/controller");
const stockController = require("./stock/controller");

//product routes

routes.get("/products", async (req, res) => {
    const products = await productController.getAll();
    console.log(products);
    return res.json(products);
});

routes.get("/product/:id", async (req, res) => {
    const { id } = req.params;
    const product = await productController.getById(id);
    return res.json(product);
});

routes.post("/product", async (req, res) => {
    //todo data validation
    const product = req.body;
    console.log(req.body);
    const result = await productController.store(product);
    return res.json(result);
});

routes.put("/product/:id", async (req, res) => {
    const { id } = req.params;
    const { name, description, value } = req.body;
    const product = {
        id: id,
        name: name,
        description: description,
        value: value,
    };
    const result = await productController.update(product);
    return res.json(result);
});

routes.delete("/product/:id", async (req, res) => {
    const { id } = req.params;
    const result = await productController.destroy(id);
    return res.json(result);
});

//user routes

routes.get("/users", async (req, res) => {
    const products = await userController.getAll();
    console.log(products);
    return res.json(products);
});

routes.get("/user/:id", async (req, res) => {
    const { id } = req.params;
    const product = await userController.getById(id);
    return res.json(product);
});

routes.post("/user", async (req, res) => {
    const { name, email, password } = req.body;
    const user = {
        name: name,
        email: email,
        password: password,
    };
    const result = await userController.store(user);
    return res.json(result);
});

routes.put("/user/:id", async (req, res) => {
    const { id } = req.params;
    const { name, email, password } = req.body;
    const product = {
        id: id,
        name: name,
        email: email,
        password: password,
    };
    const result = await userController.update(product);
    return res.json(result);
});

routes.delete("/user/:id", async (req, res) => {
    const { id } = req.params;
    const result = await userController.destroy(id);
    return res.json(result);
});

//client routes

routes.get("/clients", async (req, res) => {
    const clients = await clientController.getAll();
    console.log(clients);
    return res.json(clients);
});

routes.get("/client/:id", async (req, res) => {
    const { id } = req.params;
    const client = await clientController.getById(id);
    return res.json(client);
});

routes.post("/client", async (req, res) => {
    //todo data validation
    const client = req.body;
    console.log(req.body);
    const result = await clientController.store(client);
    return res.json(result);
});

routes.put("/client/:id", async (req, res) => {
    const { id } = req.params;
    const { name, document, email } = req.body;
    const client = {
        id: id,
        name: name,
        document: document,
        email: email,
    };
    const result = await clientController.update(client);
    return res.json(result);
});

routes.delete("/client/:id", async (req, res) => {
    const { id } = req.params;
    const result = await clientController.destroy(id);
    return res.json(result);
});

//sales routes

routes.get("/sales", async (req, res) => {
    const sales = await saleController.getAll();
    console.log(sales);
    return res.json(sales);
});

routes.get("/sale/:id", async (req, res) => {
    const { id } = req.params;
    const sale = await saleController.getById(id);
    return res.json(sale);
});

routes.get("/sale/items/:id", async (req, res) => {
    const { id } = req.params;
    const sale = await saleController.getSaleItems(id);
    return res.json(sale);
});

routes.post("/sale", async (req, res) => {
    //todo data validation
    const sale = req.body;
    console.log(req.body);
    const result = await saleController.store(sale);
    return res.json(result);
});

routes.put("/sale/:id", async (req, res) => {
    const { id } = req.params;
    const { payment, date, clientId } = req.body;
    const sale = {
        id: id,
        payment: payment,
        date: date,
        clientId: clientId,
    };
    const result = await saleController.update(sale);
    return res.json(result);
});

routes.delete("/sale/:id", async (req, res) => {
    const { id } = req.params;
    const result = await saleController.destroy(id);
    return res.json(result);
});

//stock routes

routes.get("/stocks", async (req, res) => {
    const stocks = await stockController.getAll();
    console.log(stocks);
    return res.json(stocks);
});

routes.get("/stock/:id", async (req, res) => {
    const { id } = req.params;
    const stock = await stockController.getById(id);
    return res.json(stock);
});

routes.get("/stock/items/:id", async (req, res) => {
    const { id } = req.params;
    const result = await stockController.getItems(id);
    return res.json(result);
});

routes.post("/stock/items", async (req, res) => {
    const stockItems = req.body;
    const result = await stockController.storeItems(stockItems);
    return res.json(result);
});

routes.post("/stock", async (req, res) => {
    const stock = req.body;
    console.log(req.body);
    const result = await stockController.store(stock);
    return res.json(result);
});

routes.put("/stock/:id", async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const stock = {
        id: id,
        name: name,
    };
    const result = await stockController.update(stock);
    return res.json(result);
});

routes.delete("/stock/:id", async (req, res) => {
    const { id } = req.params;
    const result = await stockController.destroy(id);
    return res.json(result);
});

routes.delete("/stock/item/:id", async (req, res) => {
    const { id } = req.params;
    const result = await stockController.destroyItem(id);
    return res.json(result);
});

module.exports = routes;
