import Modal from "./Modal";
import { SetStateAction, useEffect, useState } from "react";


interface AddNewHat {
    show: boolean;
    setShow: (show: boolean) => void;
}


const AddNewHatModal: React.FC<AddNewHat> = ({ show, setShow }) => {

    const [name, setName] = useState("")
    const [map, setMap] = useState("")
    const [lvlFrom, setLvlFrom] = useState(0)
    const [lvlTo, setLvlTo] = useState(0)
    const [tier, setTier] = useState("")
    const [monsters, setMonsters] = useState<{ monsterName: string }[]>([]);


    //img
    // const [uploadImg, setUploadImg] = useState(false)
    const [selectedImg, setSelectedImg] = useState("")
    const [hatImg, setHatImg] = useState<File>()


    //map
    // const [uploadMap, setUploadMap] = useState(false)
    const [selectedMap, setSelectedMap] = useState("")
    const [mapImg, setMapImg] = useState<File>()


    //info
    // const [uploadInfo, setUploadInfo] = useState(false)
    const [selectedInfo, setSelectedInfo] = useState("")
    const [infoImg, setInfoImg] = useState<File>()



    const handleAddHat = async () => {
        try {
            const hatImgName = hatImg ? hatImg.name : "";
            const mapImgName = mapImg ? mapImg.name : "";
            const infoName = infoImg ? infoImg.name : "";

            const response = await fetch("/api/hatred", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    hatName: name,
                    mapName: map,
                    mapLvlFrom: lvlFrom,
                    mapLvlTo: lvlTo,
                    tier: tier,
                    monsters: monsters,
                    hatImg: hatImgName,
                    mapImg: mapImgName,
                    info: infoName,
                    monster: monsters
                })

            })
            if (response.ok) {
                console.log("Hat added successfully");
            } else {
                console.error("Failed to add hat");
            }
        } catch (error) {
            console.error("Error occurred while adding hat:", error);
        }

    }

    const uploadImgFunc = async (img: File) => {
        try {
            if (!img) return

            const formData = new FormData()
            formData.append("myImg", img)
            const response = await fetch("/api/uploadImgs", {
                method: "POST",
                body: formData
            })
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

    const uploadMapFunc = async (map: File) => {
        try {
            if (!map) return

            const formData = new FormData()
            formData.append("myMap", map)
            const response = await fetch("/api/uploadImgs", {
                method: "POST",
                body: formData
            })
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

    const uploadInfoFunc = async (info: File) => {
        try {
            if (!info) return

            const formData = new FormData()
            formData.append("myInfo", info)
            const response = await fetch("/api/uploadImgs", {
                method: "POST",
                body: formData
            })
            console.log(response)
        } catch (error) {
            console.log(error)
        }

    }



    const handleMonsterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const monsterNames = e.target.value.split(",").map((name) => name.trim());

        const monsterObjects = monsterNames.map((name) => ({ monsterName: name }));

        setMonsters(monsterObjects);
    };






    return (
        <Modal show={show} setShow={setShow} title="Add New Hat">
            <div className="flex flex-col gap-5">
                <form
                    className="flex flex-col gap-5"
                    action="">
                    <div className="flex justify-between gap-2">
                        <label htmlFor="">hat name:</label>
                        <input className="bg-gray-200" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="flex justify-between gap-2">
                        <label htmlFor="">map:</label>
                        <input
                            className="bg-gray-200" type="text"
                            value={map}
                            onChange={(e) => setMap(e.target.value)} />
                    </div>
                    <div className="flex justify-between gap-2">
                        <label htmlFor="">map lvl from:</label>
                        <input
                            className="bg-gray-200" type="text"
                            value={lvlFrom}
                            onChange={(e) => setLvlFrom(Number(e.target.value))} />
                    </div>
                    <div className="flex justify-between gap-2">
                        <label htmlFor="">map lvl to:</label>
                        <input
                            className="bg-gray-200" type="text"
                            value={lvlTo}
                            onChange={(e) => setLvlTo(Number(e.target.value))} />
                    </div>
                    <div className="flex justify-between gap-2">
                        <label htmlFor="">tier:</label>
                        <input
                            className="bg-gray-200" type="text"
                            value={tier}
                            onChange={(e) => setTier(e.target.value)} />
                    </div>
                    <div className="flex justify-between gap-2">
                        <label htmlFor="">monster:</label>
                        <input
                            className="bg-gray-200" type="text"
                            value={monsters.map((monster) => monster.monsterName).join(", ")}
                            onChange={handleMonsterChange} />
                    </div>

                    <div className="flex justify-between gap-2">
                        <label htmlFor="">add hat img:</label>
                        <input
                            className=""
                            type="file"
                            onChange={({ target }) => {
                                if (target.files) {
                                    const file = target.files[0]
                                    setSelectedImg(URL.createObjectURL(file))
                                    uploadImgFunc(file);
                                    setHatImg(file)
                                }
                            }} />
                    </div>
                    <div className="flex justify-between gap-2">
                        <label htmlFor="">add map img:</label>
                        <input
                            className=""
                            type="file"
                            onChange={({ target }) => {
                                if (target.files) {
                                    const file = target.files[0]
                                    setSelectedMap(URL.createObjectURL(file))
                                    uploadMapFunc(file)
                                    setMapImg(file)
                                }
                            }}
                        />
                    </div>
                    <div className="flex justify-between gap-2">
                        <label htmlFor="">add info img:</label>
                        <input
                            className=""
                            type="file"
                            onChange={({ target }) => {
                                if (target.files) {
                                    const file = target.files[0]
                                    setSelectedInfo(URL.createObjectURL(file))
                                    uploadInfoFunc(file)
                                    setInfoImg(file)
                                }
                            }} />
                    </div>

                    <input
                        onClick={() => {
                            handleAddHat()
                        }}
                        className='bg-[#a27b5c] cursor-pointer py-2 text-white hover:opacity-80 transition-all duration-200'
                        value="add"
                        type="button" />

                </form>
            </div>
        </Modal>
    )
}
export default AddNewHatModal;