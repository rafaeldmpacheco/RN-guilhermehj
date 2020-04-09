import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h3``;

export const CardsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export const DishCardContainer = styled.div`
  background-color: white;
  width: 100%;
  max-width: 350px;
  border-radius: 11px;
  overflow: hidden;
  margin: 5px 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const DishCardDescription = styled.p`
  text-align: justify;
  padding: 0 15px;
`;

export const CardImage = styled.img`
  height: 150px;
  width: 100%;
`;