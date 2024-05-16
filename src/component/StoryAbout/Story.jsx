import React from "react";
import { BsLinkedin } from "react-icons/bs";

const Story = () => {
  return (
    <div>
      <div className="bg-slate-300 py-20">
        <div className="container mx-auto p-4">
          <h2 className="text-3xl font-bold mb-10">Our Story</h2>
          <div className="flex flex-col md:flex-row space-x-12">
            <div>
              <img
                src="https://ecoyaan.com/images/about-us-founding-team-01.png"
                alt=""
                className="w-[450px]"
              />
            </div>
            <div className="mt-16">
              <p className="text-lg leading-relaxed mb-8">
                We started Ecoyaan after watching an episode of “Our Planet II”,
                where we saw the devastating impact of plastic pollution and
                climate change on the albatross birds. That moment ignited our
                mission.
              </p>
              <p className="text-lg leading-relaxed mb-8">
                Our research suggests that many Indians understand global
                warming, yet access to sustainable practices and products
                remains limited. We also noticed that there is a lack of support
                for eco-friendly businesses..
              </p>
              <div className="flex flex-col md:flex-row space-x-1">
                <p className="text-xl">
                  Connect with the founders on LinkedIn here:{" "}
                  <a
                    href="https://www.linkedin.com/in/abhishek-rao-k"
                    className="text-[#3c59c1] hover:text-[#1da1f2]/75 hover:underline text-xl"
                  >
                    Abhishek Rao
                  </a>
                </p>
                <span>
                  <BsLinkedin className="text-[#3c59c1] text-2xl" />
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row space-x-12 p-5">
            <div>
              <img
                src="https://ecoyaan.com/images/about-us-founding-team-02.png"
                alt=""
                className="w-[450px]"
              />
            </div>
            <div className="mt-16">
              <p className="text-lg leading-relaxed mb-8">
                We created Ecoyaan to connect consumers, businesses, and
                sustainability experts. We want to make it easy and convenient
                for people to access eco-friendly products and services, learn
                and share best practices, and support sustainability
                initiatives.
              </p>
              <p className="text-lg leading-7 mb-8">
                As founders, we are not perfect, but we are passionate. We
                believe that every small step matters. Join us and be a part of
                the Ecoyaan community — together, we’ll make a difference.
              </p>
              <div className="flex flex-col md:flex-row space-x-1">
                <p className="text-xl">
                  Connect with the founders on LinkedIn here:{" "}
                  <a
                    href="https://www.linkedin.com/in/sarwanjeetsingh/"
                    className="text-[#3c59c1] hover:text-[#1da1f2]/75 hover:underline text-xl"
                  >
                    Sarwan Singh
                  </a>
                </p>
                <span>
                  <BsLinkedin className="text-[#3c59c1] text-2xl" />
                </span>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
