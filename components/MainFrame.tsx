import React from 'react'
import Image from 'next/image'
import baseUrl from '@/lib/baseURL'


export const MainFrame = () => {
  const Sunset = `/static/img/Tiger.png`
  return (
    <section className="text-white">
      <div className="container flex flex-col items-center justify-center px-5 py-24 mx-auto">
        <Image
          className="object-cover object-center w-5/6 mb-10 rounded lg:w-2/6 md:w-3/6"
          alt="lmao"
          src={Sunset}
          width={200}
          height={200}
        />

        <div className="flex flex-col items-center w-full mb-16 text-center md:w-2/3">
          <h1 className="mb-4 text-3xl font-medium text-white title-font sm:text-4xl">
            Hello World
          </h1>
          <p className="mb-8 leading-relaxed">This is Snehil Shah</p>
        </div>
      </div>
    </section>
  )
}
