
import { useState } from "react";
import AddNewHatModal from "../../components/AddNewHatModal";
import requireAuthentication from "../../components/WithAuthentication"



const Dashboard = () => {
    const [showModal, setShowModal] = useState(false)

    return (
        <div className='flex flex-col justify-start items-center gap-10 bg-[#2C3639] min-h-screen pb-20'>
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
            <AddNewHatModal show={showModal} setShow={setShowModal} />

        </div>
    );
}

const AuthenticatedDashboard = requireAuthentication(Dashboard);

export default AuthenticatedDashboard;