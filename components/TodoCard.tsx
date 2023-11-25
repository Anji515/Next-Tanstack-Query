import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import type { Todo } from './Todos'
import { Button } from './ui/button'
// import {Card } from ''


const TodoCard = ({title,content,status} : Todo) => {
    
  return (
    <Card>
    <CardHeader>
      <CardTitle className={!status ? `line-through`:''}>{title}</CardTitle>
    </CardHeader>  
      <CardFooter>
        <div className='flex justify-between min-w-full gap-3'>
          <Button>Update Status</Button>
          <Button>Delete Todo</Button>
        </div>
      </CardFooter>
    </Card>
  )
}

export default TodoCard