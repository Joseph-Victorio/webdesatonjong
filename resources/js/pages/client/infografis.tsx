import PendidikanPenduduk from '@/components/pendidikan-penduduk';
import UsiaPenduduk from '@/components/usia-penduduk';
import GuestLayout from '@/layouts/guest-layout';
import { Head } from '@inertiajs/react';

interface Infografis {
    id: number;
    nama: string;
    jumlah: number;
}

interface StatusNikah {
    id: number;
    nama: string;
    jumlah: number;
}

interface Agama {
    id: number;
    nama: string;
    jumlah: number;
}

interface PageProps {
    infografis: Infografis[];
    labels: string[];
    male: number[];
    female: number[];
    labels2: string[];
    values2: number[];
    status_nikah : StatusNikah[]
    agama : Agama[]
}

const infografis = ({
    infografis,
    labels,
    male,
    female,
    labels2,
    values2,
    status_nikah,
    agama,
    
}: PageProps) => {
    const images = [
        '/infografi/1.png',
        '/infografi/2.png',
        '/infografi/3.png',
        '/infografi/4.png',
    ];
    const image_nikah = [
        '/infografi/7.png',
        '/infografi/5.png',
        '/infografi/6.png',
        '/infografi/8.png',
    ]
    const image_agama = [
         '/infografi/9.png',
        '/infografi/10.png',
        '/infografi/11.png',
        '/infografi/12.png',
        '/infografi/13.png',
        '/infografi/14.png',
    ]

    
    return (
        <GuestLayout>
            <Head title="Infografis" />
            <section className="mt-10 p-10">
                <h1 className="block text-xl font-bold text-primary md:text-5xl">
                    INFOGRAFIS DESA TONJONG
                </h1>
                <p className="text-justify md:text-xl">
                    Gambaran lengkap kondisi penduduk Desa Tonjong berdasarkan
                    usia, jenis kelamin, pendidikan, pekerjaan, agama, dan
                    status perkawinan.
                </p>
            </section>
            {/* Jumlah Penduduk dan Kepala Keluarga */}
            <section className="p-10">
                <h2 className="text-center text-xl font-bold text-primary md:text-left md:text-4xl">
                    Jumlah Penduduk
                </h2>
                <div className="mt-5 grid grid-cols-2 place-items-center gap-5">
                    {infografis.slice(0,4).map((info, index) => (
                        <div
                            key={info.id}
                            className="flex flex-col items-center gap-2 rounded-xl px-6 py-3 shadow-xl md:w-full md:flex-row"
                        >
                            <img src={images[index]} alt="" className="w-40" />
                            <div className="text-center md:text-left">
                                <p className="font-semibold text-gray-600 md:text-2xl text-sm">
                                    {info.nama}
                                </p>
                                <p className="font-semibold text-gray-600 md:text-3xl">
                                    <span className="text-primary">
                                        {info.jumlah.toLocaleString(
                                            'id-ID',
                                        )}{' '}
                                    </span>
                                    Jiwa
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            {/* berdasarkan kelompok umur */}
            <section className="">
                <h2 className="px-5 text-center text-xl font-bold text-primary md:px-10 md:text-left md:text-4xl">
                    Berdasarkan Kelompok Umur
                </h2>
                <UsiaPenduduk labels={labels} male={male} female={female} />
                <div className="mt-5 px-10">
                    <p className="rounded-2xl border-b-4 border-[#3B82F6] p-5 text-justify shadow-md shadow-accent-foreground">
                        Untuk jenis kelamin laki-laki, kelompok umur 5-9 adalah
                        kelompok umur tertinggi dengan jumlah 549 orang atau
                        8.80%. Sedangkan, kelompok umur 75+ adalah yang terendah
                        dengan jumlah 87 orang atau 1.4%
                    </p>
                    <p className="mt-10 rounded-2xl border-b-4 border-[#EC4899] p-5 text-justify shadow-md shadow-accent-foreground">
                        Untuk jenis kelamin perempuan, kelompok umur 20-24
                        adalah kelompok umur tertinggi dengan jumlah 525 orang
                        atau 8.69%. Sedangkan, kelompok umur 70-74 adalah yang
                        terendah dengan jumlah 97 orang atau 1.6%
                    </p>
                </div>
            </section>
            {/*  pendidikan*/}
            <section className="mt-10 px-10">
                <h2 className="px-5 text-center text-xl font-bold text-primary md:px-10 md:text-left md:text-4xl">
                    Berdasarkan Pendidikan
                </h2>
                <div className="h-[300px] md:h-[400px]">
                    <PendidikanPenduduk labels={labels2} values={values2} />
                </div>
            </section>
            {/* berdasarkan status nikah */}
            <section className="p-10">
                <h2 className="text-center text-xl font-bold text-primary md:text-left md:text-4xl">
                    Berdasarkan Status Pernikahan
                </h2>
                <div className="mt-5 grid grid-cols-2 place-items-center gap-5">
                    {status_nikah.map((status, index) => (
                        <div
                            key={status.id}
                            className="flex flex-col items-center gap-2 rounded-xl px-6 py-3 shadow-xl md:w-full md:flex-row "
                        >
                            <img src={image_nikah[index]} alt="" className="w-40" />
                            <div className="text-center md:text-left">
                                <p className="font-semibold text-gray-600 md:text-2xl text-sm">
                                    {status.nama}
                                </p>
                                <p className="font-semibold text-gray-600 md:text-3xl">
                                    <span className="text-primary">
                                        {status.jumlah.toLocaleString(
                                            'id-ID',
                                        )}{' '}
                                    </span>
                                    Jiwa
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            {/* berdasarkan status nikah */}
            <section className="p-10">
                <h2 className="text-center text-xl font-bold text-primary md:text-left md:text-4xl">
                    Berdasarkan Agama
                </h2>
                <div className="mt-5 grid grid-cols-2 place-items-center gap-5">
                    {agama.map((ag, index) => (
                        <div
                            key={ag.id}
                            className="flex flex-col items-center gap-2 rounded-xl px-6 py-3 shadow-xl md:w-full md:flex-row "
                        >
                            <img src={image_agama[index]} alt="" className="w-40" />
                            <div className="text-center md:text-left">
                                <p className="font-semibold text-gray-600 md:text-2xl text-sm">
                                    {ag.nama}
                                </p>
                                <p className="font-semibold text-gray-600 md:text-3xl">
                                    <span className="text-primary">
                                        {ag.jumlah.toLocaleString(
                                            'id-ID',
                                        )}{' '}
                                    </span>
                                    Jiwa
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </GuestLayout>
    );
};

export default infografis;
