import { type } from 'os'
import React, { useEffect, useState } from 'react'
import { Monster } from "@prisma/client"
import { Hatred } from '@prisma/client'
import ViewHatModal from './ViewHatModal'


export type HatCardInfo = Hatred & {
  hatName: string;
  hatImg: string;
  mapName: string;
  mapImg: string;
  info: string;
  monsters: Monster[];
}


interface HatProps {
  hats: HatCardInfo[]
}


const HatCard: React.FC<HatProps> = ({ hats }) => {

  const [showModal, setShowModal] = useState(false)
  const [selectedHat, setSelectedHat] = useState<HatCardInfo | null>(null);

  return (
    <div>
      <div className="flex justify-center items-center gap-10 flex-wrap py-10" >
        {
          hats.map((hat, index) => {
            return (
              <div
                onClick={() => {
                  setShowModal(true)
                  setSelectedHat(hat);
                }}
                key={index}
                className="flex flex-col gap-2 justify-center items-center text-white bg-[#3F4E4F] shadow-black shadow-sm rounded-md w-[200px] py-6 cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out"
              >
                <span>
                  <img src={`/api/image/${hat.hatImg}`} alt={hat.hatName} height={100} width={75} />
                </span>
                <span>{hat.hatName}</span>

              </div>
            )
          })
        }

      </div>
      <ViewHatModal show={showModal} setShow={setShowModal} hatredView={selectedHat} />

    </div>

  )
}

export default HatCard
