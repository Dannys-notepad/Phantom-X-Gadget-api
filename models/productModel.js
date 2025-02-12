let products = require("../data/products");

const { writeDataToFile } = require("../utils");

//Find all products
function findAll() {
  return new Promise((resolve, reject) => {
    resolve(products);
  });
}

//Find a product by id 
function findById(id) {
  return new Promise((resolve, reject) => {
    const product = products.find((p) => p.id === id);
    resolve(product);
  });
}

//Find a product by category 
function findByCategory(categorySearched) {
  return new Promise((resolve, reject) => {
    const result = [];

    for (const item of products) {
      if (item.category.includes(categorySearched)) {
        result.push(item);
      }
    }

    resolve(result);
  });
}

//Create a product
function add(product) {
  return new Promise((resolve, reject) => {
    const newProduct = { ...product };
    products.push(newProduct);
    writeDataToFile("./data/products.json", products);
    resolve(newProduct);
  });
}

//update a product
function update(id, product) {
  return new Promise((resolve, reject) => {
    const index = products.findIndex((p) => p.id === id);
    products[index] = { id, ...product };
    writeDataToFile("./data/products.json", products);
    resolve(products[index]);
  });
}

//Remove a product
function remove(id) {
  return new Promise((resolve, reject) => {
    products = products.filter((p) => p.id !== id);
    writeDataToFile("./data/products.json", products);
    resolve();
  });
}

module.exports = {
  findAll,
  findById,
  findByCategory,
  add,
  update,
  remove,
};
