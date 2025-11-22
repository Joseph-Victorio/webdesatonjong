import { Head, useForm } from "@inertiajs/react";
import toast from "react-hot-toast";
import AppLayout from "@/layouts/app-layout";

interface Pendidikan {
  id: number;
  tidak_belum_sekolah: number;
  tidak_tamat_sd: number;
  sd_sederajat: number;
  sltp_sederajat: number;
  slta_sederajat: number;
  diploma_i_ii: number;
  diploma_iii: number;
  strata_i: number;
  strata_ii: number;
  strata_iii: number;
}

interface PageProps {
  pendidikan: Pendidikan;
}

export default function PendidikanIndex({ pendidikan }: PageProps) {
  const form = useForm({ ...pendidikan });

   const breadcrumbs = [
    { title: "Kelola Penduduk", href: "/admin/kelola-penduduk" },
    { title: "Kelola Penduduk Berdasarkan Pendidikan", href: "" },
  ];

  const fields: { key: keyof Pendidikan; label: string }[] = [
  { key: "tidak_belum_sekolah", label: "Tidak / Belum Sekolah" },
  { key: "tidak_tamat_sd", label: "Tidak Tamat SD" },
  { key: "sd_sederajat", label: "SD Sederajat" },
  { key: "sltp_sederajat", label: "SLTP Sederajat" },
  { key: "slta_sederajat", label: "SLTA Sederajat" },
  { key: "diploma_i_ii", label: "Diploma I / II" },
  { key: "diploma_iii", label: "Diploma III" },
  { key: "strata_i", label: "Strata I" },
  { key: "strata_ii", label: "Strata II" },
  { key: "strata_iii", label: "Strata III" },
];



  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Edit Pendidikan Penduduk" />

      <form
        onSubmit={(e) => {
          e.preventDefault();
          form.put(`/admin/pendidikan/${pendidikan.id}`, {
            onSuccess: () => toast.success("Berhasil disimpan!"),
          });
        }}
        className="p-8 shadow rounded border max-w-xl mx-auto"
      >
        <h1 className="text-xl font-bold mb-4">Data Pendidikan Penduduk</h1>

        <div className="grid grid-cols-2 gap-4">
          {fields.map((f) => (
            <div key={f.key}>
              <label className="text-sm mb-1 block">{f.label}</label>
              <input
                type="number"
                min={0}
                className="border p-2 w-full rounded"
                value={form.data[f.key]}
                onChange={(e) =>
                  form.setData(f.key, Math.max(0, Number(e.target.value)))
                }
              />
            </div>
          ))}
        </div>

        <button
          type="submit"
          className="mt-4 bg-primary hover:bg-primary/80 ease-in-out duration-300 cursor-pointer text-white px-4 py-2 rounded"
        >
          Simpan Perubahan
        </button>
      </form>
    </AppLayout>
  );
}
