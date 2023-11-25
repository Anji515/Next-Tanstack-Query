"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import TodoCard from "./TodoCard";

export interface Todo {
  _id: number;
  title: string;
  date: Date;
  status: boolean;
  content: string;
}

const Todos = () => {
  const { data, isLoading, isFetching, isError } = useQuery({
    queryKey: ["todos"],
    queryFn: async () => {
      const { data } = await axios.get(`/api/todos`);
      console.log(data);
      return data.todos as Todo[];
    },
  });
  if (isLoading) return <h1>Loading tasks ...</h1>;
  if (isError) return <h1>There was an error , try again ...</h1>;
  return (
    <div className="flex flex-col gaap-2">
      {data?.map((todo) => (
        <TodoCard key={todo._id} {...todo} />
      ))}
    </div>
  );
};

export default Todos;
