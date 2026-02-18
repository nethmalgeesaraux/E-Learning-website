import React, { useState } from 'react'
import Title from './Title'
import { testimonialsItems } from '../constant/data'
import { RiArrowLeftLine, RiArrowRightLine } from '@remixicon/react'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleSlide = (direction) => {
    if (direction === 'next') {
      setCurrentIndex((prev) =>
        prev === testimonialsItems.length - 1 ? 0 : prev + 1
      )
      return
    }

    setCurrentIndex((prev) =>
      prev === 0 ? testimonialsItems.length - 1 : prev - 1
    )
  }

  return (
    <section className='section'>
      <div className='container'>
        <Title
          title='Our Testimonials'
          text='Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.'
          Link='View All'
        />

        <div className='mt-10 lg:mt-12 overflow-hidden max-w-[760px] mx-auto'>
          <div
            className='flex transition-transform duration-500 ease-out'
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonialsItems.map((item) => (
              <article
                key={item.id}
                className='bg-white rounded-xl overflow-hidden border border-white-95 flex flex-col min-w-full'
              >
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

                  <button className='text-sm font-medium text-grey-15/75 hover:text-orange-50 transition-colors'>
                    Read Full Story
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className='mt-8 flex items-center justify-center gap-3'>
          <button
            onClick={() => handleSlide('prev')}
            className='w-11 h-11 rounded-md bg-orange-75 text-grey-15 flex items-center justify-center hover:bg-orange-70 transition-colors'
            aria-label='Previous testimonial'
          >
            <RiArrowLeftLine size={20} />
          </button>
          <button
            onClick={() => handleSlide('next')}
            className='w-11 h-11 rounded-md bg-orange-75 text-grey-15 flex items-center justify-center hover:bg-orange-70 transition-colors'
            aria-label='Next testimonial'
          >
            <RiArrowRightLine size={20} />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
