import Image from 'next/image'
import React from 'react'

export default function About() {
  return (
    <div>
        <div >
        <div>
                <Image src="/images/about_bg.jpg" width={800} height={300} alt='About Flower Shop' className='w-full h-[50vh] object-cover object-[100%_75%] brightness-60'/>
                <h1 className="text-5xl font-dynapuff text-white text-center absolute inset-0 flex top-[25vh] justify-center">About Us</h1>
            </div>

            <div className='w-4/5 mx-auto text-[#313131] h-screen flex items-center justify-between'>
                <div className="w-[45%]">
                              <h1 className="text-5xl font-dynapuff  leading-16">Our Story</h1>
                              <p className="text-xl  text-justify font-dynapuff mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                <br/><br/>
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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

            <div className='w-full h-screen relative overflow-hidden'>
                <Image src="/images/flower_pic2.jpg" width={800} height={300} alt='About Flower Shop' className='w-full h-full object-cover object-[100%_75%] -z-50 absolute scale-130'/>
                <div className='absolute inset-0 -z-20 bg-[#561717] opacity-80'></div>

                <div className='w-3/4 mx-auto text-white h-screen flex items-center justify-between'>
                    <div className="w-[40%]">
                                <div className="relative flex justify-center">
                                    <Image
                                    src="/images/flower_pic.jpg"
                                    alt="Featured Flower"
                                    width={400}
                                    height={500}
                                    className=" h-112  object-cover object-bottom"
                                    />
                                </div>
                                </div>
                    
                    <div className="w-[45%]">
                                <h1 className="text-5xl font-dynapuff text-center  leading-16">Why Choose Us?</h1>
                                <br/>
                                <p className="text-xl  text-justify font-dynapuff mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                    <br/><br/>
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                </div>
                    
                            
                    </div>
            </div>


            <div className='w-4/5 mx-auto text-[#313131] h-screen py-24 grid grid-cols-2 gap-8'>
                <div className="flex flex-col justify-center col-span-2">
                    <h1 className="text-5xl font-dynapuff  leading-16 text-center">Our Core Values</h1>
                    <p className="text-xl text-[#656565] font-dynapuff mt-4 px-12 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                </div>
                <div className="flex flex-col justify-center">
                    <h1 className="text-5xl font-dynapuff  leading-16 text-center">Our Mission</h1>
                    <p className="text-xl text-[#656565]  text-justify font-dynapuff mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                </div>
                <div className="flex flex-col justify-center">
                    <h1 className="text-5xl font-dynapuff  leading-16 text-center">Our Vision</h1>
                    <p className="text-xl text-[#656565]  text-justify font-dynapuff mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                       </p>
                </div>
            </div>
          </div>
    </div>
  )
}
