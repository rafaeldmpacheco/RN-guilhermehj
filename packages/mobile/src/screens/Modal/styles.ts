import styled from 'styled-components/native';

export const ModalContainer = styled.View`
  background-color: transparent;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

interface MessageContainerProps {
  type: 'error' | 'success' | 'warning'
}

export const MessageContainer = styled.View<MessageContainerProps>`
  background-color: whitesmoke;
  padding-horizontal: 10px;
  padding-vertical: 10px;
  border-radius: 7px;
  ${({ type }) => {
    if (type === 'success') {
      return 'background-color: #00AB66;'
    }
    if (type === 'warning') {
      return 'background-color: #ff9933;'
    }
    if (type === 'error') {
      return 'background-color: #cc0000;'
    }
  }}
  
`;