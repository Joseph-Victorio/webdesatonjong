import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { Head, useForm } from '@inertiajs/react';

const tambah = () => {
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
        post('/admin/tambah-galeri', { forceFormData: true });
    };
    const breadcrumbs = [
        { title: 'Galeri', href: '/admin/kelola-galeri' },
        { title: 'Tambah Foto', href: '/admin/tambah-galeri' },
    ];
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Tambah Foto Galeri" />
            <div className="mx-auto max-w-lg rounded bg-white p-6 shadow">
                <h1 className="mb-4 text-xl font-bold">Tambah Foto Galeri</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium">
                            Pilih Foto
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

                    <Button
                        variant={'default'}
                        type="submit"
                        disabled={processing}
                        className="rounded px-4 py-2 text-white disabled:opacity-50"
                    >
                        {processing ? 'Mengunggah...' : 'Simpan'}
                    </Button>
                </form>
            </div>
        </AppLayout>
    );
};

export default tambah;
