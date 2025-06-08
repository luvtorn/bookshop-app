import { api } from "../lib/client";

export type Image = {
  id: string;
  createdAt: Date;
  filename: string;
  url: string;
  path: string;
  mimetype: string;
};

export type ImageRes = {
  image: Image;
}
export async function uploadBookImage(file: File): Promise<ImageRes> {
  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await api.post("/image/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error: any) {
    const message =
      error.response?.data?.error || "Ошибка загрузки изображения";
    throw new Error(message);
  }
}
