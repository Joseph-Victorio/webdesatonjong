import GuestLayout from '@/layouts/guest-layout';

interface PageProps {
    wilayah: number;
    kepadatan: number;
}
const ProfilDesa = ({ wilayah, kepadatan }: PageProps) => {
    const misi = [
        'Pelayanan cepat dan transparan',

        'Ekonomi kerakyatan berbasis potensi lokal',

        'Pendidikan dan pemberdayaan masyarakat',

        'Infrastruktur merata dan berkelanjutan',

        'Lingkungan bersih dan lestari',

        'Pelestarian budaya dan gotong royong',
    ];
    const kalimat = ['Luas Desa:', 'Jumlah Penduduk:'];

    const tahun = [
        '1948 - 1961',
        '1961 - 1964',
        '1964 - 1966',
        '1966 - 1978',
        '1978 - 1988',
        '1988 - 1999',
        'Maret - Juli 1999',
        '1999 - 2007',
        'Maret - Desember 2007',
        '2007 - 2013',
        'Maret - Desember 2013',
        '2013 - 2019',
        'Maret - Desember 2019',
        '2019 - 2024',
        'Agustus 2023 - Desember 2024',
        '23 Januari 2025 - Sekarang',
    ];

    const kades = [
        'H.MURHIDI',
        'SUKAMI',
        'BOIN PARTA',
        'H.NUNUNG M.SAI',
        'ALIP MUCHTAR',
        'H.S.A.YUNUS',
        'RANIN WIJAYA',
        'KARNA WIJAYA',
        'AJA WIJAYA',
        'SAHRUDIN',
        'AJA WIJAYA',
        'SAHRUDIN',
        'AJA WIJAYA',
        'NURHAKIM',
        'AJA WIJAYA',
        'JUMIDO',
    ];
    return (
        <GuestLayout>
            <section className="mt-20 bg-white px-5 md:px-10">
                <div className="flex flex-col-reverse items-center gap-5 md:flex-row md:gap-10">
                    <div className="md:w-1/2">
                        <h3 className="text-2xl font-bold text-primary md:text-4xl">
                            Legenda Desa Tonjong
                        </h3>
                        <p className="text-justify md:text-sm">
                            Desa Tonjong terbentuk melalui proses kolonisasi
                            seperti desa-desa lain. Sebelum kemerdekaan, jumlah
                            penduduk diperkirakan sekitar 897 jiwa dengan
                            penyebaran yang tidak merata. Setelah kemerdekaan
                            hingga tahun 1970, penduduk meningkat menjadi
                            sekitar 1.750 jiwa, dengan mayoritas bekerja sebagai
                            petani dan buruh tani.
                        </p>
                        <p className="text-justify md:text-sm">
                            Secara administratif, sebelum 1976 Desa Tonjong
                            berada di Kecamatan Depok, Kabupaten Bogor. Tahun
                            1976–2004 masuk Kecamatan Bojonggede, dan sejak 2004
                            hingga sekarang berada di Kecamatan Tajurhalang,
                            Kabupaten Bogor.
                        </p>
                        <h3 className="mt-5 text-2xl font-bold text-primary md:text-4xl">
                            Asal Muasal Nama Tonjong
                        </h3>
                        <p className="text-justify md:text-sm">
                            Nama “Tonjong” memiliki dua kemungkinan asal-usul
                            menurut para sesepuh desa: <br />
                            Versi pertama: Berasal dari kata “Lonjong”, yang
                            berarti bulat memanjang menggambarkan bentuk wilayah
                            Desa Tonjong yang memang memanjang dan agak bulat.{' '}
                            <br /> Versi kedua: Berasal dari pohon Tanjung. Pada
                            masa penjajahan, banyak pohon Tanjung ditanam di
                            sepanjang jalan. Karena pengaruh dialek Belanda,
                            penyebutannya berubah menjadi “Tonjong”, dan
                            kemudian diikuti oleh penduduk setempat. <br />{' '}
                            Itulah dua versi utama yang sering dijadikan rujukan
                            mengenai asal-usul nama Tonjong.
                        </p>
                    </div>
                    <div className="w-1/2">
                        <img
                            src="/logo.svg"
                            alt=""
                            className="mx-auto w-[75%]"
                        />
                    </div>
                </div>
            </section>
            <section className=' px-5 md:px-10 '>
                <div className="mt-5 text-center md:text-left">
                    <h3 className="mt-5 text-2xl font-bold text-primary md:text-4xl">
                        Terbentuknya Desa Tonjong
                    </h3>
                    <p className="mt-5 text-justify">
                        Tanggal dan tahun terbentuknya Desa Tonjong sampai
                        dengan saat ini belum terungkat, tidak ada tokoh yang
                        tahu kapan terbentuknya Desa Tonjong, sedangkan sejarah
                        adanya Kepala Desa Tonjong baru dimulai pada tahun 1948.
                        Di bawah ini kami sajikan Pejabat Kepala Desa Tonjong
                        dari Tahun 1948 sampai dengan saat ini, yaitu :
                    </p>
                    <div className="relative mx-auto mt-5 max-w-3xl">
                        <div className="absolute top-0 bottom-0 left-1/2 w-1 -translate-x-1/2 bg-gray-300"></div>

                        {tahun.map((t, i) => (
                            <div key={i} className="mb-10 flex items-center">
                                <div
                                    className={`w-1/2 pr-6 text-right ${i % 2 === 0 ? '' : 'invisible'}`}
                                >
                                    <h4 className="font-semibold">
                                        {i % 2 === 0 ? kades[i] : ''}
                                    </h4>
                                    <p className="text-gray-600">
                                        {i % 2 === 0 ? t : ''}
                                    </p>
                                </div>

                                <div className="relative h-4 w-4 rounded-full border-2 border-gray-600 bg-primary"></div>

                                <div
                                    className={`w-1/2 pl-6 text-left ${i % 2 !== 0 ? '' : 'invisible'}`}
                                >
                                    <h4 className="font-semibold">
                                        {i % 2 !== 0 ? kades[i] : ''}
                                    </h4>
                                    <p className="text-gray-600">
                                        {i % 2 !== 0 ? t : ''}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
           
            {/* geografis desa */}
            <h3 className="mt-10 px-5 text-center text-2xl font-bold text-primary md:px-10 md:text-left md:text-4xl">
                Geografis Desa
            </h3>
            <section className="flex w-full flex-col items-center gap-2 md:flex-row md:px-10">
                <div className="rounded-xl p-2 accent-accent-foreground shadow md:w-1/2">
                    <img
                        src="/infografi/desa.png"
                        alt=""
                        className="mx-auto w-60 md:w-80"
                    />
                    <div className="flex justify-between md:text-2xl">
                        <p>Luas Desa: </p>
                        <p className="font-bold text-primary">
                            {Number(wilayah / 100).toFixed(2)} Ha
                        </p>
                    </div>
                    <div className="flex justify-between md:text-2xl">
                        <p>Kepadatan Penduduk: </p>
                        <p className="font-bold text-primary">
                            {Number(kepadatan / 100).toFixed(2)} Jiwa/Ha
                        </p>
                    </div>
                </div>
                <div className="p-5 md:w-1/2">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31714.142700860335!2d106.73265163923787!3d-6.487728442920383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c2ec9c9607c5%3A0xb7fe841942200e38!2sTonjong%2C%20Tajur%20Halang%2C%20Bogor%20Regency%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1759907404716!5m2!1sen!2sid"
                        className="w-full border-none md:h-[500px]"
                        loading="lazy"
                    ></iframe>
                </div>
            </section>
        </GuestLayout>
    );
};

export default ProfilDesa;
