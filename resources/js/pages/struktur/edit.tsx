import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { Head, useForm } from '@inertiajs/react';
import { Upload } from 'lucide-react';
import React from 'react';
import toast from 'react-hot-toast';

interface Struktur {
    id: number;
    nama: string;
    jabatan: string;
    foto: string | null;
}

interface Props {
    struktur: Struktur;
}

const StrukturEdit = ({ struktur }: Props) => {
    const { data, setData, post, processing, errors } = useForm({
        nama: struktur.nama,
        jabatan: struktur.jabatan,
        foto: null as File | null,
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { name, value, files } = e.target as HTMLInputElement;
        if (files) {
            setData(name as keyof typeof data, files[0]);
        } else {
            setData(name as keyof typeof data, value);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(`/struktur/${struktur.id}?_method=PUT`, { forceFormData: true, onSuccess: ()=> toast.success('Berhasil Disimpan!') });
    };
    const breadcrumbs = [
        { title: 'struktur', href: '/admin/kelola-struktur' },
        { title: 'Edit struktur', href: '/admin/struktur/{struktur}' },
    ];
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Edit struktur" />

            <div className="mx-auto w-1/2 rounded bg-white p-6 shadow">
                <h1 className="mb-4 text-xl font-bold">Edit struktur</h1>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium">
                            Judul struktur
                        </label>
                        <input
                            name="nama"
                            type="text"
                            value={data.nama}
                            onChange={handleChange}
                            className="w-full rounded border p-2"
                        />
                        {errors.nama && (
                            <p className="text-sm text-red-500">
                                {errors.nama}
                            </p>
                        )}
                    </div>

                    <div>
                        <label className="block text-sm font-medium">
                            jabatan
                        </label>
                        <input
                            name="jabatan"
                            type="text"
                            value={data.jabatan}
                            onChange={handleChange}
                            className="w-full rounded border p-2"
                        />
                        {errors.jabatan && (
                            <p className="text-sm text-red-500">
                                {errors.jabatan}
                            </p>
                        )}
                    </div>


                    {/* Foto lama */}
                    {struktur.foto && (
                        <div>
                            <label className="block text-sm font-medium">
                                Foto Lama
                            </label>
                            <img
                                src={`/storage/${struktur.foto}`}
                                alt={struktur.nama}
                                className="mb-2 h-32 w-32 rounded object-cover"
                            />
                        </div>
                    )}

                    <div>
                        <label
                            className="flex cursor-pointer items-center gap-2 rounded border p-2 text-sm font-medium"
                            htmlFor="foto"
                        >
                            <div className="mx-auto flex w-[150px] items-center gap-2">
                                <p className="text-center">Upload Gambar</p>{' '}
                                <Upload />
                            </div>
                        </label>
                        <input
                        id='foto'
                            name="foto"
                            hidden
                            type="file"
                            onChange={handleChange}
                            className="w-full rounded border p-2"
                        />
                    </div>

                    <div className="flex justify-end">
                        <Button
                            variant={'default'}
                            type="submit"
                            disabled={processing}
                            className="rounded px-4 py-2"
                        >
                            {processing ? 'Menyimpan...' : 'Simpan'}
                        </Button>
                    </div>
                </form>
            </div>
        </AppLayout>
    );
};

export default StrukturEdit;
