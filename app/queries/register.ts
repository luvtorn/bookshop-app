import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../lib/client";
import { registerUser } from "../api/registerUser.api";

export function useRegister() {
  return useMutation({
    mutationFn: registerUser,
  });
}
