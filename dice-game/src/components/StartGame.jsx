import styled from "styled-components";
import { Button } from "../styled/Button";

const StartGame = ({ toggle }) => {
  return (
    <Container>
      <div>
        <img src="/images/dices.png" alt="dice-image" />
      </div>

      <div className="content">
        <h1>DICE GAME</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  display: flex;
  align-items: center;
  margin: 0 auto;

  .content {
    h1 {
      font-size: 96px;
      white-space: nowrap;
    }
  }
`;

// const Button = styled.button`
//   padding: 10px 18px;
//   background-color: black;
//   color: white;
//   border-radius: 5px;
//   min-width: 220px;
//   border: none;
//   font-size: 16px;
//   border: 1px solid transparent;
//   transition: 0.3s background ease-in;
//   cursor: pointer;

//   &:hover {
//     background-color: white;
//     color: black;
//     border: 1px solid black;
//     transition: 0.3s background ease-in;
//   }
// `;
