import * as C from "./styles";

export const Ticket = () => {
  return (
    <C.Container>
      <C.Content dashed={false}>
        <C.Info>
          <C.Info>
            <C.Label>Voo</C.Label>
            <C.Value>R$955</C.Value>
          </C.Info>
        </C.Info>
      </C.Content>
    </C.Container>
  );
};
