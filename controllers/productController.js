const asyncHandler = require('express-async-handler');
const Product = require('../models/Product');

const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) res.json(product);
  else { res.status(404); throw new Error('Product not found'); }
});

const createProduct = asyncHandler(async (req, res) => {
  const product = new Product({ name: 'Sample name', price: 0, user: req.user._id, image: '/uploads/sample.jpg', brand: 'Brand', category: 'Category', countInStock: 0, numReviews: 0, description: 'Sample description' });
  const created = await product.save();
  res.status(201).json(created);
});

const updateProduct = asyncHandler(async (req, res) => {
  const { name, price, description, image, brand, category, countInStock } = req.body;
  const product = await Product.findById(req.params.id);
  if (product) {
    product.name = name || product.name;
    product.price = price || product.price;
    product.description = description || product.description;
    product.image = image || product.image;
    product.brand = brand || product.brand;
    product.category = category || product.category;
    product.countInStock = countInStock || product.countInStock;
    const updated = await product.save();
    res.json(updated);
  } else { res.status(404); throw new Error('Product not found'); }
});

const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) { await product.remove(); res.json({ message: 'Product removed' }); }
  else { res.status(404); throw new Error('Product not found'); }
});

module.exports = { getProducts, getProductById, createProduct, updateProduct, deleteProduct };
