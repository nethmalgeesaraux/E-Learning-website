import React from 'react'
import Title from './Title'
import { benefitItems } from "../constant/data";
import { RiArrowRightUpLine } from '@remixicon/react';
import { getRevealStyles, useScrollReveal } from '../motion/animations';

const Benefits = () => {
    const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.12 });

    return (
        <section id='about' ref={sectionRef} className='section scroll-mt-24' style={getRevealStyles(isVisible)}>
            <div className="container">
                {/* Title */}
                <Title title='Benefits' text='
                Lorem ipsum dolor sit amet consectetur.
                 Tempus tincidunt etiam eget elit id imperdiet et. 
                 Cras eu sit dignissim lorem nibh et. 
                 Ac cum eget habitasse in velit fringilla feugiat senectus in.'
                    Link='View All' />

                {/* Card wrapper */}
                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 mt-12 lg:mt-16">
                    {benefitItems.map((item, index) => (
                        // Card
                        <div
                            key={item.id}
                            className="bg-white p-10 flex flex-col rounded-xl"
                            style={getRevealStyles(isVisible, 0.07 * (index + 1), 0.5, 18)}
                        >
                            {/* icon */}
                            <div className="bg-orange-75 w-[55%] h-24 flex items-center 
                            justify-center mx-auto rounded-xl mb-8">
                                <img src={item.icon} alt={item.title} width={64} height={64} />
                            </div>
                            {/* content */}
                            <div className="mb-4 text-center space-y-3.5">
                                <h4>{item.title}</h4>
                                <p>{item.text}</p>
                            </div>
                            {/* button */}
                            <button className='mt-auto ml-auto border border-white-95 w-14 h-14 flex items-center
                                    justify-center rounded-md text-orange-50 transition-colors hover:bg-orange-50
                                     hover:text-white'>
                                <RiArrowRightUpLine size={26} />
                            </button>

                        </div>
                    ))}
                </div>


            </div>
        </section>
    )
}

export default Benefits
