import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { Head, useForm } from '@inertiajs/react';
import { Upload } from 'lucide-react';
import React from 'react';
import toast from 'react-hot-toast';

const hero = () => {
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        subtitle: '',
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

        post('/admin/tambah-hero', {
            forceFormData: true, onSuccess:()=>toast.success("Hero Berhasil Disimpan!")
        });
    };

    const breadcrumbs = [
        { title: 'Dashboard', href: '/dashboard' },
        { title: 'Tambah Hero', href: '' },
    ];
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Tambah Hero" />
            <div className="mx-auto mt-5 w-full md:w-1/2 rounded bg-white p-5 shadow">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium">
                            Judul Hero
                        </label>
                        <input
                            type="text"
                            name="title"
                            value={data.title}
                            onChange={handleChange}
                            className="w-full rounded border p-2"
                        />
                        {errors.title && (
                            <p className="text-sm text-red-500">
                                {errors.title}
                            </p>
                        )}
                    </div>
                    <div>
                        <label className="block text-sm font-medium">
                            subtitle
                        </label>
                        <textarea
                            name="subtitle"
                            value={data.subtitle}
                            onChange={handleChange}
                            className="w-full rounded border p-2"
                        />
                        {errors.subtitle && (
                            <p className="text-sm text-red-500">
                                {errors.subtitle}
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

export default hero;
