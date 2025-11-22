import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { PageProps } from '@inertiajs/core';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { Edit3, Trash2 } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '',
    },
];
interface Hero {
    id: number;
    title: string;
    subtitle: string;

    foto?: string;
}

interface PaginationLink {
    url: string | null;
    label: string;
    active: boolean;
}

interface PaginatedHero {
    data: Hero[];
    links: PaginationLink[];
}

interface PagePropsWithHero extends PageProps {
    heros: PaginatedHero;
    views: number;
    berita: number;
    totalPenduduk: number;
}

export default function Dashboard() {
    const { heros, views, berita, totalPenduduk } =
        usePage<PagePropsWithHero>().props;
    const { delete: destroy } = useForm();
    const { get, data, setData } = useForm();

    const handleDelete = (id: number) => {
        if (confirm('Yakin ingin menghapus Hero ini?')) {
            destroy(`/admin/hero/${id}`);
        }
    };
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="grid auto-rows-min gap-6 md:grid-cols-3">
                    {/* total view */}
                    <div className="relative overflow-hidden rounded-xl border bg-gradient-to-br from-emerald-500 to-emerald-700 text-white shadow-lg transition-all hover:scale-[1.02]">
                        <div className="space-y-3 p-6">
                            <p className="text-xl font-semibold">
                                Total Views Berita
                            </p>
                            <p className="text-4xl font-bold">{views}</p>
                        </div>
                    </div>

                    {/* total berita */}
                    <div className="relative overflow-hidden rounded-xl border bg-gradient-to-br from-teal-500 to-teal-700 text-white shadow-lg transition-all hover:scale-[1.02]">
                        <div className="space-y-3 p-6">
                            <p className="text-xl font-semibold">
                                Total Berita
                            </p>
                            <p className="text-4xl font-bold">{berita}</p>
                        </div>
                    </div>

                    {/* total penduudk */}
                    <div className="relative overflow-hidden rounded-xl border bg-gradient-to-br from-lime-500 to-lime-600 text-white shadow-lg transition-all hover:scale-[1.02]">
                        <div className="space-y-3 p-6">
                            <p className="text-xl font-semibold">
                                Total Penduduk
                            </p>
                            <p className="text-4xl font-bold">
                                {totalPenduduk}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 p-5 md:min-h-min dark:border-sidebar-border">
                    <h1 className="mb-4 text-2xl font-bold">Daftar Hero</h1>

                    <div className="mb-5 flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
                        <a
                            href="/admin/add-hero"
                            className="rounded border-2 border-primary bg-white px-5 py-2 font-medium transition duration-300 ease-in-out hover:bg-primary hover:text-white"
                        >
                            Tambah Hero
                        </a>
                    </div>

                    <div className="overflow-x-auto rounded-lg bg-white shadow md:overflow-visible">
                        <table className="hidden min-w-full border border-gray-200 md:table">
                            <thead className="bg-primary text-white">
                                <tr>
                                    <th className="border px-4 py-2">Foto</th>
                                    <th className="border px-4 py-2">Judul</th>
                                    <th className="border px-4 py-2">
                                        Subtitle
                                    </th>
                                    <th className="border px-4 py-2">Aksi</th>
                                </tr>
                            </thead>

                            <tbody>
                                {heros.data.length > 0 ? (
                                    heros.data.map((item) => (
                                        <tr
                                            key={item.id}
                                            className="hover:bg-gray-50"
                                        >
                                            <td className="border px-4 py-2 text-center">
                                                <img
                                                    src={
                                                        '/storage/' + item.foto
                                                    }
                                                    className="w-20"
                                                />
                                            </td>
                                            <td className="border px-4 py-2">
                                                {item.title}
                                            </td>
                                            <td className="border px-4 py-2">
                                                {item.subtitle}
                                            </td>
                                            <td className="border px-4 py-2 text-center">
                                                <Link
                                                    href={`/admin/edit/${item.id}`}
                                                >
                                                    <button className="mr-2 text-blue-600 hover:underline">
                                                        <Edit3 />
                                                    </button>
                                                </Link>

                                                <button
                                                    onClick={() =>
                                                        handleDelete(item.id)
                                                    }
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
                                            Tidak ada data Hero.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>

                        <div className="space-y-4 p-3 md:hidden">
                            {heros.data.length > 0 ? (
                                heros.data.map((item) => (
                                    <div
                                        key={item.id}
                                        className="rounded-lg border p-4 shadow-sm"
                                    >
                                        <div className="flex gap-3">
                                            <img
                                                src={'/storage/' + item.foto}
                                                className="h-24 w-24 rounded object-cover"
                                            />

                                            <div>
                                                <p className="text-lg font-bold">
                                                    {item.title}
                                                </p>
                                                <p className="text-sm text-gray-600">
                                                    {item.subtitle}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="mt-4 flex gap-6">
                                            <Link href={`/admin/${item.id}`}>
                                                <button className="flex items-center gap-1 text-blue-600">
                                                    <Edit3 size={16} /> Edit
                                                </button>
                                            </Link>

                                            <button
                                                onClick={() =>
                                                    handleDelete(item.id)
                                                }
                                                className="flex items-center gap-1 text-red-600"
                                            >
                                                <Trash2 size={16} /> Hapus
                                            </button>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p className="py-4 text-center text-gray-500">
                                    Tidak ada data Hero.
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="mt-4 flex flex-wrap justify-center gap-2">
                        {heros.links.map((link, i) => (
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
            </div>
        </AppLayout>
    );
}
