import styled from "styled-components";

interface Props {
  dashed?: boolean;
  orientation?: string;
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div<Props>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  border-radius: 24px;
  background: #fff;
  padding: 24px 32px;
  border-top: ${(props) =>
    props.dashed ? "1px dashed rgba(0,0,0,0.32);" : "none"};
  border-bottom: ${(props) =>
    props.dashed ? "1px dashed rgba(0,0,0,0.32);" : "none"};
`;

export const ContainerInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Info = styled.div<Props>`
  display: flex;
  flex-direction: column;
  align-items: ${(props) =>
    props.orientation != "" ? props.orientation : "flex-start"};
`;

export const Label = styled.label`
  font-size: 14px;
  line-height: 17px;
  letter-spacing: -0.02em;
  color: #000000;
  opacity: 0.6;
`;

export const Value = styled.p`
  font-weight: 700;
  line-height: 19px;
  letter-spacing: -0.02em;
  color: rgba(0, 0, 0, 0.88);
`;

export const Airpont = styled.p`
  font-size: 40px;
  line-height: 50px;
  color: rgba(0, 0, 0, 0.88);
  letter-spacing: -0.02em;
`;

export const Time = styled.span`
  line-height: 19px;
  letter-spacing: -0.02em;
  color: rgba(0, 0, 0, 0.8);
`;

export const BoardingInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const BoardingTime = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 8px;
  background: #633bbc;
  border-radius: 8px;
  font-weight: 500;
  line-height: 19px;
  letter-spacing: -0.02em;
  color: #fff;
`;

export const BoardingText = styled.p`
  line-height: 20px;
  text-align: center;
  letter-spacing: -0.02em;
  color: rgba(0, 0, 0, 0.8);
`;
