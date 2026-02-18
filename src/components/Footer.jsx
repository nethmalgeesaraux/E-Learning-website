import React from 'react'
import { contactInfo, footerLists, socialIcons } from '../constant/data'
import { getRevealStyles, useScrollReveal } from '../motion/animations'

const Footer = () => {
    const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.08 })

    return (
        <footer ref={sectionRef} className='section pb-10' style={getRevealStyles(isVisible)}>
            <div className='container'>
                <div className='bg-white rounded-xl border border-white-95 p-6 sm:p-8 lg:p-10'>
                    <div className='grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-10 border-b border-white-95 pb-8 lg:pb-10'>
                        <div style={getRevealStyles(isVisible, 0.06, 0.5, 14)}>
                            <a href='#' className='inline-block'>
                                <img
                                    src='/images/logo.png'
                                    alt='logo'
                                    width={170}
                                    height={50}
                                    className='object-contain'
                                />
                            </a>

                            <div className='mt-6 space-y-3'>
                                {contactInfo.map((item) => {
                                    const Icon = item.icon

                                    return (
                                        <p key={item.id} className='flex items-center gap-3 text-grey-15/80'>
                                            <span className='w-9 h-9 rounded-md bg-white-97 border border-white-95 flex items-center justify-center text-orange-50'>
                                                <Icon size={18} />
                                            </span>
                                            {item.label}
                                        </p>
                                    )
                                })}
                            </div>
                        </div>

                        <div className='grid grid-cols-2 sm:grid-cols-3 gap-6' style={getRevealStyles(isVisible, 0.14, 0.5, 14)}>
                            {footerLists.map((list) => (
                                <div key={list.id}>
                                    <h4 className='text-lg mb-3'>{list.title}</h4>
                                    <ul className='space-y-2.5'>
                                        {list.links.map((link, index) => (
                                            <li key={`${list.id}-${index}`}>
                                                <a href='#' className='text-sm sm:text-base text-grey-15/75 hover:text-orange-50 transition-colors'>
                                                    {link.label}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}

                            <div>
                                <h4 className='text-lg mb-3'>Social Profiles</h4>
                                <div className='flex items-center gap-3 flex-wrap'>
                                    {socialIcons.map((item) => {
                                        const Icon = item.icon

                                        return (
                                            <a
                                                key={item.id}
                                                href='#'
                                                className='w-11 h-11 rounded-md bg-white-97 border border-white-95 flex items-center justify-center text-grey-15 hover:bg-orange-90 transition-colors'
                                                aria-label='social link'
                                            >
                                                <Icon size={20} />
                                            </a>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>

                    <p className='text-center mt-6 text-grey-15/65'>
                        Skillbridge. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
