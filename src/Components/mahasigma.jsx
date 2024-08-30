export default function Mahasigma({ no, name, kelompok, image }) {
    return (
        <div className="bg-custom-gradient3 rounded-lg w-full text-white flex justify-between pl-4 pt-2 relative shadow-2xl">
            <div className="flex flex-col gap-5">
                <div className="flex">
                    <p className="text-2xl">#</p>
                    <p className="text-5xl font-bold">{no}</p>
                </div>
                <div className="max-w-1/2 tracking-tighter">
                    <p className="text-xl font-semibold">{name}</p>
                    <p className="text-sm pb-2">{kelompok}</p>
                </div>
            </div>
            <img src={image} alt="mahasigma" className="rounded-lg h-[10rem] absolute bottom-0 right-0" />
            <p className="p-1 bg-[#E85C0D] text-[#FABC3F] absolute tracking-tighter bottom-0 right-0 text-xs rounded-md">+{no < 2 ? 10000: 5000} aura</p>
        </div>
    );
}