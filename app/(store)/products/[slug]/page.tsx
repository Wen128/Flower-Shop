import BackButton from "@/src/components/BackButton";
import ProductActions from "./ProductActions";
import Link from "next/link";

interface ProductsProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function Products({
  params,
}: ProductsProps) {
  const products = [
    {
    id: "1",
      name: "Pink Flower",
      slug: "pink-flower",
      price: 128,
      image: "/images/best_seller1.png",
    },
    {
        id: "2",
      name: "Yellow Flower",
      slug: "yellow-flower",
      price: 158,
      image: "/images/best_seller2.png",
    },
    {
        id: "3",
      name: "Orange Flower",
      slug: "orange-flower",
      price: 138,
      image: "/images/best_seller3.png",
    },
    {
        id: "4",
      name: "Purple Flower",
      slug: "purple-flower",
      price: 188,
      image: "/images/best_seller4.png",
    },
  ];

  const { slug } = await params;

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return <div className="flex min-h-screen w-full items-center justify-center text-xl text-primary font-dynapuff">Product not found</div>;
  }

  return (
    <div className="flex flex-col min-h-screen w-full justify-center items-center">
        {/* Back Button */}
        <div className="flex w-4/5 items-center justify-start my-4">
          <p><Link href="/shop" className="text-primary text-lg hover:text-tertiary font-el-messiri">
            &larr; Back to Shop
          </Link></p>
        </div>
      <div className="flex w-4/5 items-center justify-between">
        {/* Product Image */}
        <div className="flex w-[40%] items-center justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="h-auto w-full object-contain"
          />
        </div>

        {/* Product Information */}
        <div className="flex w-[50%] flex-col items-start space-y-4 font-dynapuff text-primary">
          <h1 className="text-4xl font-medium">
            {product.name}
          </h1>

          <p className="text-2xl">
            RM{product.price.toFixed(2)}
          </p>

          <p className="text-xl text-gray-500 font-el-messiri">
            Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Sed euismod, nunc ut aliquam tincidunt, nunc
            nisl aliquam nisl, eget aliquam nunc nisl euismod
            nunc.
          </p>

          {/* Interactive Client Component */}
          <ProductActions product={product} />
        </div>
      </div>
    </div>
  );
}