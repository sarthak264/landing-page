import "./card.css";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <>
      <div className="card_wrapper">
        <div className="icon_container">
          <div className="icon_wrapper">
            <img src={`./images/${props.icon}.svg`} alt="icon" />
          </div>
        </div>
        <Link to="/">
          <div className="icon_circle">
            <svg
              data-name="icons/tabler/play-fill"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 16 16"
            >
              <rect
                data-name="Icons/Tabler/Play Fill background"
                width="16"
                height="16"
                fill="none"
              ></rect>
              <path
                d="M0,.687V15.313a.672.672,0,0,0,1.025.584L12.68,8.584a.693.693,0,0,0,0-1.168L1.025.1A.672.672,0,0,0,0,.687Z"
                transform="translate(3)"
                fill="#1e1e1e"
              ></path>
            </svg>
          </div>
          Watch Example
        </Link>
        <h2 className="fw-bold">{props.title}</h2>
      </div>
    </>
  );
};

export default Card;
