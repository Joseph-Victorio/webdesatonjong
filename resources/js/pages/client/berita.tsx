import GuestLayout from '@/layouts/guest-layout';
import { PageProps } from '@inertiajs/core';
import { Head, usePage } from '@inertiajs/react';
import { Eye, User } from 'lucide-react';

interface Berita {
    id: number;
    judul_berita: string;
    penulis: string;
    viewer: number;
    isi_berita: string;
    foto?: string;
    created_at: string;
}
interface PaginationLink {
    url: string | null;
    label: string;
    active: boolean;
}

interface PaginatedBerita {
    data: Berita[];
    links: PaginationLink[];
}

interface PagePropsWithBerita extends PageProps {
    beritas: PaginatedBerita;
    filters: { search?: string };
}
const berita = () => {
    const { beritas } = usePage<PagePropsWithBerita>().props;
    return (
        <GuestLayout>
            <Head title="Berita Desa" />
            <section className="min-h-screen p-10">
                <h1 className="mt-10 text-4xl font-bold text-primary">
                    Berita Desa
                </h1>
                <h2 className="text-2xl">
                    Menyajikan informasi terbaru tentang peristiwa dan berita
                    terkini dari Desa Tonjong
                </h2>
                <div className="mt-10 grid grid-cols-2 md:grid-cols-3">
                    {beritas.data ? (
                        beritas.data.map((item: Berita, index: number) => (
                            <div
                                key={item.id}
                                className="h-[550px] rounded-2xl shadow-lg md:w-[350px]"
                            >
                                <img
                                    src={item.foto}
                                    alt={item.judul_berita}
                                    className="h-1/2 w-full rounded-2xl object-cover object-center"
                                />
                                <div className="mt mt-1 p-5">
                                    <div>
                                        <p className="line-clamp-2 font-bold">
                                            {item.judul_berita}
                                        </p>
                                        <p className="text-[10px] text-gray-400 font-bold">
                                            {new Date(
                                                item.created_at,
                                            ).toLocaleDateString('id-ID', {
                                                weekday: 'long',
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric',
                                            })}
                                        </p>
                                        <p className="mt-1 line-clamp-3 text-justify">
                                            {item.isi_berita}
                                        </p>
                                    </div>
                                    <div className="mt-10 flex justify-between">
                                        <div className="text-sm">
                                            <div className="flex items-center gap-2">
                                                <User className="w-[20px]" />{' '}
                                                {item.penulis}
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Eye className="w-[20px]" />{' '}
                                                {item.viewer}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div>
                            <p>Tidak Ada Berita</p>
                        </div>
                    )}
                </div>
            </section>
        </GuestLayout>
    );
};

export default berita;
