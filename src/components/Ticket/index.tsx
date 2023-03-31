import { Airplane } from "./airplane";
import * as C from "./styles";

export const Ticket = () => {
  return (
    <C.Container>
      <C.Content dashed={false}>
        <C.ContainerInfo>
          <C.Info>
            <C.Label>Voo</C.Label>
            <C.Value>R$955</C.Value>
          </C.Info>
          <C.Info orientation="flex-end">
            <C.Label>Data</C.Label>
            <C.Value>23/02/2023</C.Value>
          </C.Info>
        </C.ContainerInfo>
        <C.ContainerInfo>
          <C.Info>
            <C.Label>São Paulo, Brazil</C.Label>
            <C.Airpont>GRU</C.Airpont>
            <C.Time>17:00</C.Time>
          </C.Info>
          <Airplane />
          <C.Info orientation="flex-end">
            <C.Label>São Francisco, EUA</C.Label>
            <C.Airpont>SFO</C.Airpont>
            <C.Time>04:50¹</C.Time>
          </C.Info>
        </C.ContainerInfo>
      </C.Content>
      <C.Content dashed={true}>
        <C.ContainerInfo>
          <C.Info>
            <C.Label>Passageiro</C.Label>
            <C.Value>Rodrigo Terron</C.Value>
          </C.Info>
          <C.Info orientation="flex-end">
            <C.Label>Assento</C.Label>
            <C.Value>22A</C.Value>
          </C.Info>
        </C.ContainerInfo>
      </C.Content>
    </C.Container>
  );
};
