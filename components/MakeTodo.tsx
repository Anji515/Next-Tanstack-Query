'use client'
import React, { useState } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { useToast } from './ui/use-toast'
import { InvalidateQueryFilters, useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import Laoder from './Loader'

const MakeTodo = () => {
    const [title,setTitle]=useState('');
    const [content,setContent]=useState('');
    const {toast} =useToast()
    
    const queryClient = useQueryClient();

    const { mutate: submitTodo, isPending, isError, isSuccess } = useMutation({
        mutationFn: async () => await axios.post('http://localhost:3001/todos', {
          title,
          content,
          status: false,
        }),
        onSuccess: (data) => {
          toast({ description: 'Added todo successfully' });
          setTitle('');
          setContent('')
          queryClient.invalidateQueries(['user-todos'] as InvalidateQueryFilters);
        },
        onError : ()=>{
          toast({description: 'Something went wrong'})
        }
    })
    
  return (
    <div >
        Create Todo
        <div className='flex justify-between gap-4'>
        <Input
        placeholder='Please enter your todo'
        value={title}
        onChange={e=>setTitle(e.target.value)}
        disabled={isPending}
        />
        <Input
        placeholder='Please enter your todo content'
        value={content}
        onChange={e=>setContent(e.target.value)}
        disabled={isPending}
        />
        <Button
        className='flex gap-3'
        onClick={()=>submitTodo()}
        disabled={isPending}
        >Submit {isPending && <Laoder />}</Button>
        </div>
    </div>
  )
}

export default MakeTodo