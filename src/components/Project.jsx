import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Face from "../assets/images/Face-recognition.png";
import Calorie from "../assets/images/Caloriecounter.png";
import calculator from "../assets/images/Calculator.png";
import project_person from "../assets/images/project_person1.png";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Project = () => {
  const projects = [
    {
      img: Face,
      name: "Face Recognition",
      github_link: "https://github.com/priyank07singh/Face-recognition",
      live_link:
        "https://drive.google.com/file/d/1pNvvMk9KJpqxOVIozDf1VIva7HEvil2K/view",
    },
    {
      img: Calorie,
      name: "Calorie Counter",
      github_link:
        "https://github.com/priyank07singh/Caloriecounter_Django-main-1-",
      live_link: "#",
    },
    {
      img: calculator,
      name: "Calculator",
      github_link:
        "https://github.com/priyank07singh/Calculator",
      live_link: "#",
    },
  ];
  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
        <div className="lg:w-2/3 w-full">
          <Swiper
            slidesPerview={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img src={project_info.img} alt="" className="rounded-lg" />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Github
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* <div className="lg:block hidden">
          <img src={project_person} alt="" />
        </div> */}
      </div>
    </section>
  );
};

export default Project;
