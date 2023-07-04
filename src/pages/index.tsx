import Image from 'next/image'
import HatCard, { HatCardInfo } from '../../components/HatCard'


export const hatsInfo : HatCardInfo[]=[
  {name: "Orc Hero Helm", img:"./OrcHeroHelm"}
]

export default function Home() {
  return (
    <div className='flex flex-col justify-start items-center gap-10 bg-[#2C3639] min-h-screen pb-20'>

      <div className='flex justify-center items-center gap-2 bg-[#3F4E4F] w-full py-5'>
        <img src="/PRM.png" alt="" height={100} width={100} />
        <h1 className='text-4xl text-white'>HATred Quests</h1>
      </div>

      <div className='px-20'>
        <HatCard hats={hatsInfo}/>
      </div>
    </div>
  )
}
