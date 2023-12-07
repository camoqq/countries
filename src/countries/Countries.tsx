import { ReactNode, useEffect, useState } from "react";
import pic1 from "../assets/earth.png";
import Items, { itemProps } from "./Items";
import { get } from "./http";

type rawData = {
  name: nameData;
  flag: string;
  continents: string;
  capital: string;
};
type nameData = {
  common: string;
};

function Countries() {
  const [item, setitem] = useState<itemProps[]>();
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState<string>();

  useEffect(() => {
    const func = async () => {
      setloading(true);
      try {
        const data = (await get(
          "https://restcountries.com/v3.1/all"
        )) as rawData[];

        //converted data should be an array
        const trasnformedData: itemProps[] = data.map((item) => {
          return {
            nameCountry: item.name["common"],
            flagCountry: item.flag,
            cont: item.continents,
            cap: item.capital,
          };
        });
        setitem(trasnformedData);
      } catch (err) {
        seterror((err as Error).message);
      }

      setloading(false);
    };

    func();
  }, []);

  const sorted = item?.sort((a, b) =>
    a.nameCountry.localeCompare(b.nameCountry)
  );

  let content: ReactNode;
  if (item) {
    content = <Items items={sorted!} />;
  }
  if (loading) {
    content = <p id="loading-fallback">Loading...</p>;
  }
  if (error) {
    content = <p>{error}</p>;
  }
  return (
    <div className="main1">
      <div className="cent">
        <img src={pic1} alt="image" />
      </div>
      {content}
    </div>
  );
}

export default Countries;
