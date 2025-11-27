import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { Head, useForm } from '@inertiajs/react';
import { Upload } from 'lucide-react';
import React from 'react';

interface Berita {
    id: number;
    judul_berita: string;
    penulis: string;
    isi_berita: string;
    foto: string | null;
    slug: string;
}

interface Props {
    berita: Berita;
}

const BeritaEdit = ({ berita }: Props) => {
    const { data, setData, post, processing, errors } = useForm({
        judul_berita: berita.judul_berita,
        penulis: berita.penulis,
        isi_berita: berita.isi_berita,
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
        post(`/berita/${berita.slug}?_method=PUT`, { forceFormData: true });
    };
    const breadcrumbs = [
        { title: 'Berita', href: '/admin/kelola-berita' },
        { title: 'Edit Berita', href: '/admin/berita/{berita}' },
    ];
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Edit Berita" />

            <div className="mx-auto w-1/2 rounded bg-white p-6 shadow">
                <h1 className="mb-4 text-xl font-bold">Edit Berita</h1>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium">
                            Judul Berita
                        </label>
                        <input
                            name="judul_berita"
                            type="text"
                            value={data.judul_berita}
                            onChange={handleChange}
                            className="w-full rounded border p-2"
                        />
                        {errors.judul_berita && (
                            <p className="text-sm text-red-500">
                                {errors.judul_berita}
                            </p>
                        )}
                    </div>

                    <div>
                        <label className="block text-sm font-medium">
                            Penulis
                        </label>
                        <input
                            name="penulis"
                            type="text"
                            value={data.penulis}
                            onChange={handleChange}
                            className="w-full rounded border p-2"
                        />
                        {errors.penulis && (
                            <p className="text-sm text-red-500">
                                {errors.penulis}
                            </p>
                        )}
                    </div>

                    <div>
                        <label className="block text-sm font-medium">
                            Isi Berita
                        </label>
                        <textarea
                            name="isi_berita"
                            value={data.isi_berita}
                            onChange={handleChange}
                            className="h-32 w-full rounded border p-2"
                        />
                        {errors.isi_berita && (
                            <p className="text-sm text-red-500">
                                {errors.isi_berita}
                            </p>
                        )}
                    </div>

                    {/* Foto lama */}
                    {berita.foto && (
                        <div>
                            <label className="block text-sm font-medium">
                                Foto Lama
                            </label>
                            <img
                                src={`/storage/${berita.foto}`}
                                alt={berita.judul_berita}
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
                            name="foto"
                            id="foto"
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

export default BeritaEdit;
