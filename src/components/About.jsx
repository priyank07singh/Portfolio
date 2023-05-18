import React from "react";
import aboutme from "../assets/images/aboutme.jpg";
const About = () => {
  const info = [
    { text: "Years experience", count: "04" },
    { text: "Completed Projects", count: "24" },
    { text: "Companies Work", count: "06" },
  ];
  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">My introduction</p>

        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <p className="text-justify leading-7 w-11/12 mx-auto">
                Hello and welcome to my portfolio website! My name is Priyank
                Singh, and I am an engineering student currently pursuing my
                B.Tech in Data Science and Artificial Intelligence from IIITNR.
                Throughout my academic career, I have gained valuable experience
                in Data Science, Software Development, and SQL, which I have
                applied to various projects. I am excited to continue developing
                my skills and expanding my knowledge in the field. I am
                enthusiastic about learning new things and always looking for
                opportunities. Click on this video to know more about me
              </p>
              {/* <div className="flex mt-10 items-center gap-7">
                {info.map((content) => (
                  <div key={content.text}>
                    <h3 className="md:text-4xl text-2xl font-semibold text-white">
                      {content.count}
                      <span className="text-cyan-600">+</span>{" "}
                    </h3>
                    <span className="md:text-base text-xs">{content.text}</span>
                  </div>
                ))}
              </div> */}
              <br />
              <br />
              <a href="./src/assets/Resume.pdf" download>
                <button className="btn-primary">Download CV</button>
              </a>
            </div>
          </div>
          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
              <img
                src={aboutme}
                alt=""
                className="w-full object-cover bg-cyan-600 rounded-xl"
              />
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "6rem 2rem 4rem",
          }}
        >
          {/* <iframe
            src="https://drive.google.com/file/d/1d4ljC40T8HlqPOc8aXvTG_VRpRQr1lgr/preview"
            width="640"
            height="480"
            allow="autoplay"
          ></iframe> */}
        </div>
      </div>
    </section>
  );
};

export default About;
