import React from "react";

const features = [
  {
    name: "Trust",
    description:
      "We value the trust of our community. We strive to be transparent and honest in everything we do, from the content we share today to sourcing our products in the future.",
    src: "https://ecoyaan.com/images/Trust.png",
  },
  {
    name: "Impact",
    description:
      "We measure our success by our impact on the planet and our community. We aim to empower our sellers and customers to make responsible choices that benefit their well-being and the well-being of others.",
    src: "https://ecoyaan.com/images/Impact.png",
  },
  {
    name: "Authenticity",
    description:
      "We are genuine in our mission to promote sustainability and environmental awareness. An authentic community of eco-conscious people can inspire each other on the journey towards sustainability.",
    src: "https://ecoyaan.com/images/Authenticity.png",
  },
  {
    name: "Fun & Engaging",
    description:
      "Moving towards a sustainable lifestyle and the constant news around climate change can be stressful. We aim to inject fun and creativity into everything we do, from designing our products to providing services.",
    src: "https://ecoyaan.com/images/FunAndEngaging.png",
  },
];

export default function Feature() {
  return (
    <div className="bg-gradient-to-r from-slate-600 to-orange-600 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-[#00df9a] sm:text-4xl">
            Our Values
          </p>
        </div>
        {/* Desktop */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl ">
          <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <div className="text-base font-semibold leading-7 text-[#00df9a]">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center ">
                    <img src={feature.src} className="w-[100%]" />
                  </div>
                  {feature.name}
                </div>
                <div className="mt-2 text-base leading-7 text-white ">
                  {feature.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
