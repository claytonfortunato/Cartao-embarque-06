import { Ticket } from "../Ticket";

import * as C from "./styles";

const Home = () => {
  return (
    <C.Container>
      <C.Title>Cartão de embarque</C.Title>
      <Ticket />
    </C.Container>
  );
};

export default Home;
