import Bottom from "./Bottom";
import { stateType } from "./FormMain";
import Information from "./Information";
import { ReactNode } from "react";

type taskProp = {
  task: stateType[];
  onDelete: (id: number) => void;
};

export default function BottomParent({ task, onDelete }: taskProp) {
  if (task.length === 0) {
    return (
      <Information mode="hint">
        No countries added yet. Don't put more than 2.{" "}
      </Information>
    );
  }

  let warningBox: ReactNode;
  if (task.length >= 3) {
    warningBox = <Information mode="warning">Don't put too many.</Information>;
  }

  return (
    <>
      {warningBox}
      <ul>
        {task.map((item) => (
          <li key={item.id}>
            <Bottom
              title={item.title}
              desc={item.desc}
              onDelete={onDelete}
              id={item.id}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
