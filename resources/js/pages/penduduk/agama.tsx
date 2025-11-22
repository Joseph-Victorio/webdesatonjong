import AppLayout from '@/layouts/app-layout';
import { Head, useForm } from '@inertiajs/react';
import { Check, Edit3, X } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
interface Agama {
    id: number;
    nama: string;
    jumlah: number;
}

interface PageProps {
    agama: Agama[];
}

const Agama = ({ agama }: PageProps) => {
    const breadcrumbs = [
        { title: 'Kelola Penduduk', href: '/admin/kelola-penduduk' },
        { title: 'Kelola Penduduk Berdasarkan Agama', href: '' },
    ];
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
        put(`/agama/update/${id}`, {
            onSuccess: () => {
                (setEditingId(null), toast.success('Berhasil Disimpan!'));
            },
        });
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Kelola Penduduk Berdasarkan Status" />
            <div className="p-6">
                <h1 className="mb-4 text-2xl font-bold">
                    Data Status Pernikahan
                </h1>

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
                            {agama.map((item) => (
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

export default Agama;
