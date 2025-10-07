import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { PageProps } from '@inertiajs/core';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { Edit3, Trash2 } from 'lucide-react';

interface Berita {
    id: number;
    judul_berita: string;
    penulis: string;
    viewer: number;
    isi_berita: string;
    foto?: string;
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

const BeritaIndex = () => {
    const { beritas, filters } = usePage<PagePropsWithBerita>().props;
    const { delete: destroy } = useForm();
    const { get, data, setData } = useForm({ search: filters.search || '' });

    const handleDelete = (id: number) => {
        if (confirm('Yakin ingin menghapus berita ini?')) {
            destroy(`/admin/berita/${id}`);
        }
    };

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        get('/admin/kelola-berita', { preserveState: true });
    };

    const breadcrumbs = [{ title: 'Berita', href: '/admin/berita' }];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Kelola Berita" />

            <div className="p-6">
                <h1 className="mb-4 text-2xl font-bold">Daftar Berita</h1>
                <div className="mb-5 flex justify-between items-center">
                    <a
                        href="/admin/tambah-berita"
                        className="rounded bg-white hover:bg-primary border-2 duration-300 ease-in-out transition font-medium border-primary px-5 py-2 hover:text-white"
                    >
                        Tambah Berita
                    </a>
                    <form onSubmit={handleSearch} className='flex gap-5 items-center ' autoComplete='off'>
                      <input 
                        type="text"
                        name='search'
                        placeholder='Cari Berita...'
                        value={data.search}
                        onChange={e=>setData('search', e.target.value)}
                        className='p-1 border-2 border-b' />
                        <Button type='submit' variant={'default'}>
                          Cari
                        </Button>
                    </form>
                </div>

                <div className="overflow-x-auto rounded-lg bg-white shadow">
                    <table className="min-w-full border border-gray-200">
                        <thead className="bg-primary text-white  ">
                            <tr>
                                <th className="border px-4 py-2">foto</th>
                                <th className="border px-4 py-2">Judul</th>
                                <th className="border px-4 py-2">Penulis</th>
                                <th className="border px-4 py-2">Viewer</th>
                                <th className="border px-4 py-2">Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {beritas.data.length > 0 ? (
                                beritas.data.map(
                                    (item: Berita, index: number) => (
                                        <tr
                                            key={item.id}
                                            className="hover:bg-gray-50"
                                        >
                                            <td className="border px-4 py-2 text-center">
                                                <img
                                                    src={
                                                        '/storage/' + item.foto
                                                    }
                                                    alt=""
                                                    className="w-20"
                                                />
                                            </td>
                                            <td className="border px-4 py-2">
                                                {item.judul_berita}
                                            </td>
                                            <td className="border px-4 py-2">
                                                {item.penulis}
                                            </td>
                                            <td className="border px-4 py-2 text-center">
                                                {item.viewer}
                                            </td>
                                            <td className="border px-4 py-2 text-center">
                                                <Link
                                                    href={`/berita/edit/${item.id}`}
                                                >
                                                    <button className="mr-2 cursor-pointer text-blue-600 hover:underline">
                                                        <Edit3 />
                                                    </button>
                                                </Link>

                                                <button
                                                    onClick={() =>
                                                        handleDelete(item.id)
                                                    }
                                                    className="cursor-pointer text-red-600 hover:underline"
                                                >
                                                    <Trash2 />
                                                </button>
                                            </td>
                                        </tr>
                                    ),
                                )
                            ) : (
                                <tr>
                                    <td
                                        colSpan={5}
                                        className="py-4 text-center text-gray-500"
                                    >
                                        Tidak ada data berita.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="mt-4 flex justify-center space-x-1">
                    {beritas.links.map((link: PaginationLink, i: number) => (
                        <Link
                            key={i}
                            href={link.url || '#'}
                            className={`rounded border px-3 py-1 ${
                                link.active
                                    ? 'border-primary bg-primary text-white'
                                    : 'bg-white text-gray-700 hover:bg-gray-100'
                            } ${!link.url ? 'cursor-not-allowed opacity-50' : ''}`}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                        />
                    ))}
                </div>
            </div>
        </AppLayout>
    );
};

export default BeritaIndex;
