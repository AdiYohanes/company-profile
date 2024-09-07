import React from "react";

export const Projects = (props) => {
  return (
    <div id="projects" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Projects</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div
                  key={`${d.title}-${i}`}
                  className="col-xs-6 col-md-3 text-center"
                >
                  <i
                    className={d.icon}
                    style={{ fontSize: "50px", marginBottom: "10px" }}
                  ></i>
                  <h3>{d.title}</h3>
                  {/* Add the image here and adjust styles */}
                  {d.image && (
                    <img
                      src={d.image}
                      alt={d.title}
                      className="img-responsive"
                      style={{
                        width: "200px",
                        height: "auto",
                        display: "block",
                        margin: "20px auto",
                      }}
                    />
                  )}
                  <p>{d.text}</p>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
