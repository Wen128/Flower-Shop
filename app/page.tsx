import { Navbar } from "@/src/components/Navbar";
import Image from "next/image";
import ProductCard from "@/src/components/ProductCard";
import Footer from "@/src/components/Footer";

export default function Home() {
  return (
    <div>
      <div className="relative w-full min-h-[82vh] sm:min-h-screen overflow-hidden">

      <Image src="/images/flower_bg.png" alt="Flower Shop" fill priority sizes="100vw" className="absolute -z-50 object-cover object-center" />
      <Navbar />
      <h1 className="absolute bottom-10 sm:bottom-12 left-1/2 w-[92%] -translate-x-1/2 text-center text-5xl sm:text-7xl lg:text-8xl leading-tight font-inspiration">Flowers for Every Moment</h1>
      </div>

      <div className="w-full flex justify-center bg-[#F7F7F7] py-16 sm:py-24 lg:min-h-screen lg:items-center">
        <div className="w-11/12 sm:w-4/5 flex flex-col lg:flex-row gap-12 lg:gap-0 justify-between items-center">
          <div className="w-full lg:w-[38%]">
              <div className="relative after:absolute after:-inset-3 after:rounded-3xl after:border-2 after:border-[#913838]">
                <Image
                  src="/images/bouquet.jpg"
                  alt="Featured Flower"
                  width={500}
                  height={500}
                  className="relative h-72 sm:h-96 lg:h-112 w-full rounded-2xl border border-[#913838] object-cover object-bottom"
                  />
              </div>
            </div>

            <div className="w-full lg:w-[52%]">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-dynapuff text-primary leading-tight">Birthdays, anniversaries, or just because — we’ve got you covered.</h1>
              <p className="text-secondary text-xl sm:text-2xl lg:text-3xl font-dynapuff my-6 sm:my-8">Discover more flowers and find your perfect bouquet</p>
              <a href="/shop" className="inline-block font-dynapuff text-lg sm:text-2xl mb-4 hover:bg-tertiary bg-primary text-white px-8 sm:px-12 py-4 sm:py-6">SHOP NOW</a>
            </div>


        </div>
      </div>


      {/* Best Seller */}
      <div className="flex flex-col justify-center items-center w-full bg-[#F7F7F7] py-16 sm:py-24">
        <h1 className="text-3xl sm:text-5xl font-dynapuff text-primary font-medium mb-8 sm:mb-14">Best Sellers</h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8 w-11/12 sm:w-4/5">
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

      <a href="/shop" className="font-dynapuff text-lg sm:text-2xl mt-8 hover:bg-tertiary bg-primary text-white px-8 sm:px-12 py-4 sm:py-6">DISCOVER MORE</a>

      </div>

      {/* Our Story */}
      <div className="bg-primary w-full flex justify-center items-center py-16 sm:py-24 lg:min-h-screen">
        <div className="flex flex-col-reverse lg:flex-row gap-10 lg:gap-0 w-11/12 sm:w-4/5 justify-between items-center">

        <div className="w-full lg:w-[45%]">
              <h1 className="text-3xl sm:text-5xl font-dynapuff text-white leading-tight">Our Story</h1>
              <p className="text-[#DDDDDD] text-lg sm:text-xl lg:text-2xl text-left sm:text-justify font-dynapuff mt-4 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
              <a href="/about" className="inline-block font-dynapuff text-lg sm:text-2xl mb-4 hover:bg-[#DDDDDD] bg-white text-primary px-8 sm:px-12 py-4 sm:py-6">LEARN MORE</a>
            </div>

          <div className="w-full lg:w-[50%]">
              <div className="relative">
                <Image
                  src="/images/flower_shop.jpg"
                  alt="Featured Flower"
                  width={500}
                  height={500}
                  className="h-72 sm:h-96 lg:h-112 w-full object-cover object-bottom"
                  />
              </div>
            </div>

            

        </div>

      </div>

      <Footer />


    </div>
  );
}
