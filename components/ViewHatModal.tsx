import Modal from "./Modal";
import { Hatred } from "@prisma/client";

interface viewHatInfo {
    show: boolean;
    setShow: (show: boolean) => void;
    hatred: Hatred
}


const ViewHatModal: React.FC<viewHatInfo> = ({ hatred, show, setShow }) => {
    return (
        <Modal show={show} setShow={setShow} title={hatred.hatName}>
            <div className="flex">
                <div>
                    <span>
                        <img src={hatred.mapImg} alt="" />
                    </span>
                    <span>{hatred.mapName}</span>
                </div>

                <div>
                    <span>
                        <img src={hatred.info} alt="" />
                    </span>
                </div>
            </div>


        </Modal>
    )
}

export default ViewHatModal