import styled from "styled-components";

const Price_card = (props) => {
  const Card = styled.div`
    background-color: var(--secondayBlack);
    padding: 3.5rem 4.5rem;
    margin-top: 3rem;
    text-align: start;
    border-radius: 0.75rem;
    transition: all 0.2s ease-in-out;
    &:hover {
      background-color: var(--primaryRed);
      transform: translateY(-0.5rem);
    }
    &:hover .bt-1 {
      background-color: var(--secondayBlack);
    }
    @media screen and (max-width: 991px) {
      padding: 2.5rem;
    }
    @media screen and (max-width: 768px) {
      padding: 2rem 1.5rem;
      margin-top: 2rem;
    }
    @media screen and (max-width: 576px) {
      margin-top: 1.5rem;
    }
  `;
  const Price = styled.h1`
    font-size: 5.5rem;
    @media screen and (max-width: 768px) {
      font-size: 3.5rem;
    }
  `;
  const Lead = styled.p`
    font-weight: 500;
    line-height: 1.8;
    @media screen and (max-width: 991px) {
      line-height: 1.4;
    }
    @media screen and (max-width: 768px) {
      font-size: 1rem;
    }
  `;
  const Button = styled.button`
    background-color: var(--primaryRed);
    border-radius: 2.5rem;
    padding: 0.75rem 2.5rem;
    color: #fff;
    font-size: 1.25rem;
    font-weight: 600;
    transition: all 0.2s ease-in-out;
  `;
  return (
    <Card>
      <div className="row">
        <div className="col-md-7 col-xl-6">
          <h2 className="fw-bold mon">{props.title}</h2>
          <Lead className="lead">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum
          </Lead>
        </div>
        <div className="col-auto ms-0 ms-md-auto">
          <Price className="price fw-bold mon">${props.price}</Price>
          <Button className="bt-1 mon">Suscribe</Button>
        </div>
      </div>
    </Card>
  );
};

export default Price_card;
