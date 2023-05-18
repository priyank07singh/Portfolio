import React from "react";
import infographic from "../assets/images/Resume-1.png";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";
import "./styles.css";
const Infographic = () => {
  return (
    <section id="infographic" className="py-10 bg-gray-800 relative">
      <div className="mt-8 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Infographic</span>
        </h3>
        {/* <Row style={{}}>
          <Col md={4} className="project-card" style={{}}>
            <Card className="">
              <Card.Img
                variant="top"
                src={infographic}
                alt="card-img"
                style={{
                  filter: "brightness(120%)",
                  width: "50%",
                  alignSelf: "center",
                }}
              />
            </Card>
          </Col>
        </Row> */}
        <div
          className="flex items-center justify-center mt-12 gap-6 flex-wrap"
          style={{ padding: "1rem 5rem" }}
        >
          <img src={infographic} alt="" width="55%" />
        </div>
      </div>
    </section>
  );
};

export default Infographic;
