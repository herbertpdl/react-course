import styled from 'styled-components';

export const CollectionItem = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
`

export const CollectionItemImage = styled.div`
  width: 100%;
  height: 95%;
  background-image: ${props => props.backgroundImage};
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
`