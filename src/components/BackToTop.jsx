import React, { useEffect, useState } from 'react';

const BackToTop = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowButton(window.scrollY > 500);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        showButton && (
            <img onClick={scrollToTop} src="./src/assets/images/png/back-to-top.png" alt="Back to top" className="back-to-top-btn position-fixed" />
        )
    );
};

export default BackToTop;
