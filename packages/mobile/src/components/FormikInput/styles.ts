import styled from 'styled-components/native';
import { TextInputProps } from 'react-native';

export const StyledInput = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: 'darkgrey',
}))<TextInputProps>`
  font-size: 16px;
  width: 100%;
  padding-horizontal: 5px;
  background-color: white;
  margin-vertical: 5px;
  height: 40px;
  border-radius: 5px;
`;

export const Error = styled.Text`
  color: #cc0000;
  padding-vertical: 3px;
  width: 100%;
  text-align: center;
  font-weight: bold; 
`;