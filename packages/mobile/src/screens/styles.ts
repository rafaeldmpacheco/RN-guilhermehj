import styled from 'styled-components/native';
import {StatusBar} from 'react-native';

export const ScreenContainer = styled.View`
  flex: 1;
  background-color: whitesmoke;
  padding-top: ${StatusBar.currentHeight}px;
`;