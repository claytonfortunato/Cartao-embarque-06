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
      </C.Content>
    </C.Container>
  );
};
