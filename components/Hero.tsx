"use client";

import React from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";
const Hero = () => {
  const handleScroll = () => {};
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find, book, or rent a car -- quickly and easily!
        </h1>

        <p className="hero__subtitle">
          Streamline your car rental experience with our effortless booking
          process.
        </p>

        <CustomButton
          title={"Explore Cars"}
          containerStyles={"bg-primary-blue text-white rounded-full mt-10"}
          handleClick={handleScroll}
        />
      </div>
      <div className="hro__image-container">
        <div className="hero__image">
          <Image
            src="/hero.png"
            alt="hero"
            className="object-contain"
            width={600}
            height={600}
          />
          <div className="hero__image-overlay" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
