import React, { useState } from 'react'
import { RiAddLine, RiSubtractLine, RiArrowRightLine } from '@remixicon/react'
import { faqItems } from '../constant/data'

const FaqSec = () => {
  const [openId, setOpenId] = useState(faqItems[0]?.id)

  return (
    <section className='section'>
      <div className='container'>
        <div className='bg-white rounded-xl border border-white-95 p-5 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-8 lg:gap-10'>
          <div>
            <h2>Frequently Asked Questions</h2>
            <p className='mt-4 text-grey-15/75'>
              Still you have any questions? Contact our Team via support@skillbridge.com
            </p>
            <button className='secondary-btn mt-8'>
              See All FAQ&apos;s
            </button>
          </div>

          <div className='bg-white-99 border border-white-95 rounded-xl p-4 sm:p-5'>
            {faqItems.map((item, index) => {
              const isOpen = openId === item.id

              return (
                <article key={item.id}>
                  <button
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                    className='w-full text-left flex items-center justify-between gap-4 py-4'
                  >
                    <h4 className='text-base sm:text-lg'>{item.title}</h4>
                    <span className='w-10 h-10 rounded-md bg-orange-97 flex items-center justify-center text-orange-50 shrink-0'>
                      {isOpen ? <RiSubtractLine size={20} /> : <RiAddLine size={20} />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className='pb-4'>
                      <p className='text-grey-15/70'>{item.text}</p>
                      <button className='mt-4 bg-white-97 border border-white-95 px-4 py-3 rounded-md text-sm font-medium flex items-center gap-2 hover:bg-orange-90 transition-colors'>
                        Learn more
                        <RiArrowRightLine size={18} />
                      </button>
                    </div>
                  )}

                  {index !== faqItems.length - 1 && <div className='h-px bg-white-95' />}
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FaqSec
