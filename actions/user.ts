"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function deleteUser(id: string) {
  try {
    // Cek apakah user ada
    const user = await prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      return { success: false, message: "User tidak ditemukan" };
    }

    // Hapus user
    await prisma.user.delete({
      where: { id },
    });

    // Revalidate halaman manajemen akun
    revalidatePath("/admin/dashboard/manajemen-akun");

    return { success: true, message: "User berhasil dihapus" };
  } catch (error) {
    console.error("Error deleting user:", error);
    return { success: false, message: "Gagal menghapus user" };
  }
}
