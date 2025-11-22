import { Head, useForm } from "@inertiajs/react";
import toast from "react-hot-toast";
import { Usia } from "@/types/usia";
import AppLayout from "@/layouts/app-layout";

interface PageProps {
  laki: Usia;
  perempuan: Usia;
}

export default function PendudukIndex({ laki, perempuan }: PageProps) {
  const breadcrumbs = [
    { title: "Kelola Penduduk", href: "/admin/kelola-penduduk" },
    { title: "Kelola Penduduk Berdasarkan Umur", href: "/admin/umur" },
  ];

  const usiaFields: { key: keyof Usia; label: string }[] = [
    { key: "usia_0_4", label: "Usia 0 - 4" },
    { key: "usia_5_9", label: "Usia 5 - 9" },
    { key: "usia_10_14", label: "Usia 10 - 14" },
    { key: "usia_15_19", label: "Usia 15 - 19" },
    { key: "usia_20_24", label: "Usia 20 - 24" },
    { key: "usia_25_29", label: "Usia 25 - 29" },
    { key: "usia_30_34", label: "Usia 30 - 34" },
    { key: "usia_35_39", label: "Usia 35 - 39" },
    { key: "usia_40_44", label: "Usia 40 - 44" },
    { key: "usia_45_49", label: "Usia 45 - 49" },
    { key: "usia_50_54", label: "Usia 50 - 54" },
    { key: "usia_55_59", label: "Usia 55 - 59" },
    { key: "usia_60_64", label: "Usia 60 - 64" },
    { key: "usia_65_69", label: "Usia 65 - 69" },
    { key: "usia_70_74", label: "Usia 70 - 74" },
    { key: "usia_75_plus", label: "Usia 75+" },
  ];

  const lakiForm = useForm<Usia>({ ...laki });
  const perempuanForm = useForm<Usia>({ ...perempuan });

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Kelola Data Berdasarkan Umur" />

      <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* laki */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            lakiForm.put(`/penduduk/usia-laki/${laki.id}`, {
              onSuccess: () => toast.success("Data laki-laki berhasil diperbarui!"),
            });
          }}
          className="border p-6 rounded-lg shadow"
        >
          <h2 className="text-xl font-bold mb-4">Data Penduduk Laki-Laki</h2>

          <div className="grid grid-cols-2 gap-4">
            {usiaFields.map((u) => (
              <div key={u.key}>
                <label className="block text-sm font-medium mb-1">{u.label}</label>
                <input
                  type="number"
                  min={0}
                  className="border w-full p-2 rounded"
                  value={lakiForm.data[u.key]}
                  onChange={(e) =>
                    lakiForm.setData(u.key, Number(e.target.value))
                  }
                />
              </div>
            ))}
          </div>

          <button
            type="submit"
            className="mt-4 bg-primary hover:bg-primary/80 duration-300 ease-in-out cursor-pointer text-white px-4 py-2 rounded"
          >
            Update Laki-Laki
          </button>
        </form>

       {/* perempuna */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            perempuanForm.put(`/penduduk/usia-perempuan/${perempuan.id}`, {
              onSuccess: () =>
                toast.success("Data perempuan berhasil diperbarui!"),
            });
          }}
          className="border p-6 rounded-lg shadow"
        >
          <h2 className="text-xl font-bold mb-4">Data Penduduk Perempuan</h2>

          <div className="grid grid-cols-2 gap-4">
            {usiaFields.map((u) => (
              <div key={u.key}>
                <label className="block text-sm font-medium mb-1">{u.label}</label>
                <input
                  type="number"
                  min={0}
                  className="border w-full p-2 rounded"
                  value={perempuanForm.data[u.key]}
                  onChange={(e) =>
                    perempuanForm.setData(u.key, Number(e.target.value))
                  }
                />
              </div>
            ))}
          </div>

          <button
            type="submit"
            className="mt-4 bg-primary hover:bg-primary/80 duration-300 ease-in-out text-white px-4 py-2 rounded cursor-pointer"
          >
            Update Perempuan
          </button>
        </form>

      </div>
    </AppLayout>
  );
}
