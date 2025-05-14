export type itemProps = {
  nameCountry: string;
  flagCountry: string;
  cont: string;
  cap: string;
};

type totalItemProps = {
  items: itemProps[];
};

export default function Items({ items }: totalItemProps) {
  return (
    <div>
      <div className="titleList">
        <h1>Countries</h1>
      </div>
      <div className="items">
        <ul>
          {items.map((item) => (
            <li>
              <div className="details">
                <div className="det">
                  <h2> {item.nameCountry}</h2>

                  <span>Capital: {item.cap}</span>
                  <span>Continent: {item.cont}</span>
                </div>
                <span className="lip">{item.flagCountry}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
