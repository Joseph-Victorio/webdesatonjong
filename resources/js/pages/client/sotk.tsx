import CardAnggota from '@/components/CardAnggota';
import GuestLayout from '@/layouts/guest-layout';
import { Head } from '@inertiajs/react';

interface Sotk {
    id: number;
    nama: string;
    jabatan: string;
    foto: string;
}

interface PageProps {
    sotk: Sotk[];
}

const sotk = ({ sotk }: PageProps) => {
    return (
        <GuestLayout>
            <Head title="Struktur Anggota" />
            <div className="mt-20 p-5">
                <h2 className='text-5xl font-bold'>APARAT PEMERINTAH DESA</h2>
                <div className='grid grid-cols-5 gap-y-5'>
                    {sotk.map((item, index) => (
                        <CardAnggota
                            image={
                                item.foto == null
                                    ? '/thumbnail.png'
                                    : `storage/${item.foto}`
                            }
                            nama={item.nama}
                            jabatan={item.jabatan}
                            key={index}
                        />
                    ))}
                </div>
            </div>
        </GuestLayout>
    );
};

export default sotk;
