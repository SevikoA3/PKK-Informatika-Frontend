import defaultImage from "../Assets/image2.png";
import awan from "../Assets/awann 1.png";
import logo from "../Assets/logo.png";
import judul from "../Assets/judul.png";
import cover from "../Assets/cover.png";
import Mahasigma from "../Components/mahasigma";
import Chain from "../Assets/chain.svg";
import footer from "../Assets/footer.svg";
import { useEffect, useState } from "react";
import db from "../Util/connect_db";
import { collection, getDocs } from "firebase/firestore/lite";
import Dokumentasi from "../Components/dokumentasi";

export default function MainPage() {
  const [mahasigmaRows, setMahasigmaRows] = useState([]);
  const [dokumentasiRows, setDokumentasiRows] = useState([]);

  useEffect(() => {
    const fetchMahasigmaData = async () => {
      const mahasigmaCollectionRef = collection(db, "mahasigma");
      const mahasigmaSnapshots = await getDocs(mahasigmaCollectionRef);
      
      const mahasigmaList = mahasigmaSnapshots.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      mahasigmaList.sort((a, b) => a.rank - b.rank);

      const rows = mahasigmaList.map((person, index) => (
        <Mahasigma
          key={person.id} // Unique key for each component
          no={index + 1}
          name={person.name}
          kelompok={person.kelompok}
          image={person.image}
        />
      ));
      
      setMahasigmaRows(rows);
    };

    fetchMahasigmaData();

    const fetchDokumentasiData = async () => {
      const dokumentasiCollectionRef = collection(db, 'dokumentasi');
      const dokumentasiSnapshots = await getDocs(dokumentasiCollectionRef);
      const dokumentasiList = dokumentasiSnapshots.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      console.log(dokumentasiList);
      dokumentasiList.sort((a, b) => a.rank - b.rank);

      const rows = [];

      dokumentasiList.forEach((dokumentasi, index) => {
        rows.push(
          <Dokumentasi
            key={dokumentasi.id}
            drive={dokumentasi.drive}
            title={dokumentasi.title}
            thumbnail={dokumentasi.thumbnail}
          />
        );

        if (index < dokumentasiList.length - 1) {
          rows.push(<img src={Chain} alt="chain" />);
        }
      });
      setDokumentasiRows(rows);
    };

    fetchDokumentasiData();
  }, []);

  return (
    <div className="relative min-h-[1693px] w-[100%] bg-custom-gradient2">
      {/* header */}
      <div className="relative grid place-items-center">
        <img src={defaultImage} alt="default" className="object-cover" />
        <img src={awan} alt="awan" className="absolute top-0 z-0" />
        <img
          src={judul}
          alt="judul"
          className="absolute z-30 bottom-0 translate-y-24"
        />
      </div>

      {/* judul */}
      <div className="relative">
        <img src={logo} alt="logo" />
        <img
          src={cover}
          alt="cover"
          className="transform absolute left-1/2 -translate-x-1/2 top-24"
        />
        <div className="w-[100vw] h-[313px] bg-custom-gradient1 absolute bottom-0" />
        <div className="absolute flex flex-col z-20 top-72 w-[100vw] px-10 md:px-16">
          <h1 className="relative z-20 text-white text-2xl font-bold">
            Mahasigma <br />Of The Week
          </h1>
          <div className="flex flex-col gap-4 mt-4">
            {mahasigmaRows}
          </div>
        </div>
      </div>
      
      {/* dokumentasi */}
      <div className="mt-56 px-10 flex flex-col items-center">
        <h1 className="z-20 text-white text-2xl font-bold mb-5 w-full text-right">
          Documentation 📷
        </h1>
        {dokumentasiRows}
      </div>
      <img src={footer} alt="footer" className="w-[100%]" />
    </div>
  );
}
