import { getProductById } from "../../../services/productServices";

export default function handler(req, res) {
  const { id } = req.query;
  const product = getProductById(id);

  if (!product) {
    res.status(404).json({ message: "Product not found" });
  } else {
    res.status(200).json(product);
  }
}
