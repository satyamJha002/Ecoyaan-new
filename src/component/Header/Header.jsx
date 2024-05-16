import React from "react";

const Header = () => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900 pt-20">
        <div className="gap-20 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-semibold text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              About Ecoyaan
            </h2>
            <p className="mb-4">
              At Ecoyaan, we are more than just a platform. Our goal is to build
              a community of eco-conscious people who share a common vision and
              passion for a more sustainable world.
            </p>
            <p className="mb-4">
              We recognize that sustainability is a journey (as the Sanskrit
              word “yaan” suggests). To keep you motivated on this journey, on
              our platform and our social media pages, you can find:
            </p>
            <ul className="m-2 leading-7 list-disc">
              <li>
                <p>
                  Tips and tricks to adopt a more eco-friendly and low-waste
                  lifestyle
                </p>
              </li>
              <li>
                <p>
                  Videos, posts, and quizzes on climate change and
                  sustainability
                </p>
              </li>
              <li>
                <p>
                  Events and pledges that invite you to adopt a more sustainable
                  lifestyle
                </p>
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <img
              className="w-full rounded-lg"
              src="https://images.pexels.com/photos/6272310/pexels-photo-6272310.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="office content 1"
            />
            <img
              className="mt-4 w-full lg:mt-10 rounded-lg"
              src="https://images.pexels.com/photos/5231081/pexels-photo-5231081.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="office content 2"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
