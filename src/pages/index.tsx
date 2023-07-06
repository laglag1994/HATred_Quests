import Image from 'next/image'
import HatCard, { HatCardInfo } from '../../components/HatCard'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'



export default function Home() {


  const { isLoading, error, data } = useQuery("hatlist", () =>
    fetch('/api/hatred').then(res => res.json())
  )

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error



  console.log(data, "hats data")
  return (
    <div className='flex flex-col justify-start items-center gap-10 bg-[#2C3639] min-h-screen pb-20'>

      <div className='flex justify-center items-center gap-2 bg-[#3F4E4F] w-full py-5'>
        <img src="/PRM.png" alt="" height={100} width={100} />
        <h1 className='text-4xl text-white'>HATred Quests</h1>
      </div>



      
      <div className='px-20 flex flex-col gap-4 justify-start items-start w-full text-left'>
        <div>
          <span className='text-xl text-gold border-b border-white text-white pb-3 w-1/4'>from 1 to 30</span>
          <HatCard hats={data.filter((lvl) => lvl.mapLvlFrom >= 1 && lvl.mapLvlTo <= 30)} />
        </div>

        <div>
          <span className='text-xl text-gold border-b border-white text-white pb-3 w-1/4'>from 30 to 50</span>
          <HatCard hats={data.filter((lvl) => lvl.mapLvlFrom >= 30 && lvl.mapLvlTo <= 50)} />
        </div>

        <div>
          <span className='text-xl text-gold border-b border-white text-white pb-3 w-1/4'>from 50 to 70</span>
          <HatCard hats={data.filter((lvl) => lvl.mapLvlFrom >= 50 && lvl.mapLvlTo <= 70)} />
        </div>

        <div>
          <span className='text-xl text-gold border-b border-white text-white pb-3 w-1/4'>from 70 to 90</span>
          <HatCard hats={data.filter((lvl) => lvl.mapLvlFrom >= 70 && lvl.mapLvlTo <= 90)} />
        </div>

        <div>
          <span className='text-xl text-gold border-b border-white text-white pb-3 w-1/4'>from 90 to 110</span>
          <HatCard hats={data.filter((lvl) => lvl.mapLvlFrom >= 90 && lvl.mapLvlTo <= 110)} />
        </div>

        <div>
          <span className='text-xl text-gold border-b border-white text-white pb-3 w-1/4'>from 110 to 130</span>
          <HatCard hats={data.filter((lvl) => lvl.mapLvlFrom >= 110 && lvl.mapLvlTo <= 130)} />
        </div>

        <div>
          <span className='text-xl text-gold border-b border-white text-white pb-3 w-1/4'>from 130 to 150</span>
          <HatCard hats={data.filter((lvl) => lvl.mapLvlFrom >= 130 && lvl.mapLvlTo <= 150)} />
        </div>
      </div>

    </div>
  )
}



