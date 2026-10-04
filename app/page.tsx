import { Navbar } from "@/src/components/Navbar";
import Image from "next/image";
import ProductCard from "@/src/components/ProductCard";
import Footer from "@/src/components/Footer";

export default function Home() {
  return (
    <div>
      <div className="relative w-full h-screen">

      <Image src="/images/flower_bg.png" alt="Flower Shop" width={800} height={600} className="w-full h-auto absolute -z-50" />
      <Navbar />
      <h1 className="absolute bottom-1/12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-8xl  font-inspiration">Flowers for Every Moment</h1>
      </div>

      <div className="w-full h-screen flex justify-center items-center bg-[#F7F7F7]">
        <div className="w-4/5 flex justify-between items-center">
          <div className="w-[38%]">
              <div className="relative after:absolute after:-inset-3 after:rounded-3xl after:border-2 after:border-[#913838]">
                <Image
                  src="/images/bouquet.jpg"
                  alt="Featured Flower"
                  width={500}
                  height={500}
                  className="relative h-112 w-full rounded-2xl border border-[#913838] object-cover object-bottom"
                  />
              </div>
            </div>

            <div className="w-[52%]">
              <h1 className="text-5xl font-dynapuff text-primary leading-16">Birthdays, anniversaries, or just because — we’ve got you covered.</h1>
              <p className="text-secondary text-3xl font-dynapuff my-12">Discover more flowers and find your perfect bouquet</p>
              <button className="font-dynapuff text-3xl mb-4 hover:bg-tertiary bg-primary text-white px-12 py-6">SHOP NOW</button>
            </div>


        </div>
      </div>


      {/* Best Seller */}
      <div className="flex flex-col justify-center items-center w-full h-screen bg-[#F7F7F7]">
        <h1 className="text-5xl font-dynapuff text-primary font-medium mb-14">Best Sellers</h1>
      <div className="flex justify-between w-4/5">
        <ProductCard product={{
            name: "Pink Flower",
            slug: "pink-flower",
            price: 128,
            image: "/images/best_seller1.png",
          }}/>
        <ProductCard product={{
            name: "Yellow Flower",
            slug: "yellow-flower",
            price: 158,
            image: "/images/best_seller2.png",
          }}/>
        <ProductCard product={{
            name: "Orange Flower",
            slug: "orange-flower",
            price: 138,
            image: "/images/best_seller3.png",
          }}/>
        <ProductCard product={{
            name: "Purple Flower",
            slug: "purple-flower",
            price: 188,
            image: "/images/best_seller4.png",
          }}/>
      </div>

      <button className="font-dynapuff text-3xl mt-8 hover:bg-tertiary bg-primary text-white px-12 py-6">DISCOVER MORE</button>

      </div>

      {/* Our Story */}
      <div className="bg-primary w-full h-screen flex justify-center items-center">
        <div className="flex w-4/5 justify-between">

        <div className="w-[45%]">
              <h1 className="text-5xl font-dynapuff text-white leading-16">Our Story</h1>
              <p className="text-[#DDDDDD] text-2xl text-justify font-dynapuff mt-1 mb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
              <button className="font-dynapuff text-3xl mb-4 hover:bg-[#DDDDDD] bg-white text-primary px-12 py-6">LEARN MORE</button>
            </div>

          <div className="w-[50%]">
              <div className="relative">
                <Image
                  src="/images/flower_shop.jpg"
                  alt="Featured Flower"
                  width={500}
                  height={500}
                  className=" h-112 w-full  object-cover object-bottom"
                  />
              </div>
            </div>

            

        </div>

      </div>

      <Footer />


    </div>
  );
}
