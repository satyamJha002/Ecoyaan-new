import React from "react";
import { BsInstagram, BsBehance } from "react-icons/bs";
import { profileDetails } from "../../profileDetails";
const Team = () => {
  return (
    <>
      <div>
        <div className="bg-gray-100 py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Team</h2>
            <div className="flex flex-wrap -mx-3">
              {profileDetails.map((profile, index) => (
                <div key={index} className="lg:w-1/3 md:w-1/2 px-3 mb-6">
                  <div className="bg-white rounded-lg shadow-lg p-4">
                    <img
                      src={profile.image}
                      alt={profile.fullName}
                      className="w-full h-40 object-cover rounded-lg mb-4"
                    />
                    <h3 className="text-xl font-bold mb-2">
                      {profile.fullName}
                    </h3>

                    <p className="text-gray-600 mb-4">{profile.bio}</p>
                    <ul className="flex flex-wrap mb-0">
                      <li className="mr-2">
                        <a
                          href={profile.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-pink-600 hover:text-pink-800"
                        >
                          {profile.instagram ? <BsInstagram /> : <BsBehance />}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
