import React from 'react'
import Title from './Title'
import { coursesSecItems } from "../constant/data";
import { RiArrowRightUpLine } from '@remixicon/react';

const Courses = () => {
    return (
        <section className='section'>
            <div className='container'>
                {/* Title */}
                <Title
                    title='Our Courses'
                    text='Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.'
                    Link='View All'
                />

                {/* Card wrapper */}
                <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 mt-10 lg:mt-12">
                    {coursesSecItems.map((item) => (
                        // Card
                        <div key={item.id} className="bg-white rounded-xl shadow hover:shadow-lg transition flex flex-col h-full">
                            {/* img */}
                            <div className="overflow-hidden rounded-t-xl">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    width={560}
                                    height={266}
                                    className="w-full h-[190px] sm:h-[220px] lg:h-[240px] object-cover hover:scale-105 transition-transform"
                                />
                            </div>

                            {/* content */}
                            <div className="p-4 sm:p-5 lg:p-6 flex flex-col flex-grow">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                                    <div className="flex items-center gap-2 flex-wrap">
                                        {item.tags.map((tagItem, index) => (
                                            <span key={`${item.id}-${index}`} className="px-3 py-1 text-xs font-medium border border-white-95 rounded-md bg-white-99">
                                                {tagItem.tag}
                                            </span>
                                        ))}
                                    </div>
                                    <p className="text-xs sm:text-sm font-medium text-grey-15/80 sm:text-right">{item.instructor}</p>
                                </div>

                                <h4 className="text-lg sm:text-xl font-semibold mb-2 text-center sm:text-left min-h-14">{item.title}</h4>
                                <p className="text-sm sm:text-base leading-7 text-grey-15/70 mb-5 text-center sm:text-left line-clamp-3">{item.text}</p>

                                {/* btn */}
                                <button className="mt-auto border border-orange-100 w-14 h-14 flex items-center justify-center rounded-md text-orange-500 transition-colors hover:bg-orange-500 hover:text-white ml-auto">
                                    <RiArrowRightUpLine size={26} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>


            </div>
        </section>
    )
}

export default Courses


   
