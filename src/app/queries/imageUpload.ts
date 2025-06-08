import { useMutation } from "@tanstack/react-query";
import { uploadBookImage } from "../api/uploadImage.api";



export function useUploadImage() {
    return useMutation({
        mutationFn: uploadBookImage,
    });
}