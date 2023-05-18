import React from "react";
import cricket_diplomacy from "../assets/images/cricket_diplomacy.jpg";
import "./styles.css";

const BlogView = ({ setisblog }) => {
  return (
    <section id="blogview" className="py-10 bg-gray-800 relative">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold" style={{ fontSize: "4rem" }}>
          <span className="text-cyan-600">My</span> Blogs
        </h3>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "2rem",
            padding: "4rem",
          }}
        >
          <p className="">Click on the button below to view My Blogs. </p>
          <button className="btn-primary" onClick={() => setisblog(true)}>
            View
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogView;
