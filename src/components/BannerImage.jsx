import React, { useEffect, useState, useRef } from "react";
import Image from '../assets/BannerImage.jpg';

export default function BannerImage({ title }) {
    const [translateY, setTranslateY] = useState(0);
    const bannerRef = useRef(null);

    // Create the scroll effect of the banner image
    useEffect(() => {
        const handleScroll = () => {
            if (bannerRef.current) {
                const scrollPosition = window.screenY;
                const bannerRect = bannerRef.current.getBoundingClientRect();
                const bannerTop = bannerRect.top + scrollPosition;
                const windowHeight = window.innerHeight;
                // If viewport is below top of banner and above bottom of banner
                if (scrollPosition + windowHeight > bannerTop && scrollPosition < bannerTop + bannerRect.height) {
                    const scrollPercentage = (scrollPosition + windowHeight - bannerTop) / (windowHeight + bannerRect.height);
                    const maxTranslate = 200; // Number of pixels to shift
                    setTranslateY(scrollPercentage * maxTranslate); // Translate based on percentage
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial call to set the initial position

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div ref={bannerRef} className="banner-content">
            <div className="banner-image" style={{
                backgroundImage: `url(${Image})`,
                transform: `translateY(${translateY}px)`,
            }}>
            </div>
            <div className="banner-title">
                    <p>{title}</p>
            </div>
        </div>
    );
}
