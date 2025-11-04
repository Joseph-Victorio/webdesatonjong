import ShareButtons from '@/components/share-button';
import GuestLayout from '@/layouts/guest-layout';
import { Head, Link } from '@inertiajs/react';
import { Clock, Eye, User } from 'lucide-react';

interface Berita {
    id: number;
    judul_berita: string;
    penulis: string;
    isi_berita: string;
    foto?: string | null;
    viewer?: number;
    created_at: string;
    slug: string;
}
interface PageProps {
    berita: Berita;
    terkini: Berita[];
}

export default function DetailBerita({ berita, terkini }: PageProps) {
    return (
        <GuestLayout>
            <Head title={berita.judul_berita} />

            <div className="mt-20 flex flex-col gap-5 px-5 py-10 md:flex-row md:px-15">
                <div className="rounded-xl p-5 shadow-xl shadow-gray-400 md:w-2/3">
                    <h1 className="mb-4 text-3xl font-bold">
                        {berita.judul_berita}
                    </h1>
                    {/* desktop */}
                    <div className="mb-2 hidden items-center gap-2 text-sm text-gray-500 md:flex">
                        <div className="flex items-center gap-1">
                            <User size={20} />
                            <p>
                                Ditulis oleh{' '}
                                <span className="text-black">
                                    {berita.penulis}
                                </span>
                            </p>
                        </div>
                        <div className="flex items-center gap-1">
                            <Eye size={20} />
                            <p>
                                Dilihat{' '}
                                <span className="text-black">
                                    {berita.viewer}
                                </span>{' '}
                                kali
                            </p>
                        </div>
                        <div className="flex items-center gap-1">
                            <Clock size={20} />
                            <p>
                                {new Date(berita.created_at).toLocaleDateString(
                                    'id-ID',
                                    {
                                        weekday: 'long',
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric',
                                    },
                                )}
                            </p>
                        </div>
                    </div>

                    {berita.foto && (
                        <img
                            src={berita.foto}
                            className="mb-6 max-h-[400px] w-full rounded-lg object-cover object-center"
                        />
                    )}
                    {/* mobile */}
                    <div className="mb-2 flex flex-col gap-2 text-sm text-gray-500 md:hidden">
                        <div className="flex items-center gap-2">
                            <User size={20} />
                            <p>
                                Ditulis oleh{' '}
                                <span className="text-black">
                                    {berita.penulis}
                                </span>
                            </p>
                        </div>
                        <div className="flex items-center gap-2">
                            <Eye size={20} />
                            <p>
                                Dilihat{' '}
                                <span className="text-black">
                                    {berita.viewer}
                                </span>{' '}
                                kali
                            </p>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock size={20} />
                            <p>
                                {new Date(berita.created_at).toLocaleDateString(
                                    'id-ID',
                                    {
                                        weekday: 'long',
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric',
                                    },
                                )}
                            </p>
                        </div>
                    </div>

                    <div
                        className="prose max-w-none whitespace-pre-line"
                        dangerouslySetInnerHTML={{ __html: berita.isi_berita }}
                    />
                    <br />
                    <p>Bagikan ke:</p>
                    <ShareButtons title={berita.judul_berita} />
                </div>
                <div className="h-auto w-1/3 max-w-md rounded-xl p-5 shadow-xl">
                    <h2 className="font-bold">Berita Terkini</h2>
                    {terkini && terkini.length > 0 ? (
                        terkini.map((item) => (
                            <Link href={`/berita/${item.slug}`}>
                                <div
                                    className="mt-2 flex items-center gap-1 shadow-md rounded-2xl p-2"
                                    key={item.id}
                                >
                                    <img
                                        src={'/storage/' + item.foto}
                                        alt={item.judul_berita}
                                        className="w-30 rounded-xl"
                                    />
                                    <div>
                                        <p className="line-clamp-2 font-bold">
                                            {item.judul_berita}
                                        </p>
                                        <div className="flex items-center gap-2 text-gray-400 text-sm">
                                            <Clock size={15} />
                                            <p>
                                                {new Date(
                                                    item.created_at,
                                                ).toLocaleDateString('id-ID', {
                                                    weekday: 'long',
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric',
                                                })}
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-400 text-sm">
                                            <Eye size={15} />
                                            <p>Dilihat {item.viewer} kali</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))
                    ) : (
                        <div>
                            <p className="text-black">
                                Belum ada berita terkini
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </GuestLayout>
    );
}
