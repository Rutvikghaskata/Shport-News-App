import react, { useState, useEffect } from "React";
import StartFirebase from "../firebase/initFirebase";
import { getDatabase, ref, child, get } from "firebase/database";

const db = StartFirebase();
const database = getDatabase();
const dbRef = ref(getDatabase());

export default function DiamondGrid() {
  const [liveDiamonds, setLiveDiamonds] = useState([]);
  const [filterData,setFilterData] = useState([]);

  useEffect(() => {
    get(child(dbRef, `/`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.value());
          setLiveDiamonds(snapshot.value());
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  });

  const onFilter = () => {
    const filtered = liveDiamonds.filter(diamond => {
        return diamond.Shape === 'ROUND' || diamond.Shape === 'OVAL' ;
      });
    console.log(filtered)
    setFilterData(filtered)  
  }

  return (
    <div className="bg-white">
      <div className="max-w-2xl px-4 py-16 mx-auto sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Diamonds</h2>

        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-4 lg:gap-x-8">
          {liveDiamonds.map((diamond) => (
            <div
              key={diamond.Shape}
              className="relative flex flex-col overflow-hidden bg-white border border-gray-200 rounded-lg hover:shadow-sm group"
            >
              <div className="bg-gray-200 ">
                <img
                  src={diamond.Image}
                  alt="alt"
                  className="object-cover object-center "
                />
              </div>
              <div className="flex flex-col flex-1 p-4 space-y-2">
                <div className="flex flex-wrap justify-between">
                  <div className="flex-col basis-1/3">
                    <div className="text-sm font-medium text-gray-900">
                      {diamond.Shape}
                    </div>
                    <p className="pt-1 mb-2 text-sm text-gray-500 ">Schliff</p>
                  </div>
                  <div className="flex-col basis-1/3">
                    <div className="text-sm font-medium text-gray-900">
                      {diamond.Carat}
                    </div>
                    <p className="pt-1 mb-2 text-sm text-gray-500 ">Karat</p>
                  </div>
                  <div className="flex-col basis-1/3">
                    <div className="text-sm font-medium text-gray-900">
                      {diamond.Cut}
                    </div>
                    <p className="pt-1 mb-2 text-sm text-gray-500 ">Schliff</p>
                  </div>
                  <div className="flex-col basis-1/3">
                    <div className="text-sm font-medium text-gray-900">
                      {diamond.Color}
                    </div>
                    <p className="pt-1 mb-2 text-sm text-gray-500 ">Farbe</p>
                  </div>
                  <div className="flex-col basis-1/3">
                    <div className="text-sm font-medium text-gray-900">
                      {diamond.Clarity}
                    </div>
                    <p className="pt-1 mb-2 text-sm text-gray-500 ">Reinheit</p>
                  </div>
                  <div className="flex-col basis-1/3">
                    <div className="text-sm font-medium text-gray-900">
                      {diamond.Ratio}
                    </div>
                    <p className="pt-1 mb-2 text-sm text-gray-500">Preis</p>
                  </div>
                </div>
                <div>
                  <a
                    href={diamond.Report}
                    target={"_self"}
                    rel={"noreferrer"}
                    className="text-sm text-gray-500 hover:underline"
                  >
                    Zertifikat anzeigen
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
