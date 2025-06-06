"use client";

import React, { useEffect } from "react";
import {
  Modal,
  Box,
  TextField,
  Button,
  Typography,
  Avatar,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useUploadImage } from "../queries/imageUpload";
import { Book, BookForm } from "../types/book";

type EditBookModalProps = {
  open: boolean;
  onClose: () => void;
  book: Book | null;
  onSave: (data: BookForm) => void;
};

const style = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 2,
  p: 4,
};

export default function EditBookModal({
  open,
  onClose,
  book,
  onSave,
}: EditBookModalProps) {
  const { register, handleSubmit, reset, setValue } = useForm<BookForm>({
    defaultValues: {
      title: "",
      author: "",
      description: "",
      imageId: "",
    },
  });

  const { mutateAsync: uploadImage } = useUploadImage();

  useEffect(() => {
    if (book) {
      reset({
        title: book.title,
        author: book.author,
        description: book.description ?? "",
      });
    }
  }, [book, reset]);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const { image } = await uploadImage(file);

      setValue("imageId", image.id);
    }
  };

  const onSubmit = (data: BookForm) => {
    onSave(data);
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="edit-book-modal-title"
    >
      <Box sx={style}>
        <Typography
          id="edit-book-modal-title"
          variant="h6"
          component="h2"
          mb={2}
        >
          Edytuj książkę
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <TextField
            label="Tytuł"
            fullWidth
            margin="normal"
            {...register("title", { required: "Tytuł jest wymagany" })}
          />
          <TextField
            label="Autor"
            fullWidth
            margin="normal"
            {...register("author", { required: "Autor jest wymagany" })}
          />
          <TextField
            label="Opis"
            fullWidth
            margin="normal"
            multiline
            rows={3}
            {...register("description")}
          />

          <Box mt={2}>
            <Typography variant="subtitle1" mb={1}>
              Zmień obrazek
            </Typography>
            {book?.image && (
              <Avatar
                src={book.image.url}
                variant="rounded"
                sx={{ width: 100, height: 100, mb: 1 }}
              />
            )}
            <input type="file" accept="image/*" onChange={handleFileChange} />
          </Box>

          <Box mt={3} display="flex" justifyContent="flex-end" gap={2}>
            <Button onClick={onClose} color="secondary" variant="outlined">
              Anuluj
            </Button>
            <Button type="submit" variant="contained" color="primary">
              Zapisz
            </Button>
          </Box>
        </form>
      </Box>
    </Modal>
  );
}
