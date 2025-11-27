import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { PageProps } from '@inertiajs/core';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { Edit3, Trash2 } from 'lucide-react';
import toast from 'react-hot-toast';

interface Berita {
    id: number;
    judul_berita: string;
    penulis: string;
    viewer: number;
    isi_berita: string;
    foto?: string;
    slug: string
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

    const handleDelete = (slug: string) => {
        if (confirm('Yakin ingin menghapus berita ini?')) {
            destroy(`/berita/delete/${slug}`, {
                onSuccess: ()=> toast.success("Berita Berhasil dihapus!")
            });
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

                <div className="mb-5 flex flex-col gap-4 items-start md:flex-row md:items-center md:justify-between">
                    <a
                        href="/admin/tambah-berita"
                        className="rounded bg-white hover:bg-primary border-2 duration-300 ease-in-out transition font-medium border-primary px-5 py-2 hover:text-white"
                    >
                        Tambah Berita
                    </a>

                    <form
                        onSubmit={handleSearch}
                        className="flex gap-3 items-center w-full md:w-auto"
                        autoComplete="off"
                    >
                        <input
                            type="text"
                            name="search"
                            placeholder="Cari Berita..."
                            value={data.search}
                            onChange={(e) => setData('search', e.target.value)}
                            className="p-2 border rounded w-full md:w-60"
                        />
                        <Button type="submit">Cari</Button>
                    </form>
                </div>

                <div className="rounded-lg bg-white shadow overflow-x-auto md:overflow-visible">
                    <table className="min-w-full border border-gray-200 hidden md:table">
                        <thead className="bg-primary text-white">
                            <tr>
                                <th className="border px-4 py-2">Foto</th>
                                <th className="border px-4 py-2">Judul</th>
                                <th className="border px-4 py-2">Penulis</th>
                                <th className="border px-4 py-2">Viewer</th>
                                <th className="border px-4 py-2">Aksi</th>
                            </tr>
                        </thead>

                        <tbody>
                            {beritas.data.length > 0 ? (
                                beritas.data.map((item) => (
                                    <tr key={item.id} className="hover:bg-gray-50">
                                        <td className="border px-4 py-2 text-center">
                                            <img
                                                src={'/storage/' + item.foto}
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
                                            <a href={`/admin/berita/${item.slug}`}>
                                                <button className="mr-2 text-blue-600 hover:underline">
                                                    <Edit3 />
                                                </button>
                                            </a>

                                            <button
                                                onClick={() => handleDelete(item.slug)}
                                                className="text-red-600 hover:underline"
                                            >
                                                <Trash2 />
                                            </button>
                                        </td>
                                    </tr>
                                ))
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

            
                    <div className="md:hidden p-3 space-y-4">
                        {beritas.data.length > 0 ? (
                            beritas.data.map((item) => (
                                <div
                                    key={item.id}
                                    className="border rounded-lg p-4 shadow-sm"
                                >
                                    <div className="flex gap-3">
                                        <img
                                            src={'/storage/' + item.foto}
                                            className="w-24 h-24 object-cover rounded"
                                        />

                                        <div>
                                            <p className="font-bold text-lg">
                                                {item.judul_berita}
                                            </p>
                                            <p className="text-gray-600 text-sm">
                                                {item.penulis}
                                            </p>
                                            <p className="text-gray-500 text-xs">
                                                Viewer: {item.viewer}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-6 mt-4">
                                        <Link href={`/admin/berita/${item.slug}`}>
                                            <button className="text-blue-600 flex items-center gap-1">
                                                <Edit3 size={16} /> Edit
                                            </button>
                                        </Link>

                                        <button
                                            onClick={() => handleDelete(item.slug)}
                                            className="text-red-600 flex items-center gap-1"
                                        >
                                            <Trash2 size={16} /> Hapus
                                        </button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-center text-gray-500 py-4">
                                Tidak ada data berita.
                            </p>
                        )}
                    </div>
                </div>

       
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                    {beritas.links.map((link, i) => (
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
