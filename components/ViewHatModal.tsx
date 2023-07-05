import Modal from "./Modal";
import { Hatred } from "@prisma/client";


interface viewHatInfo {
    show: boolean;
    setShow: (show: boolean) => void;
    hatredView: Hatred
}


const ViewHatModal: React.FC<viewHatInfo> = ({ hatredView, show, setShow }) => {

    console.log(hatredView.hatName)
    return (
        <Modal show={show} setShow={setShow} title={hatredView.hatName}>
            <div className="flex">
                <div>
                    <span>
                        <img src={hatredView.mapImg} alt="" />
                    </span>
                    <span>{hatredView.mapName}</span>
                </div>

                <div>
                    <span>
                        <img src={hatredView.info} alt="" />
                    </span>
                </div>
            </div>


        </Modal>
    )
}

export default ViewHatModal