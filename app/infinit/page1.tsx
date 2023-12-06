import { useInfiniteQuery } from '@tanstack/react-query'

export const InfinitTodos = () => {
  const fetchTodos = async ({ pageParam = 0 }: {pageParam : number}) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos' + pageParam)
    return res.json()
  }

  // const {
  //   data,
  //   error,
  //   fetchNextPage,
  //   hasNextPage,
  //   isFetching,
  //   isFetchingNextPage,
  //   status,
  // } = useInfiniteQuery({
  //       queryKey:['todos'],
  //       queryFn: fetchTodos,
  //       initialPageParam:1,
  //       getNextPageParam: (lastPage)=>{
  //           return lastPage
  //       }
  // })


  // const {
  //   isLoading,
  //   isError,
  //   error,
  //   data,
  //   fetchNextPage,
  //   hasNextPage,
  //   isFetching,
  //   isFetchingNextPage
  // } = useInfiniteQuery({
  //   queryKey: ['todos'], 
  //   queryFn: fetchTodos, 
  //   getNextPageParam: (_lastPage, pages) => {
  //     if (pages.length < 10) {
  //       return pages.length + 1
  //     } else {
  //       return undefined
  //     }
  // }})

  // console.log('data',data)


  return <div>Hello infinit Scroll</div>

//   return status === 'loading' ? (
//     <p>Loading...</p>
//   ) : status === 'error' ? (
//     <p>Error: {error.message}</p>
//   ) : (
//     <>
//       {data.pages.map((group, i) => (
//         <React.Fragment key={i}>
//           {group.data.map((project) => (
//             <p key={project.id}>{project.name}</p>
//           ))}
//         </React.Fragment>
//       ))}
//       <div>
//         <button
//           onClick={() => fetchNextPage()}
//           disabled={!hasNextPage || isFetchingNextPage}
//         >
//           {isFetchingNextPage
//             ? 'Loading more...'
//             : hasNextPage
//             ? 'Load More'
//             : 'Nothing more to load'}
//         </button>
//       </div>
//       <div>{isFetching && !isFetchingNextPage ? 'Fetching...' : null}</div>
//     </>
//   )
}


// import { useInfiniteQuery } from '@tanstack/react-query'

// const Page = () => {
//     const FetchTodos = async ({pageParam} : {pageParam : number})=>{

//         const res = await fetch(`https://jsonplaceholder.typicode.com/todos?page=${pageParam}`)
//         return res.json()
//     }

//     const {data}= useInfiniteQuery({
        
//     })

//     

//   return (
//     <div>page</div>
//   )
// }

// export default Page