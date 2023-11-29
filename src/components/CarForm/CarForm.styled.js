import styled from 'styled-components';

export const Forma = styled.form`
  display: flex;
  width: 859px;
  height: 74px;
  align-items: flex-end;
  gap: 18px;
  flex-shrink: 0;
`;

export const Label = styled.label`
  color: #8a8a89;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
`;

export const SelectBrand = styled.select`
  display: flex;
  padding: 14px 89px 14px 18px;
  justify-content: center;
  align-items: center;
  gap: 32px;
  border-radius: 14px;
  background-color: rgba(138, 138, 137, 0.2);
  border: none;
  option {
    color: #121417;
    font-size: 18px;
    font-weight: 500;
    line-height: 20px;
  }
`;

export const SelectPrise = styled.select`
  display: flex;
  width: 125px;
  padding: 14px 18px;
  align-items: flex-start;
  gap: 32px;
  border-radius: 14px;
  background-color: rgba(138, 138, 137, 0.2);
  border: none;
`;

export const Mileage = styled.div`
  display: flex;
  width: 320px;
  height: 48px;
  flex-shrink: 0;
`;

export const MileageL = styled.input`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  width: 95px;
  padding: 14px 41px 14px 24px;
  border-radius: 14px 0px 0px 14px;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  background-color: rgba(138, 138, 137, 0.2);
  border-left: none;
  border-top: none;
  border-bottom: none;
  color: rgba(18, 20, 23, 1);
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
`;

export const MileageR = styled.input`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  width: 73px;
  padding: 14px 63px 14px 24px;
  border-radius: 0px 14px 14px 0px;
  background-color: rgba(138, 138, 137, 0.2);
  border: none;
  color: rgba(18, 20, 23, 1);
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
`;

export const ButtonForm = styled.button`
  width: 136px;
  height: 48px;
`;
