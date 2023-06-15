import useSWR from "swr";
import Link from "next/link";

const fetcher = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const ProductsPage = () => {
  const { data, error } = useSWR("/api/products", fetcher);

  if (error) {
    return <div>Error loading products</div>;
  }

  if (!data) {
    return <div>Loading products...</div>;
  }

  return (
    <div>
      <h1>All Products</h1>
      {data.map((product) => (
        <div key={product.id}>
          <Link href={`/products/${product.id}`}>
            <h2>{product.name}</h2>
          </Link>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductsPage;
