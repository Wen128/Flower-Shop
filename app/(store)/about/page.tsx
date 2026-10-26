import Image from 'next/image'
import React from 'react'

export default function About() {
  return (
    <div>
        <div>
        <div className="relative">
                <Image src="/images/about_bg.jpg" width={800} height={300} alt='About Flower Shop' className='w-full h-[40vh] sm:h-[50vh] object-cover object-[100%_75%] brightness-60'/>
                <h1 className="text-4xl sm:text-5xl font-dynapuff text-white text-center absolute inset-x-0 top-[18vh] sm:top-[25vh] flex justify-center">About Us</h1>
            </div>

            <div className='w-11/12 sm:w-4/5 mx-auto text-[#313131] py-14 sm:py-20 flex flex-col lg:flex-row items-center justify-between gap-10'>
                <div className="w-full lg:w-[45%]">
                              <h1 className="text-3xl sm:text-5xl font-dynapuff leading-tight">Our Story</h1>
                              <p className="text-base sm:text-xl text-left sm:text-justify font-dynapuff mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                <br/><br/>
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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

            <div className='w-full min-h-[40rem] sm:min-h-screen relative overflow-hidden'>
                <Image src="/images/flower_pic2.jpg" width={800} height={300} alt='About Flower Shop' className='w-full h-full object-cover object-[100%_75%] -z-50 absolute scale-130'/>
                <div className='absolute inset-0 -z-20 bg-[#561717] opacity-80'></div>

                <div className='w-11/12 sm:w-3/4 mx-auto text-white py-14 sm:py-20 flex flex-col lg:flex-row items-center justify-between gap-10'>
                    <div className="w-full lg:w-[40%]">
                                <div className="relative flex justify-center">
                                    <Image
                                    src="/images/flower_pic.jpg"
                                    alt="Featured Flower"
                                    width={400}
                                    height={500}
                                    className="h-80 sm:h-112 w-full sm:w-auto object-cover object-bottom"
                                    />
                                </div>
                                </div>
                    
                    <div className="w-full lg:w-[45%]">
                                <h1 className="text-3xl sm:text-5xl font-dynapuff text-center leading-tight">Why Choose Us?</h1>
                                <br/>
                                <p className="text-base sm:text-xl text-left sm:text-justify font-dynapuff mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    <br/><br/>
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                </div>
                    
                            
                    </div>
            </div>


            <div className='w-11/12 sm:w-4/5 mx-auto text-[#313131] py-14 sm:py-24 grid grid-cols-1 sm:grid-cols-2 gap-8'>
                <div className="flex flex-col justify-center sm:col-span-2">
                    <h1 className="text-3xl sm:text-5xl font-dynapuff leading-tight text-center">Our Core Values</h1>
                    <p className="text-base sm:text-xl text-[#656565] font-dynapuff mt-4 sm:px-12 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                </div>
                <div className="flex flex-col justify-center">
                    <h1 className="text-3xl sm:text-5xl font-dynapuff leading-tight text-center">Our Mission</h1>
                    <p className="text-base sm:text-xl text-[#656565] text-left sm:text-justify font-dynapuff mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                </div>
                <div className="flex flex-col justify-center">
                    <h1 className="text-3xl sm:text-5xl font-dynapuff leading-tight text-center">Our Vision</h1>
                    <p className="text-base sm:text-xl text-[#656565] text-left sm:text-justify font-dynapuff mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                       </p>
                </div>
            </div>
          </div>
    </div>
  )
}
