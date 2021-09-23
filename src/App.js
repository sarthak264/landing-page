import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { features } from "./components/features";
import Card from "./components/Card";
import Heading from "./components/Heading";
import { review } from "./components/reviews";
import { dnd } from "./components/dnd";

function App() {
  const [value, setValue] = useState(0);
  const [person, setPerson] = useState(0);

  useEffect(() => {
    const lastPerson = review.length - 1;
    if (person < 0) {
      setPerson(lastPerson);
    }
    if (person > lastPerson) {
      setPerson(0);
    }
  }, [person]);

  return (
    <BrowserRouter>
      <div className="page_wrapper">
        <div className="container">
          {/* Navbar */}
          <navbar className="navbar_container">
            <Link to="/">
              <img src="./images/logo-white.svg" alt="logo" />
            </Link>
            <button className="buy_btn mon">Buy Now</button>
          </navbar>
          {/* Header */}
          <header className="header text-center">
            <div className="row justify-content-center">
              <div className="col-lg-10 col-xl-8">
                <h1 className="heading mon mb-3 mb-sm-4">
                  Harnessing the power of müse.
                </h1>
                <h2 className="subheading mon">
                  Design, prototype, collaborate, and bring your ideas to life
                  with the world.
                </h2>
              </div>
            </div>
            <button className="pricing_btn mon">See Pricing</button>
            <img
              src="./images/saas-banner.jpg"
              alt="banner"
              className="header_banner"
            />
          </header>
          {/* Brands */}
          <section className="brands">
            <p className="small">Used by industry leaders around the world</p>
            <div className="row">
              <div className="col-6 col-md-4 col-lg-2 text-center">
                <img src="./images/facebook.svg" alt="" className="brand_img" />
              </div>
              <div className="col-6 col-md-4 col-lg-2 text-center">
                <img
                  src="./images/microsoft.svg"
                  alt=""
                  className="brand_img"
                />
              </div>
              <div className="col-6 col-md-4 col-lg-2 text-center">
                <img src="./images/visa.svg" alt="" className="brand_img" />
              </div>
              <div className="col-6 col-md-4 col-lg-2 text-center">
                <img src="./images/uber.svg" alt="" className="brand_img" />
              </div>
              <div className="col-6 col-md-4 col-lg-2 text-center">
                <img src="./images/coke.svg" alt="" className="brand_img" />
              </div>
              <div className="col-6 col-md-4 col-lg-2 text-center">
                <img src="./images/netflix.svg" alt="" className="brand_img" />
              </div>
            </div>
          </section>
          {/* drag and drop section */}
          <section className="dnd">
            <div className="row">
              <div className="col-md-6">
                <p className="lead fw-bold mon mb-1 mb-sm-2">Drag and drop</p>
                <h1 className="fw-bold mon mb-2 mb-sm-4">
                  Drag and drop components
                </h1>
                <p className="lead text mb-3 mb-sm-4">
                  The main goal was to further improve Sketch user interface for
                  a non-obstructive workflow while maintaining familiarity.
                </p>
                <Link to="/">
                  See Integrations
                  <svg
                    className="ms-2 icon"
                    data-name="icons/tabler/chevron right"
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    viewBox="0 0 16 16"
                  >
                    <rect
                      data-name="Icons/Tabler/Chevron Right background"
                      width="16"
                      height="16"
                      fill="none"
                    ></rect>
                    <path
                      d="M.26.26A.889.889,0,0,1,1.418.174l.1.086L8.629,7.371a.889.889,0,0,1,.086,1.157l-.086.1L1.517,15.74A.889.889,0,0,1,.174,14.582l.086-.1L6.743,8,.26,1.517A.889.889,0,0,1,.174.36Z"
                      transform="translate(4)"
                      fill="#dc3545"
                    ></path>
                  </svg>
                </Link>
              </div>
              <div className="col-md-6 icons_wrapper">
                {dnd.map((item, index) => {
                  return (
                    <>
                      <div className="icon_container py-3">
                        {item.map((item2, index2) => {
                          return (
                            <>
                              <Link to="/">
                                <img src={item2.img} alt="" />
                              </Link>
                            </>
                          );
                        })}
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </section>
          {/* goals section */}
          <section className="goal">
            <Heading />
            <div className="row justify-content-center">
              <div className="col-sm-10 col-md-6 col-xl-6 mb-4 mb-md-0">
                <Card
                  icon="cloud"
                  title="Cloud sharing platform for designers"
                />
              </div>
              <div className="col-sm-10 col-md-6 col-xl-6">
                <Card icon="volt" title="Supercharged with new plugins" />
              </div>
            </div>
          </section>
          {/* features */}
          <section className="features">
            <Heading />
            <div className="row">
              <div className="col-12 col-lg-4">
                <div className="btn_container">
                  {features.map((item, index) => {
                    return (
                      <button
                        className={`btn ${value === index && `active`}`}
                        onClick={() => {
                          setValue(index);
                        }}
                      >
                        <h3>{item.title}</h3>
                        <p className="small mb-0">{item.subtitle}</p>
                      </button>
                    );
                  })}
                </div>
              </div>
              <div className="col-12 col-lg-8">
                {features.map((item, index) => {
                  return (
                    <img
                      src={features[value].img}
                      alt="sass tab"
                      className={`feature_img ${value === index && `active`}`}
                    />
                  );
                })}
              </div>
            </div>
          </section>
          <hr className="m-0" />
          {/* review */}
          <section className="review">
            <button
              className="prevbtn"
              onClick={() => {
                setPerson(person - 1);
              }}
            >
              <img src="./images/prev.svg" alt="prev" className="prev_btn" />
            </button>
            <button
              className="nextbtn"
              onClick={() => {
                setPerson(person + 1);
              }}
            >
              <img src="./images/next.svg" alt="prev" className="next_btn" />
            </button>
            {review.map((item, index) => {
              let className = "next";
              if (person === index) {
                className = "current";
              }
              if (
                index === person - 1 ||
                (person === 0 && index === review.length - 1)
              ) {
                className = "prev";
              }
              return (
                <>
                  <div
                    className={`review_wrapper text-center ${className}`}
                    key={index}
                  >
                    <img src={item.image} alt="company" className="mb-4" />
                    <p className="main">{item.detail}</p>
                    <p className="main mb-0">{item.name}</p>
                    <p className="">{item.post}</p>
                  </div>
                </>
              );
            })}
          </section>
          <hr className="m-0" />
          {/* Cta */}
          <div className="cta">
            <div className="row">
              <div className="col-md-6 main">
                <h1 className="callout mon">Start your 30 day free trial.</h1>
                <button className="sign_up mon">Sign Up</button>
              </div>
              <div className="col-md-6 img_container">
                <img
                  src="./images/start-trial.jpg"
                  alt="trail"
                  className="trial_img"
                />
              </div>
            </div>
          </div>
          {/* Footer */}
          <hr className="text-white" />
          <footer className="footer">
            <div className="row align-items-center">
              <div className="col-md-6">
                <p className="small mb-0 text-muted">
                  © 2020 Fabrx Design. All rights reserved.
                </p>
              </div>
              <div className="col-md-6">
                <div className="icon_container">
                  <Link to="/" className="ms-md-auto margin">
                    <svg
                      data-name="icons/tabler/facebook"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 16 16"
                    >
                      <rect
                        data-name="Icons/Tabler/Facebook background"
                        width="16"
                        height="16"
                        fill="none"
                      ></rect>
                      <path
                        d="M6.359,16H3.077a.618.618,0,0,1-.61-.532l-.005-.084V10.256H.616a.618.618,0,0,1-.61-.532L0,9.641V6.359a.617.617,0,0,1,.532-.61l.084-.005H2.462V4.718A4.7,4.7,0,0,1,7,0l.181,0H9.641a.618.618,0,0,1,.61.532l.005.084V3.9a.617.617,0,0,1-.532.61l-.084.005H7.179a.2.2,0,0,0-.2.158l-.005.047V5.744H9.641a.615.615,0,0,1,.611.687l-.013.077L9.418,9.79a.614.614,0,0,1-.5.459l-.092.007H6.974v5.128a.618.618,0,0,1-.532.61ZM1.231,6.974V9.025H3.077a.617.617,0,0,1,.609.532l.006.084v5.128H5.744V9.641a.616.616,0,0,1,.532-.609l.084-.006h1.98l.513-2.051H6.359a.617.617,0,0,1-.61-.532l-.005-.083V4.718A1.443,1.443,0,0,1,7.061,3.287l.118,0H9.025V1.231H7.179A3.481,3.481,0,0,0,3.7,4.549l0,.169V6.359a.617.617,0,0,1-.532.609l-.084.005Z"
                        transform="translate(3)"
                        fill="#6c757d"
                      ></path>
                    </svg>
                  </Link>
                  <Link to="/" className="margin">
                    <svg
                      data-name="icons/tabler/dribbble"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 16 16"
                    >
                      <rect
                        data-name="Icons/Tabler/Dribbble background"
                        width="16"
                        height="16"
                        fill="none"
                      ></rect>
                      <path
                        d="M0,8a8,8,0,1,1,12.071,6.885.613.613,0,0,1-.148.086A8,8,0,0,1,0,8Zm8,6.769a6.729,6.729,0,0,0,3.04-.722A18.964,18.964,0,0,0,10.085,9.7a11.826,11.826,0,0,0-4.847,3.087l-.385.379-.522.524A6.728,6.728,0,0,0,8,14.769Zm4.193-1.458a6.774,6.774,0,0,0,2.486-4.2,18.649,18.649,0,0,0-3.393.293A19.879,19.879,0,0,1,12.193,13.311ZM1.231,8a6.751,6.751,0,0,0,2.126,4.921l.814-.815A13.357,13.357,0,0,1,9.638,8.547a20.668,20.668,0,0,0-1.049-2.1,20.8,20.8,0,0,1-7.345,1.14Q1.231,7.792,1.231,8Zm9.611.234a19.647,19.647,0,0,1,3.926-.359A6.737,6.737,0,0,0,13.224,3.7a18.084,18.084,0,0,1-3.5,2.258A21.639,21.639,0,0,1,10.842,8.234ZM1.434,6.354A19.65,19.65,0,0,0,7.94,5.372,37.065,37.065,0,0,0,5.305,1.791,6.8,6.8,0,0,0,1.434,6.354ZM9.093,4.893a16.545,16.545,0,0,0,3.261-2.073A6.767,6.767,0,0,0,6.562,1.385,36.568,36.568,0,0,1,9.093,4.893Z"
                        fill="#6c757d"
                      ></path>
                    </svg>
                  </Link>
                  <Link to="/">
                    <svg
                      data-name="icons/tabler/instagram"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 16 16"
                    >
                      <rect
                        data-name="Icons/Tabler/Instagram background"
                        width="16"
                        height="16"
                        fill="none"
                      ></rect>
                      <path
                        d="M4.343,16A4.348,4.348,0,0,1,0,11.657V4.343A4.347,4.347,0,0,1,4.343,0h7.314A4.348,4.348,0,0,1,16,4.343v7.314A4.348,4.348,0,0,1,11.657,16ZM1.372,4.343v7.314a2.975,2.975,0,0,0,2.971,2.972h7.314a2.975,2.975,0,0,0,2.972-2.972V4.343a2.975,2.975,0,0,0-2.972-2.971H4.343A2.974,2.974,0,0,0,1.372,4.343ZM4.571,8A3.429,3.429,0,1,1,8,11.428,3.434,3.434,0,0,1,4.571,8ZM5.943,8A2.057,2.057,0,1,0,8,5.943,2.06,2.06,0,0,0,5.943,8Zm5.492-4.02-.006-.094a.686.686,0,0,1,1.365-.094l.006.093a.686.686,0,0,1-1.365.094Z"
                        fill="#6c757d"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
