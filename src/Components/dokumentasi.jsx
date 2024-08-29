export default function Dokumentasi({ drive, title, thumbnail }) {
    return (
        <a
            href={drive}
            className="w-full flex flex-col rounded-xl overflow-hidden text-white"
            style={{
                background: 'linear-gradient(90deg, #275BB2 0%, #5B17A8 42%, #8D05B4 100%)',
                padding: '8px', // Equal to the border width you wanted
                borderRadius: '16px', // Adjust based on your original border-radius
            }}
        >
            <div
                style={{
                    background: '#000', // The color of the inner container
                    borderRadius: 'inherit', // Ensures the inner content stays rounded
                    padding: '8px', // Optional, adds spacing inside the inner container
                }}
            >
                <img
                    src={thumbnail}
                    alt={title}
                    className="w-full h-auto aspect-video object-cover bg-white rounded-lg" // Maintain rounded corners inside
                />
                <div className="pl-3 py-2">
                    <h2 className="font-bold">{title}</h2>
                </div>
            </div>
        </a>
    );
}
