import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { Head, useForm, router } from '@inertiajs/react';
import { Upload } from 'lucide-react';
import React from 'react';
import toast from 'react-hot-toast';

interface Hero {
    id: number;
    title: string;
    subtitle: string;
    foto: string | null;
}

interface Props {
    hero: Hero;
}

const HeroEdit = ({ hero }: Props) => {
    const { data, setData, post, processing, errors } = useForm({
        title: hero.title,
        subtitle: hero.subtitle,
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
        post(`/admin/update/${hero.id}?_method=PUT`, { forceFormData: true, onSuccess:()=>toast.success("Hero Berhasil Disimpan!")});
    };
    const breadcrumbs = [
        { title: 'Dashboard', href: '/dashboard' },
        { title: 'Edit hero', href: '/admin/hero/{hero}' },
    ];
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Edit hero" />

            <div className="mx-auto w-full md:w-1/2 rounded bg-white p-6 shadow">
                <h1 className="mb-4 text-xl font-bold">Edit hero</h1>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium">
                            Judul hero
                        </label>
                        <input
                            name="title"
                            type="text"
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
                        <input
                            name="subtitle"
                            type="text"
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

                    {/* Foto lama */}
                    {hero.foto && (
                        <div>
                            <label className="block text-sm font-medium">
                                Foto Lama
                            </label>
                            <img
                                src={`/storage/${hero.foto}`}
                                alt={hero.title}
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
                            id="foto"
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

export default HeroEdit;
