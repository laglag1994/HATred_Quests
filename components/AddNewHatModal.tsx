import Modal from "./Modal";


interface AddNewHat {
    show: boolean;
    setShow: (show: boolean) => void;
}


const AddNewHatModal: React.FC<AddNewHat> = ({ show, setShow }) => {

    return (
        <Modal show={show} setShow={setShow} title="Add New Hat">
            <div className="flex flex-col gap-5">
                <form
                    className="flex flex-col gap-5"
                    action="">
                    <div className="flex justify-between gap-2">
                        <label htmlFor="">hat name:</label>
                        <input className="bg-gray-200" type="text" />
                    </div>
                    <div className="flex justify-between gap-2">
                        <label htmlFor="">map:</label>
                        <input className="bg-gray-200" type="text" />
                    </div>
                    <div className="flex justify-between gap-2">
                        <label htmlFor="">map lvl from:</label>
                        <input className="bg-gray-200" type="text" />
                    </div>
                    <div className="flex justify-between gap-2">
                        <label htmlFor="">map lvl to:</label>
                        <input className="bg-gray-200" type="text" />
                    </div>
                    <div className="flex justify-between gap-2">
                        <label htmlFor="">tier:</label>
                        <input className="bg-gray-200" type="text" />
                    </div>
                    <div className="flex justify-between gap-2">
                        <label htmlFor="">monster:</label>
                        <input className="bg-gray-200" type="text" />
                    </div>
                    <div className="flex justify-between gap-2">
                        <label htmlFor="">add hat img:</label>
                        <input className="" type="file" />
                    </div>
                    <div className="flex justify-between gap-2">
                        <label htmlFor="">add map img:</label>
                        <input className="" type="file" />
                    </div>
                    <div className="flex justify-between gap-2">
                        <label htmlFor="">add info img:</label>
                        <input className="" type="file" />
                    </div>

                    <input
                        className='bg-[#a27b5c] cursor-pointer py-2 text-white hover:opacity-80 transition-all duration-200'
                        value="add"
                        type="button" />

                </form>
            </div>
        </Modal>
    )
}
export default AddNewHatModal;