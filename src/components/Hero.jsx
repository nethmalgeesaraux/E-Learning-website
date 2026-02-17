import React from 'react'
import { heroLogos } from "../constant/data";
import { RiPlayFill } from '@remixicon/react';

const Hero = () => {
    return (
        <section>
            <div className="container">
                {/* content */}
                <div className="">
                    {/* Title */}
                    <div className="">
                        <span className="">
                            <img
                                src="/images/shape-1.png"
                                alt="title shape"
                                width={39}
                                height={43}
                            />
                        </span>

                        <div className="">
                            <span>
                                <img
                                    src="/images/shape-2.png"
                                    alt="title shape"
                                    width={48}
                                    height={48}
                                />
                            </span>
                            <h1>
                                <span className="">Unlock</span> Your Creative Potential
                            </h1>
                        </div>
                    </div>
                    <p>with Online Design and Development Courses.</p>
                    <p>Learn from Industry Experts and Enhance Your Skills.</p>

                    {/* btn wrapper */}
                    <div className="">
                        <button>Explore Courses</button>
                        <button> View Pricing</button>
                    </div>

                    {/* logo */}
                    <div className="">
                        <div>
                            {heroLogos.map((logo) => (
                                // Logo
                                <div className="" key={logo.id}>
                                    <img
                                        src={logo.item}
                                        alt="logo"
                                        width={logo.width}
                                        height={28}
                                    />
                                </div>
                            ))}
                        </div>

                    </div>

                </div>
                {/* Banner */}
                <figure>
                    <img
                        src="/images/hero-banner.png"
                        alt="hero-banner"
                        width={940}
                        height={500}
                    />

                    {/* Dark overlay */}
                    <div className="" />

                    {/* Play btn */}
                    <div className="">
                        <span>
                            <RiPlayFill size={30}/>
                        </span>
                    </div>

                </figure>
            </div>
        </section>

    )
}

export default Hero