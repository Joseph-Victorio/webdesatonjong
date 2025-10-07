import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { Head, useForm } from '@inertiajs/react';
import { Upload } from 'lucide-react';
import React from 'react';

const BeritaTambah = () => {
    const { data, setData, post, processing, errors } = useForm({
        judul_berita: '',
        penulis: '',
        isi_berita: '',
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

        post('/admin/tambah-berita', {
            forceFormData: true,
        });
    };

    const breadcrumbs = [
        { title: 'Berita', href: '/admin/kelola-berita' },
        { title: 'Tambah Berita', href: '/admin/tambah-berita' },
    ];
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Tambah Berita" />
            <div className="mx-auto mt-5 w-1/2 rounded bg-white p-5 shadow">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium">
                            Judul Berita
                        </label>
                        <input
                            type="text"
                            name="judul_berita"
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
                            type="text"
                            name="penulis"
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
                            className="h-[100px] w-full rounded border p-2"
                        />
                        {errors.isi_berita && (
                            <p className="text-sm text-red-500">
                                {errors.isi_berita}
                            </p>
                        )}
                    </div>
                    <div>
                        <label
                            className=" flex cursor-pointer items-center gap-2 rounded border p-2 text-sm font-medium"
                            htmlFor="foto"
                        >
                            <div className="flex gap-2 items-center w-[150px] mx-auto">
                                <p className="text-center">Upload Gambar</p>{' '}
                                <Upload />
                            </div>
                        </label>
                        <input
                            type="file"
                            name="foto"
                            id="foto"
                            hidden
                            onChange={handleChange}
                            className="h-[100px] w-full rounded border p-2"
                        />
                        {errors.foto && (
                            <p className="text-sm text-red-500">
                                {errors.foto}
                            </p>
                        )}
                    </div>
                    
                    <div className='flex justify-end cursor-pointer'>
                      <Button variant={"default"} disabled={processing}>{processing ? 'Menyimpan' : 'Simpan'}</Button>
                    </div>
                </form>
            </div>
        </AppLayout>
    );
};

export default BeritaTambah;
