import AppLayout from '@/layouts/app-layout';
import { Head, useForm } from '@inertiajs/react';

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
        post(`/galeri/${galeri.id}?_method=PUT`, { forceFormData: true });
    };
    const breadcrumbs = [
        { title: 'Galeri', href: '/admin/kelola-galeri' },
        { title: 'Edit Foto', href: '/admin/galeri-edit' },
    ];
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Edit Foto Galeri" />
            <div className="mx-auto max-w-lg rounded bg-white p-6 shadow">
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
                        <input
                            type="file"
                            name="foto"
                            onChange={handleChange}
                            className="w-full rounded border p-2"
                        />
                        {errors.foto && (
                            <p className="text-sm text-red-500">
                                {errors.foto}
                            </p>
                        )}
                    </div>

                    <button
                        type="submit"
                        disabled={processing}
                        className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:opacity-50"
                    >
                        {processing ? 'Menyimpan...' : 'Update'}
                    </button>
                </form>
            </div>
        </AppLayout>
    );
};

export default edit;
