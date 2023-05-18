import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import construct from "../assets/images/construct.png";
import IEEE from "../assets/images/IEEE.png";
import google from "../assets/images/google.png";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Certificates = () => {
  const projects = [
    {
      img: construct,
      name: "Code Foundation for ROS",
      github_link:
        "https://drive.google.com/file/d/11OvpDFn3Ae3DIWd8Pz64AjQ3iVE4KxaQ/view?usp=sharing",
      live_link:
        "https://drive.google.com/file/d/1pNvvMk9KJpqxOVIozDf1VIva7HEvil2K/view",
    },
    {
      img: google,
      name: "Google Analytics Academy",
      github_link:
        "https://drive.google.com/file/d/1ePAUtIjcQy6KtYDWu6FvDZGLYrS6E244/view?usp=sharing",
      live_link: "#",
    },
    {
      img: IEEE,
      name: "English for Technical Professionals",
      github_link:
        "https://drive.google.com/file/d/1eY-rzUvAdJuYQ010sh9L1legU9RHK4mr/view?usp=sharing",
      live_link: "#",
    },
  ];
  return (
    <section id="certificates" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Certificates</span>
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
                  <img
                    src={project_info.img}
                    alt=""
                    className="rounded-lg"
                    style={{ width: "200px" }}
                  />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Link
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

export default Certificates;
