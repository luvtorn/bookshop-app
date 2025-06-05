import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteBook, getAllBooks } from "../api/books/books.api";
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
