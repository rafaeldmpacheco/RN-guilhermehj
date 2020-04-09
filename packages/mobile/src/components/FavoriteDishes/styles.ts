import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const DishCardContainer = styled.View`
  background-color: white;
  border-radius: 11px;
  overflow: hidden;
  margin-horizontal: 10px;
  margin-vertical: 5px;
  elevation: 5;
`;

export const DishCardImage = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: 100%;
  height: 150px;
`;

export const Description = styled.Text`
  padding-horizontal: 15px;
  margin-vertical: 10px;
  text-align: justify;
`;

export const Title = styled.Text`
  text-align: center;
  font-size: 21px;
`;