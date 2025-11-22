import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { Head, useForm } from '@inertiajs/react';
import { Upload } from 'lucide-react';
import React from 'react';
import toast from 'react-hot-toast';

const Tambah = () => {
    const { data, setData, post, processing, errors } = useForm({
        nama: '',
        jabatan: '',
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

        post('/admin/tambah-struktur', {
            forceFormData: true,
            onSuccess: ()=> toast.success("Anggota Berhasil Disimpan!")
        });
        
    };

    const breadcrumbs = [
        { title: 'Struktur', href: '/admin/kelola-struktur' },
        { title: 'Tambah Struktur', href: '/admin/tambah-struktur' },
    ];
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Tambah Struktur" />
            <div className="mx-auto mt-5 md:w-1/2 rounded bg-white p-5 shadow">
                <form onSubmit={handleSubmit} className="space-y-4" autoComplete='off'>
                    <div>
                        <label className="block text-sm font-medium">
                            Nama
                        </label>
                        <input
                            type="text"
                            name="nama"
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
                            Jabatan
                        </label>
                        <input
                            type="text"
                            name="jabatan"
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

export default Tambah;
