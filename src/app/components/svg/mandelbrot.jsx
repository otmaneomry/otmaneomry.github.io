import React from "react";
import shapes from "public/assets/images/shapes.png";

const Mandelbrot = () => {
    return (
        <img className="max-w-2xl mx-auto hidden md:block" src={shapes.src} alt=""/>
    );
}

export default Mandelbrot;