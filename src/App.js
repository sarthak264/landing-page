import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="page_wrapper">
      <div className="container">
        <navbar className="navbar_container">
          <a href="/">
            <img src="./images/logo-white.svg" alt="logo" />
          </a>
          <button className="buy_btn mon">Buy Now</button>
        </navbar>
      </div>
    </div>
  );
}

export default App;
