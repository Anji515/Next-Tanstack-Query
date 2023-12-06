"use client";
import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import TodoCard from "./TodoCard";

export interface TodoData {
  id: number;
  title: string;
  status: boolean;
  content: string;
}

const Todos = () => {

  const { data, isLoading, isFetching, isError } = useQuery(
    {
      queryKey: ["user-todos"],
      queryFn: async () => {
        const { data } = await axios.get(`http://localhost:3001/todos`);
        console.log(data);
        return data as TodoData[];
      }
    }
  );

  if (isLoading) return <h1>Loading tasks ...</h1>;
  if (isError) return <h1>There was an error , try again ...</h1>;
  return (
    <div className="flex flex-col gap-3">
      {data?.map((todo) => (
        <TodoCard key={todo.id} {...todo} />
      ))}
    </div>
  );
};

export default Todos;
