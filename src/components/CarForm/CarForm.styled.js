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
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
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
  background-color: #f7f7fb;
`;

export const SelectPrise = styled.select`
  display: flex;
  width: 125px;
  padding: 14px 18px;
  align-items: flex-start;
  gap: 32px;
  border-radius: 14px;
  background-color: #f7f7fb;
`;

export const Mileage = styled.div`
  display: flex;
  width: 320px;
  height: 48px;
  flex-shrink: 0;
`;

export const MileageL = styled.input`
  display: flex;
  width: 125px;
  align-items: center;
  flex-shrink: 0;
  border-radius: 14px 0px 0px 14px;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  background-color: #f7f7fb;
`;

export const MileageR = styled.input`
  display: flex;
  width: 125px;
  align-items: center;
  flex-shrink: 0;
  border: none;
  border-radius: 0px 14px 14px 0px;
  background: rgba(247, 247, 251, 1);
`;

export const ButtonForm = styled.button`
  width: 136px;
  height: 48px;
`;
