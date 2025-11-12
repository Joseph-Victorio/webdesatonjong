import GuestLayout from '@/layouts/guest-layout';

interface PageProps {
    wilayah : number
    kepadatan : number

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
    const kalimat = [
        'Luas Desa:',
        'Jumlah Penduduk:',
    ]

    return (
        <GuestLayout>
            <section className="mt-17 bg-primary/20 px-10 py-10">
                <div className="rounded-xl bg-white p-5 text-center text-xl shadow">
                    <h3 className="text-center text-2xl font-bold text-primary md:text-4xl">
                        Visi
                    </h3>
                    <p>
                        Mewujudkan Desa Tonjong yang Maju, Mandiri, Berdaya
                        Saing, serta Sejahtera Berlandaskan Kebersamaan dan
                        Gotong Royong.
                    </p>
                </div>
                <div className="mt-5 rounded-xl bg-white p-5 text-xl shadow">
                    <h3 className="text-center text-2xl font-bold text-primary md:text-4xl">
                        Misi
                    </h3>
                    <ul className="px-5">
                        {misi.map((item, index) => (
                            <li key={index} className="list-decimal">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
            {/* geografis desa */}
            <h3 className='text-center md:text-left text-2xl md:text-4xl text-primary mt-10 font-bold px-5 md:px-10'>Geografis Desa</h3>
            <section className="flex items-center flex-col md:flex-row gap-2 w-full md:px-10">
               
                <div className='shadow rounded-xl p-2 md:w-1/2 accent-accent-foreground'>
                     <img src="/infografi/desa.png" alt="" className='w-60 md:w-80 mx-auto' />
                        <div className='flex justify-between md:text-2xl '>
                            <p>Luas Desa: </p>
                            <p className='font-bold text-primary'>{Number(wilayah/100).toFixed(2)} Ha</p>
                        </div>
                        <div className='flex justify-between md:text-2xl'>
                            <p>Kepadatan Penduduk: </p>
                            <p className='font-bold text-primary'>{Number(kepadatan/100).toFixed(2)} Jiwa/Ha</p>
                        </div>
                </div>
                <div className="md:w-1/2 p-5">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31714.142700860335!2d106.73265163923787!3d-6.487728442920383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c2ec9c9607c5%3A0xb7fe841942200e38!2sTonjong%2C%20Tajur%20Halang%2C%20Bogor%20Regency%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1759907404716!5m2!1sen!2sid"
                    className="w-full border-none md:h-[500px]"
                    loading="lazy"
                ></iframe></div>
            </section>
        </GuestLayout>
    );
};

export default ProfilDesa;
