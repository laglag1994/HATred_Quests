import { type } from 'os'
import React from 'react'


export type HatCardInfo = {
    name: string
    img: string
}

interface HatProps {
    hats: HatCardInfo[]
}



const HatCard: React.FC<HatProps> = ({ hats }) => {
    return (
        <div className="flex justify-center items-center gap-10 flex-wrap">
            {
                hats.map((hat, index) => {
                    return (
                        <div key={index} className="flex flex-col justify-center items-center border-2 bg-[#DCD7C9] border-[#A27B5C] w-[200px] text-white">
                            <span>{hat.img}</span>
                            <span>{hat.name}</span>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default HatCard