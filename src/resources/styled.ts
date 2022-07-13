import styled from "styled-components";
import global from './global';
import { IContainer, ITextProp } from './types';

export const Container = styled.div<IContainer>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  alighn-items: center;
  overflow: hidden;
  max-width: 100%;
  min-height: 100vh;
  background-color: ${({ color = global.colors.primary }) => color};
`;

export const Image =  styled.img``;

export const ColumnLeft = styled.div`
  max-width: 60px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 140.02px;
  flex-grow: 1;
  align-items: flex-start;
`;

export const ColumnRight = styled.div`
  max-width: 60px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 127.41px;
  flex-grow: 1;
  align-items: center;
`;

export const Content = styled.div`
  max-width: ${({ width = 600 }) => `${width}px`};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  padding: 100px 0px;
`;

export const Text = styled.div<ITextProp>`
  font-size: ${({ size = 16 }) => `${size}px`};
  color: ${({ color = global.colors.white }) => color};
  font-family: ${({ font = 'Quicksand' }) => font};
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${({ justify = "flex-start" }) => justify};
  align-items: ${({ justify = "flex-start" }) => justify};
  margin: 0px 0px 9px 0px;
`;  