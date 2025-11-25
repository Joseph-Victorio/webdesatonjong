import AppLayout from '@/layouts/app-layout';
import { Head, useForm } from '@inertiajs/react';
import { Upload } from 'lucide-react';
import toast from 'react-hot-toast';

interface Galeri {
    id: number;
    foto: string;
}

interface Props {
    galeri: Galeri;
}

const edit = ({ galeri }: Props) => {
    const { data, setData, post, processing, errors } = useForm({
        foto: null as File | null,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setData('foto', e.target.files[0]);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(`/galeri/${galeri.id}?_method=PUT`, {
            forceFormData: true,
            onSuccess: () => toast.success('Berhasil Menyimpan Foto Baru!'),
        });
    };
    const breadcrumbs = [
        { title: 'Galeri', href: '/admin/kelola-galeri' },
        { title: 'Edit Foto', href: '/admin/galeri-edit' },
    ];
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Edit Foto Galeri" />
            <div className="mx-auto w-full md:max-w-lg rounded bg-white p-6 shadow">
                <h1 className="mb-4 text-xl font-bold">Edit Foto Galeri</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="mb-2 block text-sm font-medium">
                            Foto Lama
                        </label>
                        <img
                            src={`/storage/${galeri.foto}`}
                            alt=""
                            className="mb-4 h-48 w-48 rounded object-cover"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium">
                            Ganti Foto
                        </label>
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
                    </div>

                    <button
                        type="submit"
                        disabled={processing}
                        className="cursor-pointer rounded bg-primary px-4 py-2 text-white transition-colors duration-300 ease-in-out hover:bg-primary/80 disabled:opacity-50"
                    >
                        {processing ? 'Menyimpan...' : 'Simpan'}
                    </button>
                </form>
            </div>
        </AppLayout>
    );
};

export default edit;
