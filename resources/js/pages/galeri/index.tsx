import AppLayout from '@/layouts/app-layout';
import { PageProps } from '@inertiajs/core';
import { Head, useForm, usePage, Link } from '@inertiajs/react';
import { Trash2, Edit3 } from 'lucide-react';

interface Galeri {
    id: number;
    foto?: string;
}

interface PaginationLink {
    url: string | null;
    label: string;
    active: boolean;
}

interface PaginatedGaleri {
    data: Galeri[];
    links: PaginationLink[];
}

interface PagePropsWithGaleri extends PageProps {
    galeris: PaginatedGaleri;
}

const index = () => {
    const { galeris } = usePage<PagePropsWithGaleri>().props;
    const { delete: destroy } = useForm();
    const handleDelete = (id: number) => {
        if (confirm('Apakah anda yakin mau menghapus foto ini?')) {
            destroy(`/galeri/${id}`);
        }
    };

    const breadcrumbs = [{ title: 'Galeri', href: '/admin/kelola-galeri' }];
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Kelola Galeri" />
            <div className="p-6">
                <div className="mb-4 flex justify-between">
                    <h1 className="text-2xl font-bold">Galeri</h1>
                    <Link
                        href="/admin/tambah-galeri"
                        className="rounded bg-primary px-4 py-2 text-white hover:bg-primary/80"
                    >
                        Tambah Foto
                    </Link>
                </div>

                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                    {galeris.data.length > 0 ? (
                        galeris.data.map((item) => (
                            <div
                                key={item.id}
                                className="relative rounded border shadow"
                            >
                                <img
                                    src={`/storage/${item.foto}`}
                                    alt=""
                                    className="h-40 w-full rounded-t object-cover"
                                />
                                <div className="flex justify-center gap-2 p-2">
                                    <Link
                                        href={`/admin/galeri-edit/${item.id}`}
                                        className="text-blue-600 hover:text-blue-800"
                                    >
                                        <Edit3 />
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(item.id)}
                                        className="text-red-600 hover:text-red-800"
                                    >
                                        <Trash2 />
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="col-span-full text-center text-gray-500">
                            Belum ada foto.
                        </p>
                    )}
                </div>

                {/* Pagination */}
                <div className="mt-6 flex justify-center space-x-1">
                    {galeris.links.map((link, i) => (
                        <Link
                            key={i}
                            href={link.url || '#'}
                            className={`rounded border px-3 py-1 ${
                                link.active
                                    ? 'bg-primary text-white'
                                    : 'text-gray-700 hover:bg-gray-100'
                            } ${!link.url ? 'cursor-not-allowed opacity-50' : ''}`}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                        />
                    ))}
                </div>
            </div>
        </AppLayout>
    );
};

export default index;
