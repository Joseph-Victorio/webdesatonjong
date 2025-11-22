import AppLayout from '@/layouts/app-layout';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { Edit3, Trash2 } from 'lucide-react';
import toast from 'react-hot-toast';

interface Struktur {
    id: number;
    nama: string;
    jabatan: string;
    foto?: string;
}

interface PaginationLink {
    url: string | null;
    label: string;
    active: boolean;
}

interface PaginatedStruktur {
    data: Struktur[];
    links: PaginationLink[];
}

interface PageProps {
    strukturs: PaginatedStruktur;
    [key : string] : any
}

const StrukturIndex = () => {
    const { strukturs } = usePage<PageProps>().props;
    const { delete: destroy } = useForm();

    const handleDelete = (id: number) => {
        if (confirm('Yakin ingin menghapus struktur ini?')) {
            destroy(`/struktur/delete/${id}`,{
                onSuccess:()=> toast.success('Anggota Berhasil Dihapus!')
            });
        }
    };

    const breadcrumbs = [{ title: 'Struktur', href: 'admin/struktur' }];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Kelola Struktur" />
            <div className="p-6">
                <h1 className="mb-4 text-2xl font-bold">Daftar Struktur</h1>

                <div className="mb-5 flex items-center justify-between">
                    <a
                        href="/admin/tambah-struktur"
                        className="rounded border-2 border-primary bg-white px-5 py-2 font-medium transition duration-300 ease-in-out hover:bg-primary hover:text-white"
                    >
                        Tambah Struktur
                    </a>
                </div>

                <div className="overflow-x-auto rounded-lg bg-white shadow">
                    <table className="min-w-full border border-gray-200">
                        <thead className="bg-primary text-white">
                            <tr>
                                <th className="border px-4 py-2">Foto</th>
                                <th className="border px-4 py-2">Nama</th>
                                <th className="border px-4 py-2">Jabatan</th>
                                <th className="border px-4 py-2">Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {strukturs.data.length > 0 ? (
                                strukturs.data.map((item) => (
                                    <tr key={item.id} className="hover:bg-gray-50">
                                        <td className="border px-4 py-2 text-center">
                                            <img
                                                src={
                                                    item.foto
                                                        ? '/storage/' + item.foto
                                                        : '/thumbnail.png'
                                                }
                                                className="w-20 mx-auto"
                                            />
                                        </td>
                                        <td className="border px-4 py-2">{item.nama}</td>
                                        <td className="border px-4 py-2">{item.jabatan}</td>

                                        <td className="border px-4 py-2 text-center">
                                            <Link href={`/struktur/edit/${item.id}`}>
                                                <button className="mr-2 text-blue-600 hover:underline">
                                                    <Edit3 />
                                                </button>
                                            </Link>

                                            <button
                                                onClick={() => handleDelete(item.id)}
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
                                        colSpan={4}
                                        className="py-4 text-center text-gray-500"
                                    >
                                        Tidak ada data struktur.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* PAGINATION */}
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                    {strukturs.links.map((link, i) => (
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

export default StrukturIndex;
