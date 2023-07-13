import Modal from "./Modal";
import { Hatred } from "@prisma/client";
import { Monster } from "@prisma/client";

interface viewHatInfo {
  show: boolean;
  setShow: (show: boolean) => void;
  hatredView: Hatred & {
    monsters: Monster[];
  } | null;

}


const ViewHatModal: React.FC<viewHatInfo> = ({ hatredView, show, setShow }) => {
  if (!hatredView) {
    return null;
  }
  console.log(hatredView.hatName)
  return (
    <Modal show={show} setShow={setShow} title={hatredView.hatName}>
      <div className="flex gap-5" >
        <div className="flex flex-col gap-1 text-left ">
          <span>
            <img src={`/api/image/${hatredView.info}`} alt="" />
          </span>
          <span className="font-bold">Monster:</span>
          <ul className='list-disc px-10 '>
            {hatredView.monsters.map((mob, mobIndex) => (
              <li className="" key={mobIndex}>
                {mob.monsterName}
              </li>
            ))}
          </ul>
          <div className="flex gap-1">
            <span className="font-bold">Map lvl:</span>
            <span className="text-red-700 font-bold">{`${hatredView.mapLvlFrom} ~ ${hatredView.mapLvlTo}`}</span>
          </div>
          <div className="flex gap-1">
            <span className="font-bold">Tier:</span>
            <span className="text-red-700 font-bold">{hatredView.tier}</span>
          </div>

        </div>
        <div className="flex flex-col gap-1 items-end">
          <span>
            <img src={`/api/image/${hatredView.mapImg}`} alt="" />
          </span>
          <span className="font-bold">{hatredView.mapName}</span>

        </div>
      </div>


    </Modal>
  )
}

export default ViewHatModal
