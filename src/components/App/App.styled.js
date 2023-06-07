import styled from "@emotion/styled";

export const Container = styled.div`
  display: block;
  text-align: center;
  width: 400px;
  margin-top: 5%;
  margin-left: auto;
  margin-right: auto;
  padding: 30px;
  border-radius: 10px;
  background: linear-gradient(to right, rgb(15, 218, 218), rgb(6, 155, 155));
  // background: linear-gradient(to right, #51e2f5, #9df9ef);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  transition: transform 0.4s;
  @media (max-width: 520px) {
    width: 275px;
  }
  &:hover {
    transition: transform 0.4s;
    transform: scale(1.05);
  }
`;
