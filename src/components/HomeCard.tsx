import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HomeCard = ({icon, heading, href, ImgSrc, ImgUrl, desc}:any ) => {
  return (
    <>
    <div className="card flex flex-col gap-3 max-w-96">
      <div className="heading flex gap-2">
        <div className="icon text-lime-600">
        {icon}
        </div>
        <div className="title">
        <Link className='font-semibold text-lg' href={href}>{heading}</Link>
        </div>
      </div>
      <div className="image">
      <Link href={ImgUrl}><Image src={ImgSrc} width={384} height={384} alt="Wedding Photography" className='rounded-md ease-in-out duration-300 hover:scale-105'/></Link>
      </div>
      <div className="desc">
        <p className='text-zinc-700'>{desc}</p>
      </div>
     </div>
    </>
  )
}

export default HomeCard