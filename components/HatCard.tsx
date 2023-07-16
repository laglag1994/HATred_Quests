import { type } from 'os'
import React, { useEffect, useState } from 'react'
import { Requirements } from "@prisma/client"
import { Hatred } from '@prisma/client'
import ViewHatModal from './ViewHatModal'


export type HatCardInfo = Hatred & {
  hatName: string;
  hatImg: string;
  mapName: string;
  mapImg: string;
  info: string;
  reqs: Requirements[];
}


interface HatProps {
  hats: HatCardInfo[]
  deleteButton?: boolean;

}


const HatCard: React.FC<HatProps> = ({ hats, deleteButton }) => {


  const [showModal, setShowModal] = useState(false)
  const [selectedHat, setSelectedHat] = useState<HatCardInfo | null>(null);


  const handleDelete = async (hatId: number) => {
    try {
      const response = await fetch("/api/hatred", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: hatId
        })
      })
      if (response.ok) {
        console.log("Hat deleted successfully");
        alert("Hat deleted successfully");
      } else {
        console.error("Failed to deleted hat");
      }
    } catch (error) {
      console.error("Error occurred while deleting hat:", error);
    }
  }



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
                {deleteButton === true ? (
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      handleDelete(hat.id)
                    }}
                    className='absolute bg-red-700 px-2 translate-x-24 -translate-y-20 font-bold hover:bg-red-900'
                  >
                    X
                  </button>
                ) : null}
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