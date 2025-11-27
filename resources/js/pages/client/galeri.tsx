import GuestLayout from "@/layouts/guest-layout";
import { Head } from "@inertiajs/react";
import { useState } from "react";

interface Galeri {
    id: number;
    foto?: string;
}

interface PageProps {
    galeris: Galeri[];
}

const GaleriPage = ({ galeris }: PageProps) => {
    const [selected, setSelected] = useState<Galeri | null>(null);

    return (
        <GuestLayout>
            <Head title="Galeri" />

            <div className="px-4 py-10 max-w-6xl mx-auto">
                <h1 className="text-2xl font-semibold mb-6">Galeri</h1>

                <div className="grid columns-1 sm:columns-2 md:columns-3 lg:grid-cols-4 gap-4 space-y-4">
                    {galeris.map((item) => (
                        <div
                            key={item.id}
                            className="break-inside-avoid cursor-pointer"
                            onClick={() => setSelected(item)}
                        >
                            <img
                                src={`/storage/${item.foto}`}
                                alt="galeri"
                                className="w-full rounded-lg hover:opacity-90 transition"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {selected && (
                <div
                    className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
                    onClick={() => setSelected(null)}
                >
                    <div
                        className=" p-4 rounded-xl max-w-xl shadow-xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={`/storage/${selected.foto}`}
                            alt="preview"
                            className="w-full rounded-lg"
                        />
                    </div>
                </div>
            )}
        </GuestLayout>
    );
};

export default GaleriPage;
