import styled from 'styled-components';

export const Card = styled.li`
  width: 274px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
  button {
    display: flex;
    width: 274px;
    height: 44px;
    padding: 12px 99px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
  }
`;
export const Img = styled.img`
  width: 274px;
  height: 268px;
  border-radius: 14px;
  object-fit: cover;
`;
export const Title = styled.h3`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  span {
    color: #3470ff;
  }
`;
export const TitleBox = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;
export const InfoBox = styled.div`
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`;
export const ListInfo = styled.ul`
  display: flex;
  align-items: center;
  height: 18px;
`;
export const Li = styled.li`
  position: relative;
  padding: 0 6px 0 6px;
  /* padding: 4px; */

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 1px;
    background-color: #ccc;
  }
`;
