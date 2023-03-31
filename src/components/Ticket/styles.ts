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
  line-height: 19px;
  letter-spacing: -0.02em;
  color: rgba(0, 0, 0, 0.88);
`;
