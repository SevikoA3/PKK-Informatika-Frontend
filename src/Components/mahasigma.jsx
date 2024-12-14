export default function Mahasigma({ no, kelompok, image, url }) {
    return (
        <div className="bg-custom-gradient3 rounded-lg w-full text-white flex justify-between pl-4 pt-2 relative shadow-2xl">
            <div className="flex flex-col gap-3">
                <div className="flex pt-3">
                    <p className="text-2xl font-semibold">#</p>
                    <p className="text-3xl md:text-4xl font-bold relative z-30">{no < 2 ? "1": "2"}</p>
                    <p className="text-2xl font-semibold">✨</p>
                </div>
                <div className="max-w-1/2 tracking-tighter">
                    <p className="text-3xl font-semibold relative z-30 pb-4">{kelompok}</p>
                </div>
            </div>

            {/* remove easter egg after a fix mahasigma is announced */}
            <img src={image} alt="mahasigma" className="rounded-lg h-[10rem] absolute bottom-0 right-0" onClick={() => window.open(url, '_blank')}/>
            <p className="p-1 bg-[#E85C0D] text-[#FABC3F] absolute tracking-tighter bottom-0 right-0 text-xs rounded-md">+10000 Aura</p>
        </div>
    );
}