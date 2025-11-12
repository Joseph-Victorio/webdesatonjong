interface PageProps {
    nama: string;
    jumlah: number;
    images: string;
}

const AdministrasiPendudukan = ({ nama, jumlah, images }: PageProps) => {
    return (
        <div className="py-5">
            {/* Desktop */}
            <div className="hidden md:flex h-[90px] items-center justify-between overflow-hidden rounded-lg bg-white shadow transition hover:shadow-md">
                <div className="flex w-1/3 items-center justify-center gap-3 bg-gradient-to-r from-[#3D7D4B] to-green-500 py-6 text-white">
                    
                    <span className="text-4xl font-bold">{jumlah}</span>
                </div>
                <div className="flex w-2/3 items-center justify-center text-2xl font-semibold text-gray-800">
                    {nama}
                </div>
            </div>

            {/* Mobile */}
            <div className="flex flex-col items-center justify-center rounded-lg bg-white p-4 shadow transition hover:shadow-md md:hidden">
                <img 
                    src={images} 
                    alt={nama} 
                    className="w-10 h-10 object-contain mb-2"
                />
                <div className="text-2xl font-bold text-gray-800">
                    {jumlah}
                </div>
                <div className="text-sm font-semibold text-gray-600">
                    {nama}
                </div>
            </div>
        </div>
    );
};

export default AdministrasiPendudukan;
