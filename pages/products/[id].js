import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const ProductDetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data, error } = useSWR(`/api/products/${id}`, fetcher);

  if (error) {
    return <div>Error loading product</div>;
  }

  if (!data) {
    return <div>Loading product...</div>;
  }

  return (
    <div>
      <h1>Product Details</h1>
      <h2>{data.name}</h2>
      <p>{data.description}</p>
    </div>
  );
};

export default ProductDetailsPage;
