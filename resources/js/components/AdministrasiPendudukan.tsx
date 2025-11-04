import {
  FaUsers,
  FaMale,
  FaFemale,
  FaUserFriends,
  FaUserClock,
  FaExchangeAlt,
} from "react-icons/fa";

const data = [
  { label: "Penduduk", value: "1.153", icon: <FaUsers /> },
  { label: "Laki-Laki", value: "607", icon: <FaMale /> },
  { label: "Kepala Keluarga", value: "307", icon: <FaUserFriends /> },
  { label: "Perempuan", value: "546", icon: <FaFemale /> },
  
];

const AdministrasiPendudukan = () => {
  return (
    <div className="py-10">
      {/* Desktop */}
      <div className="hidden md:grid grid-cols-2 gap-4 max-w-5xl mx-auto">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between rounded-lg shadow bg-white overflow-hidden hover:shadow-md transition h-[70px]"
          >
            <div className="flex items-center justify-center w-1/3 bg-gradient-to-r from-[#3D7D4B] to-green-500 text-white text-4xl font-bold py-8">
              {item.value}
            </div>
            <div className="flex items-center justify-center gap-3 w-2/3 py-8 text-gray-800 text-2xl font-bold">
              <span className="text-[#3D7D4B] text-3xl">{item.icon}</span>
              {item.label}
            </div>
          </div>
        ))}
      </div>

      {/* mobile */}
      <div className="grid grid-cols-3 gap-5 md:hidden max-w-sm mx-auto text-center">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-white shadow rounded-xl p-4 hover:shadow-md transition"
          >
            <div className="text-4xl text-[#3D7D4B] mb-2">{item.icon}</div>
            <div className="text-2xl font-bold text-gray-800">{item.value}</div>
            <div className="text-sm font-semibold text-gray-600">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdministrasiPendudukan;
