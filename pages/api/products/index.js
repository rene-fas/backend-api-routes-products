import { getAllProducts } from "../../../services/productServices";

export default function handler(req, res) {
  const products = getAllProducts();
  res.status(200).json(products);
}
