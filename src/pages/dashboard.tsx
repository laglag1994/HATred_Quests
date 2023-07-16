import { useEffect, useState } from "react";
import AddNewHatModal from "../../components/AddNewHatModal";
import requireAuthentication from "../../components/WithAuthentication"
import HatCard, { HatCardInfo } from '../../components/HatCard'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import router from "next/router";



const Dashboard = () => {
  const [showModal, setShowModal] = useState(false)

  const { isLoading, error, data } = useQuery("hatlist", () =>
    fetch('/api/hatred').then(res => res.json())
  )

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error


  const token = localStorage.getItem('token');

  if (!token) {
    router.push('/');
  }


  return (
    <div className='flex flex-col justify-start gap-10 bg-[#2C3639] min-h-screen pb-20'>

      <button
      onClick={()=>localStorage.removeItem("token")}
      >logout</button>

      <div className='flex justify-center items-center gap-2 bg-[#3F4E4F] w-full py-5'>
        <img src="/PRM.png" alt="" height={100} width={100} />
        <h1 className='text-4xl text-white'>Dashboard</h1>
      </div>

      <div className="flex flex-col justify-center items-center text-white gap-10 text-center">
        <div>
          <h1>how many hats?</h1>
        </div>
        <div className="flex flex-col gap-5">
          <h1 >add new hat</h1>
          <button
            onClick={() => setShowModal(true)}
            className='bg-[#A27B5C] text-white py-2 px-6 hover:opacity-70 transition-all duration-500'>Add</button>

        </div>
      </div>

      <div className="justify-start">
        <div className='px-20 flex flex-col gap-4 justify-start items-start w-full text-left'>
          <div>
            <span className='text-xl text-gold border-b border-white text-white pb-3 w-1/4'>LVL 1 to 30</span>
            <HatCard hats={data.filter((lvl: { mapLvlFrom: number; mapLvlTo: number }) => lvl.mapLvlFrom >= 1 && lvl.mapLvlTo <= 30)} deleteButton={true} />
          </div>

          <div>
            <span className='text-xl text-gold border-b border-white text-white pb-3 w-1/4'>LVL 30 to 50</span>
            <HatCard hats={data.filter((lvl: { mapLvlFrom: number; mapLvlTo: number }) => lvl.mapLvlFrom >= 30 && lvl.mapLvlTo <= 50)} deleteButton={true} />
          </div>

          <div>
            <span className='text-xl text-gold border-b border-white text-white pb-3 w-1/4'>LVL 50 to 70</span>
            <HatCard hats={data.filter((lvl: { mapLvlFrom: number; mapLvlTo: number }) => lvl.mapLvlFrom >= 50 && lvl.mapLvlTo <= 70)} deleteButton={true} />
          </div>

          <div>
            <span className='text-xl text-gold border-b border-white text-white pb-3 w-1/4'>LVL 70 to 90</span>
            <HatCard hats={data.filter((lvl: { mapLvlFrom: number; mapLvlTo: number }) => lvl.mapLvlFrom >= 70 && lvl.mapLvlTo <= 90)} deleteButton={true} />
          </div>

          <div>
            <span className='text-xl text-gold border-b border-white text-white pb-3 w-1/4'>LVL 90 to 110</span>
            <HatCard hats={data.filter((lvl: { mapLvlFrom: number; mapLvlTo: number }) => lvl.mapLvlFrom >= 90 && lvl.mapLvlTo <= 110)} deleteButton={true} />
          </div>

          <div>
            <span className='text-xl text-gold border-b border-white text-white pb-3 w-1/4'>LVL 110 to 130</span>
            <HatCard hats={data.filter((lvl: { mapLvlFrom: number; mapLvlTo: number }) => lvl.mapLvlFrom >= 110 && lvl.mapLvlTo <= 130)} deleteButton={true} />
          </div>

          <div>
            <span className='text-xl text-gold border-b border-white text-white pb-3 w-1/4'>LVL 130 to 150</span>
            <HatCard hats={data.filter((lvl: { mapLvlFrom: number; mapLvlTo: number }) => lvl.mapLvlFrom >= 130 && lvl.mapLvlTo <= 150)} deleteButton={true} />
          </div>
        </div>
      </div>
      <AddNewHatModal show={showModal} setShow={setShowModal} />

    </div>
  );
}


export default Dashboard;