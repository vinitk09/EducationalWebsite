import { MentorData } from "@/app/api/data";
import Image from "next/image";
import Link from "next/link";

const Mentor = () => {
  return (
    <section
      className="bg-gray-100"
      style={{
        fontFamily: "Gilroy-Medium",
      }}
    >
      <div
        id="mentors-section"
        className="container mx-auto text-gray-950 lg:max-w-screen-xl md:max-w-screen-md"
      >
        <div className="sm:flex justify-between items-center mb-12 px-4">
          <h2
            className="text-2xl sm:text-4xl font-bold mt-4 mb-4 overflow-hidden bg-gradient-to-r from-[#ff9422] to-[#d63715] bg-clip-text text-transparent"
            style={{ fontFamily: "Gilroy-Medium" }}
          >
            Meet with our Mentors
          </h2>
          <div>
            <button className="border-black font-medium hover:text-white py-3 px-4 border bg-gradient-to-r from-[#ff9422] to-[#d63715] bg-clip-text text-transparent rounded duration-300">
              Explore 10+ our Mentor
            </button>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {MentorData.map((item, index) => (
            <div
              key={index}
              className="group relative transform transition-transform duration-300 hover:scale-105"
            >
              {/* Main Profile Image Container with Decreased Width */}
              <div className="min-h-80 w-3/4 mx-auto overflow-hidden rounded-t-lg lg:h-80 shadow-lg">
                <div className="h-full w-full rounded-t-lg overflow-hidden">
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    width={400} // Adjust width as needed
                    height={400} // Adjust height as needed
                    className="h-full w-full object-cover rounded-t-lg" // Rounded top corners applied here
                  />
                </div>
              </div>

              {/* Mentor Details Section */}
              <div className="flex justify-center">
                <div className="w-full max-w-[300px]">
                  <div className="border border-white rounded-lg -mt-8 bg-white p-4 shadow-mentorShadow flex flex-col items-center justify-center">
                    <Link
                      href="#"
                      className="text-sm text-gray-700 text-center line-clamp-2"
                    >
                      {item.name}
                    </Link>
                    <div className="flex flex-col items-center mt-2 w-full">
                      {/* Working At and Studied At Text on the Same Line */}
                      <div className="flex justify-between w-full px-4">
                        <p className="text-xs text-gray-500">Working At</p>
                        <p className="text-xs text-gray-500">Studied At</p>
                      </div>
                      {/* Images Below the Text */}
                      <div className="flex justify-between w-full px-4 mt-2">
                        <div className="rounded-t-lg overflow-hidden shadow-lg">
                          <Image
                            src={item.workingAtImage}
                            alt="Working At"
                            width={75}
                            height={75}
                            className="object-cover"
                          />
                        </div>
                        <div className="rounded-t-lg overflow-hidden shadow-lg">
                          <Image
                            src={item.studiedAtImage}
                            alt="Studied At"
                            width={100}
                            height={75}
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="mt-3 text-2xl font-semibold text-black/80 text-center">
                    {item.color}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mentor;
