import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="page_wrapper">
      <div className="container">
        {/* Navbar */}
        <navbar className="navbar_container">
          <a href="/">
            <img src="./images/logo-white.svg" alt="logo" />
          </a>
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
        {/* Cta */}
        <section className="cta">
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
        </section>
        <hr className="m-0" />
      </div>
    </div>
  );
}

export default App;
