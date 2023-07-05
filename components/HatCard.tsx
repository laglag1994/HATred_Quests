import { type } from 'os'
import React, { useEffect, useState } from 'react'
import { Monster } from "@prisma/client"
import { Hatred } from '@prisma/client'
import ViewHatModal from './ViewHatModal'


export type HatCardInfo = {
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

    return (
        <div className="flex justify-center items-center gap-10 flex-wrap">
            {
                hats.map((hat, index) => {
                    return (
                        <div

                            key={index}
                            className="flex flex-col justify-center items-center text-white  bg-[#DCD7C9] px-[20px]"
                        >
                            <span>
                                <img src={hat.hatImg} alt={hat.hatName} height={100} width={75} />
                            </span>
                            <span className='py-2'>{hat.hatName}</span>
                            <button onClick={() => setShowModal(true)}>click</button>
                        </div>
                    )
                })
            }

            <ViewHatModal show={showModal} setShow={setShowModal} hatredView={hats.id} />
        </div>
    )
}

export default HatCard