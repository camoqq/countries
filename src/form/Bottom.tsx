type Props = {
  title: string;
  desc: string;
  onDelete: (id: number) => void;
  id: number;
};

const Bottom = ({ title, desc, onDelete, id }: Props) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </article>
  );
};

export default Bottom;
