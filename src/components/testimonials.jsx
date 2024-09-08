import React from "react";

export const Testimonials = (props) => {
  return (
    <div id="testimonials">
      <div className="container">
        <div className="section-title text-center">
          <h2>Our Partner</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  <div className="testimonial text-center">
                    <div className="testimonial-image">
                      <img
                        src={d.img}
                        alt={d.name}
                        style={{
                          display: "block",
                          margin: "0 auto",
                          maxWidth: "100%",
                          height: "120px",
                        }}
                      />
                      <p style={{ marginTop: "10px", fontWeight: "bold" }}>
                        {d.name}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
