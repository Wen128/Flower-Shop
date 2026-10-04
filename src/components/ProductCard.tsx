import Link from "next/dist/client/link";
import Image from "next/image";

interface Products {
  name: string;
  slug: string;
  price: number;
  image: string;
}

interface ProductCardProps {
  product: Products;
}

function ProductCard({ product }: ProductCardProps) {
  return (
    // Link to the product page using the slug
    <Link href={`/products/${product.slug}`} className="flex flex-col justify-center items-center font-dynapuff text-2xl text-secondary hover:scale-105 transition-transform duration-300 cursor-pointer">
      <Image src={product.image} alt={product.name} width={280} height={320}/>
      <h2 className="mt-2">{product.name}</h2>
      <p>RM {product.price}</p>
    </Link>
  );
}

export default ProductCard;