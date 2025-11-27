import AppLayout from '@/layouts/app-layout';
import { Head, useForm } from '@inertiajs/react';
import { Check, Edit3, X } from 'lucide-react';
import { useState } from 'react';
import toast from 'react-hot-toast';

interface Infografis {
    id: number;
    nama: string;
    jumlah: number;
}

interface Laki {
    id: number;
}


interface PageProps {
    infografis: Infografis[];
    laki : Laki
}

const PendudukIndex = ({ infografis, laki }: PageProps) => {
    const breadcrumbs = [{ title: 'Kelola Penduduk', href: '/admin/kelola-penduduk' }];
    const [editingId, setEditingId] = useState<number | null>(null);
    
    const { data, setData, put, processing } = useForm({
        jumlah: 0,
    });

    const startEdit = (id: number, jumlahAwal: number) => {
        setEditingId(id);
        setData('jumlah', jumlahAwal);
    };

    const cancelEdit = () => {
        setEditingId(null);
    };

    const saveEdit = (id: number) => {
        put(`/infografis/update/${id}`, {
            onSuccess: () => {
                [setEditingId(null), toast.success("Berhasil update data penduduk!")]
            }
        });
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Kelola Penduduk" />
            <div className="p-6">
                <h1 className="mb-4 text-2xl font-bold">Data Penduduk</h1>

                <div className="mb-5 grid grid-cols-2 md:flex gap-2 text-sm text-center">
                    <a
                        href={`/admin/umur/${laki.id}`}
                        className="cursor-pointer rounded bg-primary px-6 py-2 font-bold text-white duration-300 ease-in-out hover:bg-primary/70"
                    >
                        Berdasarkan Kelompok Umur
                    </a>
                    <a
                        href={`/admin/pendidikan`}
                        className="cursor-pointer rounded bg-primary px-6 py-2 font-bold text-white duration-300 ease-in-out hover:bg-primary/70"
                    >
                        Berdasarkan Pendidikan
                    </a>
                    <a
                        href="/admin/status-nikah"
                        className="cursor-pointer rounded bg-primary px-6 py-2 font-bold text-white duration-300 ease-in-out hover:bg-primary/70"
                    >
                        Berdasarkan Status Pernikahan
                    </a>
                    <a
                        href="/admin/agama"
                        className="cursor-pointer rounded bg-primary px-6 py-2 font-bold text-white duration-300 ease-in-out hover:bg-primary/70"
                    >
                        Berdasarkan Agama
                    </a>
                </div>

                <div className="overflow-x-auto rounded-lg bg-white shadow">
                    <table className="min-w-full border border-gray-200">
                        <thead className="bg-primary text-white">
                            <tr>
                                <th className="border px-4 py-2">Deskripsi</th>
                                <th className="border px-4 py-2">Jumlah</th>
                                <th className="border px-4 py-2">Aksi</th>
                            </tr>
                        </thead>

                        <tbody>
                            {infografis.map((item) => (
                                <tr key={item.id} className="hover:bg-gray-50">
                                    <td className="border px-4 py-2">
                                        {item.nama}
                                    </td>

                                    {/* Kolom Jumlah */}
                                    <td className="border px-4 py-2 text-center">
                                        {editingId === item.id ? (
                                            <input
                                                type="number"
                                                value={data.jumlah}
                                                onChange={(e) =>
                                                    setData(
                                                        'jumlah',
                                                        Number(e.target.value),
                                                    )
                                                }
                                                className="w-24 rounded border px-2 py-1"
                                            />
                                        ) : (
                                            item.jumlah
                                        )}
                                    </td>

                                    {/* Aksi */}
                                    <td className="border px-4 py-2 text-center">
                                        {editingId === item.id ? (
                                            <div className="flex justify-center gap-2">
                                                <button
                                                    className="text-green-600"
                                                    disabled={processing}
                                                    onClick={() =>
                                                        saveEdit(item.id)
                                                    }
                                                >
                                                    <Check />
                                                </button>

                                                <button
                                                    className="text-red-600"
                                                    onClick={cancelEdit}
                                                >
                                                    <X />
                                                </button>
                                            </div>
                                        ) : (
                                            <button
                                                className="cursor-pointer text-blue-600"
                                                onClick={() =>
                                                    startEdit(
                                                        item.id,
                                                        item.jumlah,
                                                    )
                                                }
                                            >
                                                <Edit3 />
                                            </button>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </AppLayout>
    );
};

export default PendudukIndex;
