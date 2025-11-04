import { useState } from 'react';
import {
    FaChevronDown,
    FaChevronUp,
    FaEnvelope,
    FaFacebookF,
    FaInstagram,
    FaPhoneAlt,
    FaTiktok,
} from 'react-icons/fa';

const Footer = () => {
    const [openSection, setOpenSection] = useState<string | null>(null);

    const toggleSection = (section: string) => {
        setOpenSection(openSection === section ? null : section);
    };

    return (
        <footer className="bg-[#3D7D4B] px-5 pt-10 pb-6 text-white md:px-20 relative">
            {/* Desktop */}
            <div className="hidden gap-10 md:grid md:grid-cols-4">
                <div className="">
                    <div className="mb-3 flex flex-col items-center gap-3">
                        <div className="flex gap-2">
                            <img
                                src="/logo.svg"
                                alt="Logo"
                                className="h-16 w-16"
                            />
                            <h2 className="text-lg font-bold">
                                {' '}
                                Pemerintahan Desa Tonjong
                            </h2>
                        </div>
                        <div>
                            <p className="text-sm">
                                Jalan Nunung M.S, Jl. H. Sailan Raya No.1,
                                Tonjong, Kec. Tajur Halang, Kabupaten Bogor,
                                Jawa Barat 16310
                            </p>
                        </div>
                    </div>
                </div>

                {/*Hubungi Kami */}
                <div>
                    <h3 className="mb-3 text-xl font-semibold">Hubungi Kami</h3>
                    <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                            <FaPhoneAlt /> 08123456789
                        </li>
                        <li className='flex items-center gap-2'>
                            <FaEnvelope /> desatonjong372006@gmail.com
                        </li>
                    </ul>
                    <div className="mt-4 flex gap-3 text-xl">
                        <FaFacebookF className="cursor-pointer hover:text-gray-300" />
                        <FaInstagram className="cursor-pointer hover:text-gray-300" />
                        <FaTiktok className="cursor-pointer hover:text-gray-300" />
                    </div>
                </div>

                {/* Jelajahi */}
                <div>
                    <h3 className="mb-3 text-xl font-semibold">Jelajahi</h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <a
                                href="https://kemendesa.go.id/"
                                className="hover:underline"
                            >
                                Website Kemendesa
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://pelita.kemendagri.go.id/"
                                className="hover:underline"
                            >
                                Website Kemendagri
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://cekdptonline.kpu.go.id/"
                                className="hover:underline"
                            >
                                Cek DPT Online
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Mobile */}
            <div className="space-y-3 md:hidden">
                <div className="mb-4 flex items-center gap-3">
                    <img src="/logo.svg" alt="Logo" className="h-12 w-12" />
                    <div>
                        <h2 className="text-lg font-bold">Desa Tonjong</h2>
                        <p className="text-xs">
                            Jalan Nunung M.S, Jl. H. Sailan Raya No.1, Tonjong,
                            Kec. Tajur Halang, Kabupaten Bogor, Jawa Barat 16310
                        </p>
                    </div>
                </div>

                {/* Accordion */}
                {[
                    {
                        id: 'kontak',
                        title: 'Kontak Desa',
                        content: (
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-center gap-2">
                                    <FaPhoneAlt /> 08123456789
                                </li>
                                <li className="flex items-center gap-2">
                                    <FaEnvelope /> desatonjong@gmail.com
                                </li>
                            </ul>
                        ),
                    },

                    {
                        id: 'sosial',
                        title: 'Sosial Media',
                        content: (
                            <div className="mt-2 flex gap-3 text-lg">
                                <FaFacebookF />
                                <FaInstagram />
                                <FaTiktok />
                            </div>
                        ),
                    },
                    {
                        id: 'jelajahi',
                        title: 'Jelajahi',
                        content: (
                            <ul className="space-y-1 text-sm">
                                <li>
                                    <a href="https://kemendesa.go.id/">
                                        Website Kemendesa
                                    </a>
                                </li>
                                <li>
                                    <a href="https://pelita.kemendagri.go.id/">
                                        Website Kemendagri
                                    </a>
                                </li>
                                <li>
                                    <a href="https://cekdptonline.kpu.go.id/">
                                        Cek DPT Online
                                    </a>
                                </li>
                            </ul>
                        ),
                    },
                ].map((section) => (
                    <div
                        key={section.id}
                        className="border-b border-white/30 pb-2"
                    >
                        <button
                            className="flex w-full items-center justify-between text-left font-semibold"
                            onClick={() => toggleSection(section.id)}
                        >
                            <span className="flex items-center gap-2">
                                {section.title}
                            </span>
                            {openSection === section.id ? (
                                <FaChevronUp />
                            ) : (
                                <FaChevronDown />
                            )}
                        </button>
                        {openSection === section.id && (
                            <div className="mt-2 text-sm text-gray-100">
                                {section.content}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className="mt-6 border-t border-white/30 pt-3 text-center text-sm text-white">
                © 2025 Powered by HIMAKOM
            </div>
        </footer>
    );
};

export default Footer;
