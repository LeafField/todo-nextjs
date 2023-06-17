import { useRouter } from "next/router";
import axios from "axios";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { Task } from "@prisma/client";
import useStore from "../store";
import { EditedTask } from "../types";

export const useMutateTask = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const reset = useStore((state) => state.resetEditedTask);

  const createTaskMutation = useMutation(
    async (task: Omit<EditedTask, "id">) => {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/todo`,
        task
      );
      return res.data;
    },
    {
      onSuccess: (res) => {},
      onError: (err: any) => {},
    }
  );
};
