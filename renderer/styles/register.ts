import styled from "styled-components";

export const Container = styled.div`
  background-color: beige;
  position: relative;
  width: 100vw;
  height: 100vh;
`;

export const Title = styled.title``;

export const Form = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #35393f;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  padding: 4.6rem 5.4rem;
  width: 50rem;
`;

export const Text = styled.h1`
  font-size: 2.2rem;
  font-weight: 800;
  color: #fff;
  letter-spacing: 1px;
  text-align: center;
`;

export const AuthBox = styled.div``;

export const GridBox = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 0.6rem;
  margin: 1.2rem 0 2rem 0;
`;

export const Label = styled.label`
  font-size: 1.4rem;
  font-weight: 600;
  color: #b9beee;
`;

export const Input = styled.input`
  padding: 1.2rem;
  font-size: 1.8rem;
  background-color: #202225;
  border-radius: 0.4rem;
  color: #dcddde;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const Button = styled.button`
  padding: 1.34rem;
  color: #fff;
  background-color: #5864f2;
  width: 100%;
  font-size: 1.6rem;
  font-weight: 600;
  margin: 0 0 1.2rem 0;
  transition: background-color 0.3s ease;

  & + button {
    background-color: #e5e5e5;
    color: #000;

    &:hover {
      background-color: #edf6f9;
    }
  }

  &:hover {
    background-color: #4361ee;
  }

  &:focus {
    outline: 6px solid #4cc9f0;
    border-radius: 1rem;
  }
`;

export const Span = styled.span`
  font-size: 1.6rem;
  font-weight: 400;
  color: #a4a6aa;

  & + a {
    color: #02aff4;
    font-size: 1.6rem;
    margin-left: 1rem;

    &:hover {
      text-decoration: underline;
    }
  }
`;
