import AdministrasiPendudukan from '@/components/AdministrasiPendudukan';
import CardAnggota from '@/components/CardAnggota';
import Hero from '@/components/hero';
import GuestLayout from '@/layouts/guest-layout';
import { Head } from '@inertiajs/react';
import {
    ArrowRightCircle,
    ChartNoAxesCombined,
    FileText,
    Landmark,
    Newspaper,
} from 'lucide-react';

const anggota = [
    {
        image: '/images/kades.jpg',
        nama: 'Budi Santoso',
        jabatan: 'Kepala Desa',
    },
    {
        image: '/images/sekdes.jpg',
        nama: 'Rina Dewi',
        jabatan: 'Sekretaris Desa',
    },
    { image: '/images/bpd.jpg', nama: 'Andi Wijaya', jabatan: 'Ketua BPD' },
    {
        image: '/images/sekdes.jpg',
        nama: 'Rina Dewi',
        jabatan: 'Sekretaris Desa',
    },
    { image: '/images/bpd.jpg', nama: 'Andi Wijaya', jabatan: 'Ketua BPD' },
];

const beranda = () => {
    return (
        <GuestLayout>
            <Head title="Beranda" />
           <Hero/>
            {/* jelajah desa */}
            <section className="mt-5 md:px-10 md:py-10">
                {/* mobile */}
                <div className="flex flex-wrap items-center gap-5 p-5 md:hidden">
                    <a href="/profil-desa">
                        <div className="rounded-xl p-2 shadow-lg transition-all duration-300 ease-in-out hover:shadow-primary">
                            <Landmark
                                size={50}
                                className="mx-auto text-primary"
                            />
                        </div>
                        <p className="text-center font-bold md:text-xl">
                            Profil Desa
                        </p>
                    </a>
                    <a href="/inforgrafis" className="">
                        <div className="rounded-xl p-2 shadow-lg transition-all duration-300 ease-in-out hover:shadow-primary">
                            <ChartNoAxesCombined
                                size={50}
                                className="text-primary"
                            />
                        </div>
                        <p className="text-center font-bold md:text-xl">
                            Infografis
                        </p>
                    </a>
                    <a href="/ppid">
                        <div className="rounded-xl p-2 shadow-lg transition-all duration-300 ease-in-out hover:shadow-primary">
                            <FileText size={50} className="text-primary" />
                        </div>
                        <p className="text-center font-bold md:text-xl">PPID</p>
                    </a>
                    <a href="/berita">
                        <div className="rounded-xl p-2 shadow-lg transition-all duration-300 ease-in-out hover:shadow-primary">
                            <Newspaper
                                size={50}
                                className="mx-auto text-primary"
                            />
                        </div>
                        <p className="text-center font-bold md:text-xl">
                            Berita Desa
                        </p>
                    </a>
                </div>
                {/* Desktop */}
                <div className="hidden items-center justify-between md:flex">
                    <div className="gap-2">
                        <h2 className="hidden font-bold text-primary md:block md:text-5xl">
                            JELAJAHI DESA
                        </h2>
                        <p className="md:w-[500px] md:text-2xl">
                            Melalui website ini anda dapat menjelajahi segala
                            hal yang terkait dengan. penduduk, demografis,
                            galeri dan juga berita tentang desa.
                        </p>
                    </div>
                    {/* jelajah */}
                    <div className="flex flex-col gap-10">
                        {/* atas */}
                        <div className="flex flex-row gap-10">
                            <a href="/profil-desa">
                                <div className="rounded-xl p-2 shadow-lg transition-all duration-300 ease-in-out hover:shadow-primary">
                                    <Landmark
                                        size={120}
                                        className="text-primary"
                                    />
                                    <p className="text-center font-bold md:text-xl">
                                        Profil Desa
                                    </p>
                                </div>
                            </a>
                            <a href="/inforgrafis">
                                <div className="rounded-xl p-2 shadow-lg transition-all duration-300 ease-in-out hover:shadow-primary">
                                    <ChartNoAxesCombined
                                        size={120}
                                        className="text-primary"
                                    />
                                    <p className="text-center font-bold md:text-xl">
                                        Infografis
                                    </p>
                                </div>
                            </a>
                        </div>
                        {/* bawah */}
                        <div className="ml-20 flex flex-row gap-10">
                            <a href="/ppid">
                                <div className="rounded-xl p-2 shadow-lg transition-all duration-300 ease-in-out hover:shadow-primary">
                                    <FileText
                                        size={120}
                                        className="text-primary"
                                    />
                                    <p className="text-center font-bold md:text-xl">
                                        PPID
                                    </p>
                                </div>
                            </a>
                            <a href="/berita">
                                <div className="rounded-xl p-2 shadow-lg transition-all duration-300 ease-in-out hover:shadow-primary">
                                    <Newspaper
                                        size={120}
                                        className="text-primary"
                                    />
                                    <p className="text-center font-bold md:text-xl">
                                        Berita Desa
                                    </p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* peta */}
            <section className="p-5 md:p-10">
                <div className="mb-5">
                    <h2 className="text-center text-2xl font-bold text-primary md:text-left md:text-5xl">
                        PETA DESA
                    </h2>
                    <p className="text-center text-xl md:text-left">
                        Klik peta ini jika anda mau datang ke desa kami!
                    </p>
                </div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31714.142700860335!2d106.73265163923787!3d-6.487728442920383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c2ec9c9607c5%3A0xb7fe841942200e38!2sTonjong%2C%20Tajur%20Halang%2C%20Bogor%20Regency%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1759907404716!5m2!1sen!2sid"
                    className="w-full border-none md:h-[500px]"
                    loading="lazy"
                ></iframe>
            </section>
            {/* SOTK */}
            <section className="p-5 md:p-10">
                <div>
                    <h2 className="text-center text-2xl font-bold text-primary md:text-left md:text-5xl">
                        SOTK
                    </h2>

                    <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                        <p className="text-center text-xl md:text-left">
                            Struktur Organisasi dan tata kerja Desa Tonjong
                        </p>

                        <a
                            href="/struktur"
                            className="order-last flex items-center justify-center gap-2 font-medium text-gray-400 duration-300 ease-in-out hover:text-primary md:order-none"
                        >
                            lihat semua struktur <ArrowRightCircle />
                        </a>
                    </div>
                </div>

                {/* Cards Section */}
                <div className="scrollbar-hide flex snap-x snap-mandatory grid-cols-1 gap-5 overflow-x-auto pb-4 sm:grid-cols-2 md:grid md:grid-cols-3 md:overflow-visible lg:grid-cols-4 xl:grid-cols-5">
                    {anggota.slice(-5).map((a, index) => (
                        <div
                            key={index}
                            className="w-56 flex-shrink-0 snap-center md:w-auto"
                        >
                            <CardAnggota
                                image={a.image}
                                nama={a.nama}
                                jabatan={a.jabatan}
                            />
                        </div>
                    ))}
                </div>
            </section>
            {/* penduduk */}
            <section className="p-10">
                <div>
                    <h2 className="text-center text-2xl font-bold text-primary md:text-left md:text-5xl">
                        ADMINISTRASI PENDUDUKAN
                    </h2>

                    <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                        <p className="text-center md:w-[700px] md:text-left md:text-xl">
                            Sistem digital yang berfungsi mempermudah
                            pengelolaan data dan informasi terkait dengan
                            kependudukan dan pendayagunaannya untuk pelayanan
                            publik yang efektif dan efisien
                        </p>

                        <a
                            href="/infografis"
                            className="order-last flex items-center justify-center gap-2 font-medium text-gray-400 duration-300 ease-in-out hover:text-primary md:order-none"
                        >
                            lihat semua info <ArrowRightCircle />
                        </a>
                    </div>
                </div>
                <AdministrasiPendudukan />
            </section>
        </GuestLayout>
    );
};

export default beranda;
