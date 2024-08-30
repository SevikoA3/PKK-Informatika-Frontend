import awan from "../Assets/awann 1.png";
import logo from "../Assets/logo.png";
import judul from "../Assets/judul.svg";
import cover from "../Assets/cover.png";
import Mahasigma from "../Components/mahasigma";
import Chain from "../Assets/chain.svg";
import footer from "../Assets/footer.svg";
import { useEffect, useState } from "react";
import db from "../Util/connect_db";
import { collection, getDocs } from "firebase/firestore/lite";
import Dokumentasi from "../Components/dokumentasi";
import ReactPlayer from "react-player/lazy";

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
          key={person.id}
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
      const dokumentasiCollectionRef = collection(db, "dokumentasi");
      const dokumentasiSnapshots = await getDocs(dokumentasiCollectionRef);
      const dokumentasiList = dokumentasiSnapshots.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
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
          rows.push(<img key={`chain-${index}`} src={Chain} alt="chain" />);
        }
      });
      setDokumentasiRows(rows);
    };

    fetchDokumentasiData();
  }, []);

  return (
    <div className="flex w-full justify-center md:p-16 bg-[#7215b1]">
      <div className="relative min-h-screen w-full bg-[#233BA0] md:max-w-[35rem] pb-16 md:rounded-2xl overflow-hidden md:shadow-2xl">
        {/* header */}
        <div className="relative grid place-items-center">
          <ReactPlayer
            url="https://firebasestorage.googleapis.com/v0/b/pkk-informatika.appspot.com/o/mini%20aftermovie.mp4?alt=media&token=36ba4c69-68b9-4af5-83e7-431705080cb1"
            muted={true}
            height="100%"
            width="100%"
            loop={true}
            playing={true}
            pip={false}
            stopOnUnmount={false}
            controls={false}
            playsinline={true}
          />
          <img
            src={awan}
            alt="awan"
            className="absolute top-0 z-10 w-full h-auto"
          />
          <img
            src={judul}
            alt="judul"
            className="absolute z-30 bottom-0 translate-y-24 md:translate-y-40 w-full h-auto p-5"
          />
        </div>

        {/* judul */}
        <div className="relative">
          <img
            src={logo}
            alt="logo"
            className="w-full h-auto bg-[#784EB7] object-fill relative z-0"
          />
          <img
            src={cover}
            alt="cover"
            className="transform absolute left-1/2 -translate-x-1/2 top-10 md:top-28 w-full h-auto p-10 z-30"
          />
          <div className="w-full h-[313px] bg-custom-gradient1 absolute -bottom-1" />
        </div>

        {/* isi */}
        <div className="-mt-64 mb-20 md:mb-28">
          {/* mahasigma */}
          <div className="flex flex-col z-20 w-full px-10">
            <h1 className="relative z-20 text-white text-3xl md:text-5xl font-bold">
              Mahasigma <br />
              Of The Week
            </h1>
            <div className="flex flex-col gap-7 mt-4">{mahasigmaRows}</div>
          </div>

          {/* dokumentasi */}
          <div className="mt-20 px-10 flex flex-col items-center">
            <h1 className="z-20 text-white text-2xl md:text-4xl font-bold mb-3 w-full text-right">
              Documentation 📷
            </h1>
            {dokumentasiRows}
          </div>
        </div>

        <img src={footer} alt="footer" className="w-[100%] absolute bottom-0" />
      </div>
    </div>
  );
}