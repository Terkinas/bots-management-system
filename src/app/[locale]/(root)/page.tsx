import { Button } from '@/components/ui/button'
import React from 'react'
import { FiUserPlus, FiEye, FiHeart,
  FiZap, FiTrendingUp, FiPhoneCall, FiHeadphones, FiFileText } from 'react-icons/fi'
import Image from 'next/image'

type Props = {}

function RootPage({}: Props) {
  return (
    <main>

      {/* hero */}
      <section className="dark:bg-gray-800 dark:text-gray-100 w-full md:w-10/12 max-w-7xl mx-auto">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-evenly">
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <Image width={800} height={800} src="/images/landing/hero-image-social-media.png" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
          </div>
          <div className="flex flex-col justify-center text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl font-bold leading-normal sm:text-5xl">Buy TikTok <br /> Followers & Likes</h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">Social media is exploding and a revolution is going on that’s changing the way consumers interact with businesses.</p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start [&>button]:gap-2">
              <Button size="lg" className='whitespace-nowrap py-3' variant="outline"><FiHeart /> Buy likes</Button>
              <Button size="lg" className='whitespace-nowrap py-3'><FiUserPlus /> Buy followers</Button>
            </div>
          </div>
        </div>
      </section>

      {/* how it works */}
      <section className="py-24 bg-white overflow-hidden max-w-7xl mx-auto">
        <div className="container px-4 mx-auto">
          <div className="max-w-xl text-center mx-auto mb-20">
            <h2 className="text-5xl font-bold leadi sm:text-5xl">How it works</h2>
            <p className="text-lg tracking-tight mt-6">Buying likes for your Instagram posts is the best way to gain more engagement and success.</p>
          </div>
          <div className="flex flex-wrap mx-auto -m-7 mb-14">
            <div className="w-full md:w-1/3 p-7">
              <div className="max-w-xs">
                <FiZap size={32} className='mb-4' />
                <h3 className="mb-4 text-xl font-semibold tracking-tight">Instant delivery guaranteed</h3>
                <p className="text-gray-600 tracking-tight">You will typically start seeing Likes, Followers, and Views within minutes of purchasing.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-7">
              <div className="max-w-xs">
                <FiTrendingUp size={32} className="mb-4" />
                <h3 className="mb-4 text-xl font-semibold tracking-tight">Our guarantee</h3>
                <p className="text-gray-600 tracking-tight">We want to leave a lasting impression on our clients. If you aren't satisfied with the quality or delivery of your order, tell us.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-7">
              <div className="max-w-xs">
                <FiHeadphones size={32} className="mb-4" />
                <h3 className="mb-4 text-xl font-semibold tracking-tight">24/7 customer support</h3>
                <p className="text-gray-600 tracking-tight">If you have any questions about our services or experience any problems with your order, please don't hesitate to contact us.</p>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-center"><Button size="lg"><FiEye className='mr-2' /> See our plans</Button></div>
          
        </div>
      </section>


      <section className="dark:bg-gray-800 dark:text-gray-100 w-full md:w-10/12 max-w-7xl mx-auto">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-evenly">
          <div className="flex flex-col justify-center text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl font-bold leadi sm:text-5xl">How it works</h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">Social media is exploding and a revolution is going on that’s changing the way consumers interact with businesses.</p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start [&>button]:gap-2">
              <Button size="lg" className='whitespace-nowrap py-3' variant="outline"><FiHeart /> Buy likes</Button>
              <Button size="lg" className='whitespace-nowrap py-3'><FiUserPlus /> Buy followers</Button>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <Image width={800} height={800} src="/images/landing/hero-image-social-media.png" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
          </div>
        </div>
      </section>

    </main>
  )
}

export default RootPage