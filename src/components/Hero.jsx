import React from 'react'

const Hero = () => {
    return (
        <>
            <div className="d-flex align-items-center justify-content-center bg-color-blue pt-134 pb-160">
                <div className="container max-w-1160">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-12 mb-4 d-flex align-items-center align-items-lg-start justify-content-center flex-column">
                            <h1 className='font-family-first fs-75 fw-semibold lh-128 mb-20 text-white text-center text-lg-start'>Have your best chat</h1>
                            <p className='font-family-second fw-normal lh-100 mb-60 text-white fs-21 text-center text-lg-start'>Fast, easy & unlimited team chat.</p>
                            <div className="d-flex align-items-center gap-36 flex-wrap justify-content-center justify-content-lg-start">
                                <button className='try-btn font-family-second bg-white border-0 fs-6 fw-medium text-center lh-100' type="button">Try it Free</button>
                                <button className='get-btn font-family-second bg-transparent fs-6 fw-medium text-center text-white lh-100' type="button">Get a Demo</button>
                            </div>
                        </div>
                        <div className="col-lg-7 col-12 d-flex justify-content-center justify-content-lg-end">
                            <img className='w-100 max-w-585' src="./src/assets/images/png/hero-img.png" alt="hero-img" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero