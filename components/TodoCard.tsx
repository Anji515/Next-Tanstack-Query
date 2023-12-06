import React from "react";
import { Card, CardFooter, CardHeader, CardTitle } from "./ui/card";
import type { TodoData } from "./Todos";
import { Button } from "./ui/button";
import {
  InvalidateQueryFilters,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import axios from "axios";
import { useToast } from "./ui/use-toast";
import Laoder from "./Loader";
import { EditTodo } from "./EditTodo";

const TodoCard = ({ title, status, content, id }: TodoData) => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  const { mutate: DeleteTodo, isPending: deleteLoading } = useMutation({
    mutationFn: async () =>
      await axios.delete(`http://localhost:3001/todos/${id}`),
    onSuccess: (data) => {
      toast({
        description: "Your task has been Deleted !",
      });
      // console.log('success')
      queryClient.invalidateQueries(["user-todos"] as InvalidateQueryFilters);
    },
    onError: () => {
      toast({ description: "Something went wrong" });
    },
  });

  const { mutate: UpdateTodo, isPending: updateLoading } = useMutation({
    mutationFn: async () =>
      await axios.patch(`http://localhost:3001/todos/${id}`, {
        status: !status,
      }),
    onSuccess: (data) => {
      toast({
        description: "Your task stt+atus has been updated !",
      });
      // console.log('success')
      queryClient.invalidateQueries(["user-todos"] as InvalidateQueryFilters);
    },
    onError: () => {
      toast({ description: "Something went wrong" });
    },
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <h1 className={status ? `line-through` : ""}>{content}</h1>
      </CardHeader>
      <CardFooter>
        <div className="flex justify-between min-w-full gap-3">
          <Button className='flex gap-3'  onClick={() => UpdateTodo()}>Update Status{updateLoading && <Laoder/>}</Button>
          {/* <EditTodo /> */}
          <Button className='flex gap-3' onClick={() => DeleteTodo()}>Delete Todo{deleteLoading && <Laoder/>}</Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default TodoCard;
