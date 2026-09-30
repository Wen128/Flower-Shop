import Image from "next/image";

interface Products {
  name: string;
  price: number;
  image: string;
}

interface ProductCardProps {
  product: Products;
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="flex flex-col justify-center items-center font-dynapuff text-3xl text-secondary">
      <Image src={product.image} alt={product.name} width={280} height={320}/>
      <h2 className="mt-2">{product.name}</h2>
      <p>RM {product.price}</p>
    </div>
  );
}

export default ProductCard;