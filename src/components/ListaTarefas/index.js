import { useState } from "react";
import {
  InputContainer,
  ListaContainer,
  ListaTarefasContainer,
  Tarefa,
  TaskInput,
  AddTaskButton,
  RemoveButton,
} from "./styled";
import bin from "../../assets/bin.png";

const listaDeTarefas = ["comer", "dormir", "estudar"];

export function ListaTarefas() {
  const [novaTarefa, setNovaTarefa] = useState("");
  const [lista, setLista] = useState(listaDeTarefas);

  // const listaMapeada = lista.map((item) => {
  //   return (
  //     <Tarefa>
  //       <p>{item}</p>
  //       <RemoveButton>
  //         <img src={bin} alt="" width="16px" />
  //       </RemoveButton>
  //     </Tarefa>
  //   )
  // });

  const onChangeTarefa = (event) => {
    setNovaTarefa(event.target.value);
  };

  const adicionaTarefa = () => {
    const novaLista = [...lista, novaTarefa];
    setLista(novaLista);
    setNovaTarefa("");
  };

  const removeTarefa = (tarefa) => {
    const filtrarTarefa = lista.filter((item) => {
      return item !== tarefa;
    });
    setLista(filtrarTarefa);
  };

  return (
    <ListaTarefasContainer>
      <InputContainer>
        <TaskInput
          placeholder="Digite aqui uma tarefa"
          value={novaTarefa}
          onChange={onChangeTarefa}
        />
        <AddTaskButton onClick={adicionaTarefa}>Adicionar</AddTaskButton>
      </InputContainer>

      <ListaContainer>
        <ul>
          {/* {listaMapeada} */}
          {lista.map((item) => {
            return (
              <Tarefa key={item}>
                <p>{item}</p>
                <RemoveButton onClick={() => removeTarefa(item)}>
                  <img src={bin} alt="" width="16px" />
                </RemoveButton>
              </Tarefa>
            );
          })}
        </ul>
      </ListaContainer>
    </ListaTarefasContainer>
  );
}
