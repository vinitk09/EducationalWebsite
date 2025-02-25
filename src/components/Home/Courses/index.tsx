"use client";
import * as React from "react";
import { useState } from "react";
import { CourseData } from "@/app/api/data";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";

// Define the missing Name type
interface Name {
  category: string;
  imageSrc: string;
  course: string;
  price: number;
  profession: string;
}

const NamesList = () => {
  const [selectedButton, setSelectedButton] = useState<
    | "mobiledevelopment"
    | "webdevelopment"
    | "datascience"
    | "cloudcomputing"
    | "all"
    | null
  >("webdevelopment");

  const mobileDevelopment = CourseData.filter(
    (name) => name.category === "mobiledevelopment"
  );
  const webDevelopment = CourseData.filter(
    (name) => name.category === "webdevelopment"
  );
  const dataScience = CourseData.filter(
    (name) => name.category === "datascience"
  );
  const cloudComputing = CourseData.filter(
    (name) => name.category === "cloudcomputing"
  );

  let selectedNames: Name[] = [];

  if (selectedButton === "mobiledevelopment") {
    selectedNames = mobileDevelopment.map((course) => ({
      ...course,
      price: Number(course.price),
    }));
  } else if (selectedButton === "webdevelopment") {
    selectedNames = webDevelopment.map((course) => ({
      ...course,
      price: Number(course.price),
    }));
  } else if (selectedButton === "datascience") {
    selectedNames = dataScience.map((course) => ({
      ...course,
      price: Number(course.price),
    }));
  } else if (selectedButton === "cloudcomputing") {
    selectedNames = cloudComputing.map((course) => ({
      ...course,
      price: Number(course.price),
    }));
  }

  return (
    <section className="bg-white">
      <div
        id="courses-section"
        className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4"
      >
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-gray-900 my-4">
          Popular Courses
        </h2>
        <div>
          <button className="bg-transparent hover:bg-primary text-primary font-medium hover:text-white py-3 px-4 border border-primary hover:border-transparent rounded duration-300">
            Explore Classes
          </button>
        </div>
        <div className="flex nowhitespace space-x-5 rounded-xl bg-white p-1 overflow-x-auto">
          <button onClick={() => setSelectedButton("webdevelopment")}>
            Web Development
          </button>
          <button onClick={() => setSelectedButton("mobiledevelopment")}>
            Mobile Development
          </button>
          <button onClick={() => setSelectedButton("datascience")}>
            Data Science
          </button>
          <button onClick={() => setSelectedButton("cloudcomputing")}>
            Cloud Computing
          </button>
        </div>
        <div>
          {selectedNames.length > 0 ? (
            selectedNames.map((name, index) => (
              <div key={index} className="shadow-lg rounded-xl">
                <Image
                  src={name.imageSrc}
                  alt={name.course}
                  width={700}
                  height={700}
                  className="h-full w-full object-cover object-center"
                />
                <div>
                  <p>{name.course}</p>
                  <p>${name.price}</p>
                  <p>{name.profession}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No data to show</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default NamesList;
