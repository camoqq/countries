import { useState } from "react";
import Header1 from "./Header1";
import EnterData from "./EnterData";
import BottomParent from "./BottomParent";
import pic2 from "../assets/places.png";

export type stateType = {
  id: number;
  title: string;
  desc: string;
};

export default function FormMain() {
  const [task, settask] = useState<stateType[]>([]);

  const handleClick = (taskRef: string, deskRef: string) => {
    settask((prev) => {
      const newTask = {
        id: Math.random(),
        title: taskRef,
        desc: deskRef,
      };
      return [...prev, newTask];
    });
  };
  const deleteItem = (id: number) => {
    settask((prev) => prev.filter((item) => item.id !== id));
  };
  return (
    <main>
      <Header1 image={{ src: pic2, alt: "Agenda image" }}>
        <h1>What country would you like to visit?</h1>
      </Header1>
      {/* <button onClick={handleClick}>add</button> */}
      <EnterData onAdd={handleClick} />
      <BottomParent task={task} onDelete={deleteItem} />
    </main>
  );
}
