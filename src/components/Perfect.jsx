import React from 'react'

const Perfect = () => {
    return (
        <>
            <div className="d-flex justify-content-center align-items-center bg-light-sky pt-166 pb-209 position-relative">
                <div className="container max-w-1160">
                    <div className="row flex-column-reverse flex-xl-row">
                        <div className="col-xl-7 col-12 d-flex justify-content-center mb-4">
                            <img className='w-100 left-0 top-124 max-w-816 position-lg-absolute' src="./src/assets/images/png/perfect-img.png" alt="perfect-img" />
                        </div>
                        <div className="col-xl-5 col-12 justify-content-center d-flex flex-column align-items-center align-items-xl-start">
                            <h2 className='font-family-first fw-medium fs-45 lh-128 color-dark-grey mb-30 max-w-467 text-center text-xl-start'>Perfect Solution for Small Businesses</h2>
                            <p className='font-family-second fw-normal fs-21 lh-162 color-light-grey mb-60 text-center text-xl-start'>Pricing plans that fit like a glove.</p>
                            <div className="d-flex align-items-center gap-30 flex-wrap justify-content-center">
                                <button className='try-btn-2 font-family-second fw-medium fs-17 lh-100 text-center text-white bg-color-blue border-0'>Try it Free</button>
                                <button className='get-btn-2 bg-transparent font-family-second fw-medium fs-17 lh-100 text-center '>Get a Demo</button>
                            </div>
                            <div className="line"></div>
                            <div className="d-flex align-items-center align-items-sm-start mt-40 gap-25 flex-column flex-sm-row mb-5 mb-xl-0">
                                <img src="./src/assets/images/svg/star-svg.svg" alt="star-img" />
                                <p className='font-family-second fw-bold fs-18 lh-162 color-light-grey max-w-274 text-center text-sm-start'>5,200 businesses <span className='fw-normal'>use ChatApp and they rate it as </span> 5-stars.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Perfect