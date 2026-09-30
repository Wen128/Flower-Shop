
export default function Footer() {
  return (
    <div className="w-full h-[50vh] bg-[#F7DCDC] flex justify-center items-center">
        <div className="flex w-4/5 justify-between font-dynapuff">
            <div className="flex flex-col justify-between">
                <h1 className="text-4xl text-[#FF7979] font-dynapuff">Flower<span className="text-[#913838]">Shop</span></h1>
                <h1 className="text-xl">© 2026. All rights reserved</h1>
            </div>

                {/* Navigation Links */}
            <div className="flex space-x-16 text-2xl">
                <a href="#" className="text-[#913838] hover:text-[#FF7979]">Home</a>
                <a href="#" className="text-[#913838] hover:text-[#FF7979]">Shop</a>
                <a href="#" className="text-[#913838] hover:text-[#FF7979]">About</a>
                <a href="#" className="text-[#913838] hover:text-[#FF7979]">FAQs</a>
            </div>

            <div className="flex flex-col text-lg border-l-2 py-4 pl-12">
                <p>Call:</p>
                <p>+6012-345 6789</p>
                <br/>
                <p>Email:</p>
                <p>flowershop123@gmail.com</p>
                <br/>
                <br/>
                <div className="flex gap-4 ">
                    <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="text-black transition-colors duration-300 hover:text-secondary"
                    >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path d="M13.5 21v-8.2h2.8l.4-3.2h-3.2V7.5c0-.9.3-1.6 1.6-1.6h1.7V3.1c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.3H7.3v3.2h2.8V21h3.4Z" />
                    </svg>
                    </a>

                    <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="text-black transition-colors duration-300 hover:text-secondary"
                    >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <rect x="3" y="3" width="18" height="18" rx="5" />
                        <circle cx="12" cy="12" r="4" />
                        <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
                    </svg>
                    </a>
                </div>

            </div>
        </div>
    </div>
  )
}
