interface CardAnggotaProps {
  image: string
  nama: string
  jabatan: string
}

const CardAnggota = ({ image, nama, jabatan }: CardAnggotaProps) => {
  return (
    <div className="relative w-56 h-72 rounded-xl overflow-hidden shadow-lg group flex-shrink-0">
      {/* Gambar */}
      <img
        src={image}
        alt={nama}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />

      {/* Overlay bawah */}
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent px-4 py-3 text-white">
        <h3 className="text-lg font-bold leading-tight">{nama}</h3>
        <p className="text-sm opacity-80">{jabatan}</p>
      </div>
    </div>
  )
}

export default CardAnggota
