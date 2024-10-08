export default function Dokumentasi({ drive, title, thumbnail, date }) {
    return (
        <a
            href={drive}
            className="w-full flex flex-col rounded-xl overflow-hidden text-white"
            target="_blank"
            rel="noreferrer"
            style={{
                background: 'linear-gradient(135deg, #9F00B9 0%, #620DA5 55%, #185ABC 100%)',
                padding: '8px',
                borderRadius: '16px',
            }}
        >
            <div
                style={{
                    background: 'linear-gradient(90deg, #275BB1 24%, #610FA6 65%, #8E04B4 100%)',
                    borderRadius: '8px',
                }}
            >
                <img
                    src={thumbnail}
                    alt={title}
                    className="w-full h-auto aspect-video object-cover bg-white rounded-t-lg"
                />
                <div className="pl-3 py-2 md:py-4">
                    <h2 className="font-bold md:text-2xl">{title}</h2>
                    <p className="text-xs md:text-base">{date}</p>
                </div>
            </div>
        </a>
    );
}