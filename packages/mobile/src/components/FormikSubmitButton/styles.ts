import styled from 'styled-components/native';

export const StyledTouchable = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  background-color: #CC368A;
  width: 100%;
  height: 45px;
  justify-content: center;
  align-items: center;
  margin-vertical: 5px;
`;

export const ButtonText = styled.Text`
  color: white;
  font-size: 18px;
  margin-horizontal: 10px;
`;