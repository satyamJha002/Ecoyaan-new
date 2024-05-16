import React from "react";

const HeroSection = () => {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full sm:w-8/12 mb-10">
          <div className="container mx-auto h-full sm:p-10">
            <header className="container px-4 lg:flex mt-20 items-center h-full lg:mt-0">
              <div className="w-full">
                <h1 className="text-4xl lg:text-6xl font-bold">
                  Find your <span className="text-green-700">greeny</span> stuff
                  for your room
                </h1>
                <div className="w-20 h-2 bg-green-700 my-4"></div>
                <p className="text-xl mb-10">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae maiores neque eaque ea odit placeat, tenetur illum
                  distinctio nulla voluptatum a corrupti beatae tempora aperiam
                  quia id aliquam possimus aut.
                </p>
                <button className="bg-green-500 text-white text-2xl font-medium px-4 py-2 rounded shadow">
                  Learn More
                </button>
              </div>
            </header>
          </div>
        </div>
        <img
          src="https://images.unsplash.com/photo-1536147116438-62679a5e01f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
          alt="Leafs"
          className="w-full h-48 object-cover sm:h-screen sm:w-4/12"
        />
      </div>
      <section className="bg-black py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row">
            <div className="w-[100%] md:w-1/2 px-16 mb-10">
              {/* <img
                src="path-to-your-image.jpg"
                alt="Sustainable future"
                className="w-full h-auto rounded"
              /> */}
              <img
                src="https://ecoyaan.com/images/Impact.png"
                alt=""
                className=" bg-white rounded transition-all duration-300 hover:scale-110"
              />
            </div>
            <div className="w-full md:w-1/2 p-4">
              <h1 className="text-3xl font-bold mb-4 text-[#00df9a]">
                Join our community in creating a more sustainable future for
                everyone
              </h1>
              <p className="text-lg mb-8 text-white">
                At Ecoyaan, we are more than just a platform. Our vision is to
                build an eco-conscious community for people and products.
              </p>
              <p className="text-lg mb-8 text-white">
                Consider us your partner for all things sustainable. To keep you
                motivated on the journey, we will provide you with engaging
                information about climate change, the latest updates on climate
                policies and lifestyle tips that you can adopt to reduce your
                impact on the environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className=" py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 p-4 text-justify">
              <h1 className="text-3xl font-bold mb-4">
                Carefully curated Eco-friendly products{" "}
              </h1>
              <p className="text-lg mb-8">
                We believe that every purchase you make can have a positive
                impact on the planet and the future.
              </p>
              <p className="text-lg mb-8">
                Soon, we will be connecting you with eco-friendly and
                sustainable products that are carefully selected based on their
                environmental and social benefits.
              </p>
            </div>
            <div className="w-[100%] md:w-1/2 px-10 mb-10">
              <video
                className=" bg-black rounded transition-all duration-300 hover:scale-110"
                autoPlay
                muted
                loop
              >
                <source
                  src="https://ecoyaan.com/images/ProductCuration.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row">
            <div className="w-[100%] md:w-1/2 px-16 mb-10">
              {/* <img
                src="path-to-your-image.jpg"
                alt="Sustainable future"
                className="w-full h-auto rounded"
              /> */}
              <img
                src="https://ecoyaan.com/images/OurStory4.png"
                alt=""
                className="w-full bg-white rounded transition-all duration-300 hover:scale-110"
              />
            </div>
            <div className="w-full md:w-1/2 p-4">
              <h1 className="text-3xl font-bold mb-4 text-[#00df9a]">
                For businesses that care deeply about sustainability
              </h1>
              <p className="text-lg mb-8 text-white">
                Do you run a business that is committed to sustainability in
                every aspect of your work?
              </p>
              <p className="text-lg mb-8 text-white">
                Do you want to showcase your products to an incredible audience
                of eco-conscious consumers who care?
              </p>
              <p className="text-lg mb-8 text-white">
                If yes, then you are the perfect fit for our platform. Our
                community appreciates and supports businesses that are
                transparent, ethical, and innovative in their approach to
                sustainability. Contact us today:
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-10">
            <button className="text-2xl bg-gradient-to-r from-green-400 to-green-700 hover:bg-gradient-to-l hover:from-pink-500 hover:to-yellow-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ">
              Contact Me
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
