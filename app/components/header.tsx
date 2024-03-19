import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div>
      <div className='flex justify-between items-center p-4'>
        <div>
            <Image src="/logo.png" width="100" height="100" alt="logo" />
        </div>

        <div>

            <Link href="/" className='px-5'>Home</Link>

            {/* <Link href="/about" className='px-5'>About</Link>  

            <Link href="/gallery" className='px-5'>Gallery</Link>     

            <Link href="faq" className='px-5'>FAQ</Link>     
            <Link href="contact" className='px-5'>Contact</Link>    */}
        </div>


        <div className="flex justify-center items-center rounded-2xl bg-pink-800 px-4 py-2  text-white">
            Join us now
        </div>



    </div>

        {/* <div className='flex justify-between items-center p-4'>
            <div>
                <Image src="/logo.png" width="100" height="100" alt="logo" />
            </div> */}


{/* 
            <div>

                <Link href="/" className='px-5'>Home</Link>

                <Link href="/about" className='px-5'>About</Link>  

                <Link href="/gallery" className='px-5'>Gallery</Link>     

                <Link href="faq" className='px-5'>FAQ</Link>     
                <Link href="contact" className='px-5'>Contact</Link>   
            </div>


            <div className="flex justify-center items-center rounded-2xl bg-pink-800 px-4 py-2  text-white">
                Join us now
            </div> */}



        {/* </div> */}
    </div>

  )
}

export default Header