import React from 'react'

const Footer = () => {
    return (
        <>
            <div className="d-flex justify-content-center align-items-center pt-90">
                <div className="container max-w-1162">
                    <div className="row">
                        <div className="col-lg-3 col-12 mb-4">
                            <a class="font-family-first fw-semibold fs-26 color-blue text-decoration-none" href="#">chat<span
                                class="fw-200">app</span></a>
                            <div class="font-family-second max-w-168 color-light-grey fw-normal fs-15 lh-162 mt-18">The last team chat you will ever need.
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="row">
                                <div className="col-md-3 col-6 mb-4 d-flex justify-content-lg-end">
                                    <div className="">
                                        <div class="font-family-first fw-normal fs-18 lh-162 color-dark-grey mb-20">Help</div>
                                        <ul class="list-unstyled">
                                            <li class="mb-12"><a class="font-family-second footer-link fw-normal fs-13 lh-162 color-light-grey text-decoration-none" href="#">Support</a>   </li>
                                            <li class="mb-12"> <a class="font-family-second footer-link fw-normal fs-13 lh-162 color-light-grey text-decoration-none" href="#">Knowledgebase</a>  </li>
                                            <li><a class="font-family-second footer-link fw-normal fs-13 lh-162 color-light-grey text-decoration-none" href="#">Tutorials</a> </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-3 col-6 mb-4 d-flex justify-content-lg-end">
                                    <div className="">
                                        <div class="font-family-first fw-normal fs-18 lh-162 color-dark-grey mb-20">Features</div>
                                        <ul class="list-unstyled">
                                            <li class="mb-12"><a class="font-family-second footer-link fw-normal fs-13 lh-162 color-light-grey text-decoration-none" href="#">Screen Sharing</a>   </li>
                                            <li class="mb-12"> <a class="font-family-second footer-link fw-normal fs-13 lh-162 color-light-grey text-decoration-none" href="#">iOS & Android Apps</a>  </li>
                                            <li className='mb-12'><a class="font-family-second footer-link fw-normal fs-13 lh-162 color-light-grey text-decoration-none" href="#">File Sharing</a> </li>
                                            <li><a class="font-family-second footer-link fw-normal fs-13 lh-162 color-light-grey text-decoration-none" href="#">User Management</a> </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-3 col-6 mb-4 d-flex justify-content-lg-end">
                                    <div className="">
                                        <div class="font-family-first fw-normal fs-18 lh-162 color-dark-grey mb-20">Company</div>
                                        <ul class="list-unstyled">
                                            <li class="mb-12"><a class="font-family-second footer-link fw-normal fs-13 lh-162 color-light-grey text-decoration-none" href="#">About Us</a>   </li>
                                            <li class="mb-12"> <a class="font-family-second footer-link fw-normal fs-13 lh-162 color-light-grey text-decoration-none" href="#">Careers</a>  </li>
                                            <li><a class="font-family-second footer-link fw-normal fs-13 lh-162 color-light-grey text-decoration-none" href="#">Contact Us</a> </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-3 col-6 mb-4 d-flex justify-content-lg-end">
                                    <div className="">
                                        <div class="font-family-first fw-normal fs-18 lh-162 color-dark-grey mb-20">Contact Us</div>
                                        <ul class="list-unstyled">
                                            <li class="mb-12"><a class="font-family-second footer-link fw-normal fs-13 lh-162 color-light-grey text-decoration-none" href="mailto:info@chatapp.com">info@chatapp.com</a>   </li>
                                            <li class="mb-12"> <a class="font-family-second footer-link fw-normal fs-13 lh-162 color-light-grey text-decoration-none" href="tel:1-800-200-300">1-800-200-300</a>  </li>
                                            <li><a class="font-family-second footer-link fw-normal fs-13 lh-162 color-light-grey text-decoration-none" href="#">3500 Deer Creek Rd<br></br>
                                                Palo Alto, CA</a> </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="font-family-second color-light-grey lh-162 fw-normal fs-13 mb-30 mt-180">© Copyright ChatApp Inc.</div>
                </div>
            </div>
        </>
    )
}

export default Footer