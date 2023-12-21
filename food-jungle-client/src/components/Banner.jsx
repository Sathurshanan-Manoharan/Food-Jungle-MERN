import React from "react";

const Banner = () => {
  return (
    <div className="section-container bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%">
      <div className="py-24 flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Left Side texts */}
        <div className="md:w-1/2 space-y-7 px-4">
          <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug ">
            Explore the pleasures of delicious{" "}
            <span className="text-blue">cuisine</span>
          </h2>
          <p className="text-xl text-[#4A4A4A]">
            Embark on a culinary journey through the exquisite and flavorful
            world of delightful foods, savoring every delectable bite that
            awaits.
          </p>
          <button className="btn bg-blue px-8 py-3 font-semibold text-white rounded-full">
            Order Now
          </button>
        </div>
        <div className="md:w-1/2">Right</div>
      </div>
    </div>
  );
};

export default Banner;
