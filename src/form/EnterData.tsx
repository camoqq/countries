import { FormEvent, useRef } from "react";

type addType = {
  onAdd: (taskRef: string, descRef: string) => void;
};

function EnterData({ onAdd }: addType) {
  const taskRef = useRef<HTMLInputElement>(null);
  const descRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTask = taskRef.current!.value;
    const newDesk = descRef.current!.value;

    onAdd(newTask, newDesk);

    e.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="task">Country</label>
        <input type="text" id="task" ref={taskRef} />
      </p>
      <p>
        <label htmlFor="task">guess the capital</label>
        <input type="text" id="task" ref={descRef} />
      </p>
      <p>
        <button>Add</button>
      </p>
    </form>
  );
}

export default EnterData;
