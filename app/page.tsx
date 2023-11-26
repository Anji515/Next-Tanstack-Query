import MakeTodo from '@/components/MakeTodo'
import Todos from '@/components/Todos'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1 className='text-2xl text-red-700 font-extrabold'>Welcome to Todo List</h1>
      <MakeTodo/>
      <br />
      <Todos /> 
    </main>
  )
}
