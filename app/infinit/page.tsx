import { useInfiniteQuery } from '@tanstack/react-query'
import React from 'react'

const Page = () => {
    const fetchTodos = async ({ pageParam = 1 }: {pageParam : number}) => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/todos?page=${pageParam}`)
        return res.json()
      }

    const {
        data,error,fetchNextPage,hasNextPage,
        isFetching,isFetchingNextPage,status
    } = useInfiniteQuery({
        queryKey:['todos'],
        queryFn: fetchTodos,
        initialPageParam:1,
        getNextPageParam: (lastPage)=>{
            return lastPage
        }})
    
      console.log('data',data)

      return (
        <>
          {data?.pages.map((group, i) => (
            <React.Fragment key={i}>
              {group.data.map((project : any) => (
                <p key={project.id}>{project.name}</p>
              ))}
            </React.Fragment>
          ))}
          <div>
            <button
              onClick={() => fetchNextPage()}
              disabled={!hasNextPage || isFetchingNextPage}
            >
              {isFetchingNextPage
                ? 'Loading more...'
                : hasNextPage ? 'Load More' : 'Nothing more to load'
              }
            </button>
          </div>
          <div>{isFetching && !isFetchingNextPage ? 'Fetching...' : null}</div>
        </>
      )
}

export default Page