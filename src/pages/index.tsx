import Image from 'next/image'
import HatCard, { HatCardInfo } from '../../components/HatCard'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

// const queryClient = new QueryClient()


export default function Home() {


  const { isLoading, error, data } = useQuery("hatlist", () =>
    fetch('/api/hatred').then(res => res.json())
  )

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error




  return (
    <div className='flex flex-col justify-start items-center gap-10 bg-[#2C3639] min-h-screen pb-20'>

      <div className='flex justify-center items-center gap-2 bg-[#3F4E4F] w-full py-5'>
        <img src="/PRM.png" alt="" height={100} width={100} />
        <h1 className='text-4xl text-white'>HATred Quests</h1>
      </div>

      <div className='px-20'>
        <HatCard hats={data} />
      </div>
    </div>
  )
}



