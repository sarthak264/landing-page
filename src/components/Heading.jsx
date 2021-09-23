import styled from "styled-components";

const Lead = styled.p`
  font-weight: 500;
  padding-right: 20%;
  margin-bottom: 3rem;
  @media screen and (max-width: 991px) {
    margin-bottom: 2rem;
  }
  @media screen and (max-width: 768px) {
    padding-right: 0;
  }
  @media screen and (max-width: 576px) {
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }
`;

const Heading = () => {
  return (
    <div className="heading" data-aos="fade-down">
      <h1 className="display-4 fw-bold">Trusted by millions of users.</h1>
      <Lead className="lead">
        The main goal was to further improve Sketch user interface for a
        non-obstructive workflow while maintaining familiarity.
      </Lead>
    </div>
  );
};

export default Heading;
