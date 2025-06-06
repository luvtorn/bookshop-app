// /pages/api/books/upload-image.ts
import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import { supabase } from "@/app/lib/supabase";
import { prisma } from "@/app/lib/prisma";
import { v4 as uuidv4 } from "uuid";
import { IncomingForm } from "formidable";

export const config = {
  api: { bodyParser: false, sizeLimit: "10mb" },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") return res.status(405).end();

  const form = new IncomingForm();

  form.parse(req, async (err, _, files) => {
    if (err) return res.status(500).json({ error: "Ошибка загрузки файла" });

    console.log(files);

    const file = files.file?.[0];
    if (!file) return res.status(400).json({ error: "Файл обязателен" });

    const buffer = fs.readFileSync(file.filepath);
    const ext = file.originalFilename?.split(".").pop() || "jpg";
    const filename = `${uuidv4()}.${ext}`;

    const { error: uploadError } = await supabase.storage
    .from("images")
    //@ts-ignore
      .upload(filename, buffer, { contentType: file.mimetype });

    if (uploadError)
      return res.status(500).json({ error: uploadError.message });

    const { data: urlData } = supabase.storage
      .from("images")
      .getPublicUrl(filename);

    const image = await prisma.image.create({
      data: {
        filename: file.originalFilename || filename,
        mimetype: file.mimetype || "image/jpeg",
        path: filename,
        url: urlData.publicUrl,
      },
    });

    res.status(200).json({ image });
  });
}
