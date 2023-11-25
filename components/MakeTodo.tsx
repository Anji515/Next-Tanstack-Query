import React, { useState } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { useToast } from './ui/use-toast'
import { useMutation, useQueryClient } from '@tanstack/react-query'

const MakeTodo = () => {
    const [input,setInput]=useState('')
    
    const queryClient = useQueryClient()
    // const {isLoading}= queryClient({

    // })

  return (
    <div>
        Create Todo
        <Input
        placeholder='Please enter your todo'
        value={input}
        onChange={e=>setInput(e.target.value)}
        />
        <Button>Submit</Button>
    </div>
  )
}

export default MakeTodo