import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createBook, deleteBook, editBook, getAllBooks } from "../api/books/books.api";
import { queryKeys } from "./queryKeys";

export function useDeleteBook() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteBook,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.books,
      });
    },
  });
}

export function useGetAllBooks() {
  return useQuery({
    queryKey: ["books"],
    queryFn: () => getAllBooks(),
  });
}

export function useEditBook() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: editBook,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.books,
      });
    },
  });
}

export function useCreateBook() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createBook,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.books,
      });
    },
  });
}
