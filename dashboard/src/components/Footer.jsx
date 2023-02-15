import React from 'react'
function FooterWebsite() {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className='container-fluid'>
      <hr />
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-8 lg:grid-cols-12">
        <div className="lg:mt-0 lg:col-span-6 lg:flex ">
          <p className='footer'>© {year}. All Rights Reserved</p>
        </div>
        <div className="lg:mt-0 lg:col-span-6 lg:flex lg:justify-end xl:flex xl:justify-end sm:flex sm:justify-start md:flex xs:flex xs:justify-start md:justify-start">
          <p className='footer footerLink'>Design and Developed By <strong> <a className='text-black' href="https://alvrio.io/">Alvrio Labs</a></strong></p>
        </div>
      </div>
    </div>
  )
}

export default FooterWebsite