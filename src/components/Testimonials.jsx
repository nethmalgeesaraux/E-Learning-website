import React from 'react'
import Title from './Title'
import { testimonialsItems } from '../constant/data'

const Testimonials = () => {
  return (
    <section className='section'>
      <div className='container'>
        <Title
          title='Our Testimonials'
          text='Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.'
          Link='View All'
        />

        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mt-10 lg:mt-12'>
          {testimonialsItems.map((item) => (
            <article key={item.id} className='bg-white rounded-xl overflow-hidden border border-white-95 flex flex-col'>
              <p className='p-6 sm:p-8 text-grey-15/75'>
                {item.text}
              </p>

              <div className='border-t border-white-95 bg-white-99 p-4 sm:p-5 flex items-center justify-between gap-3 flex-wrap'>
                <div className='flex items-center gap-3'>
                  <img
                    src={item.img}
                    alt={item.author}
                    width={60}
                    height={60}
                    className='w-12 h-12 rounded-md object-cover'
                  />
                  <p className='text-sm sm:text-base font-semibold text-grey-15'>
                    {item.author}
                  </p>
                </div>

                <button className='px-5 py-3 bg-white border border-white-95 rounded-md text-sm font-medium hover:bg-orange-90 transition-colors'>
                  Read Full Story
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
