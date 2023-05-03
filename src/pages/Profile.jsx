import React, { useContext, useState } from 'react';
import Modal from 'react-modal';
import { AuthContext } from '../providers/AuthProvider';
import { FaUserAlt } from 'react-icons/fa';
import { toast } from 'react-hot-toast';

Modal.setAppElement('#root');

const Profile = () => {
    const { user, updateUser } = useContext(AuthContext)

    // Modal Info

    const [modalIsOpen, setIsOpen] = useState(false)
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    }
    function openModal() {
        setIsOpen(true);
    }

 

    function closeModal() {
        setIsOpen(false);
    }

    const handleEdit = event =>{
        event.preventDefault()

        const form = event.target
        const name = form.name.value
        const photo = form.photo.value

        closeModal()

        updateUser(name, photo)
        .then(()=>{
            toast.success('Profile Updated. Please Reload your page')
            window.location.reload()
        })
        .catch(error =>(
            toast.error(error.message)
        ))

    }

    return (
        <main>
            <section className='md:flex justify-between gap-4 items-center bg-orange-300 p-6 rounded-md'>
                <div className='md:w-1/2'>
                    {
                        user?.photoURL ?
                            <img src={user?.photoURL} alt="User Photo" className='rounded-md w-1/2' /> :
                            <FaUserAlt className='text-9xl cursor-pointer' title={user?.displayName}></FaUserAlt>
                    }
                </div>
                <div className='md:w-1/2'>
                    <h3 className='text-3xl font-semibold my-3'>{user?.displayName}</h3>
                    {user?.email && <p className='text-xl'><span className='font-semibold'>Email:</span> {user?.email}</p>}
                    <button className="magic-btn mt-4" onClick={openModal}>Edit Info</button>
                </div>
            </section>

            {/* Modal */}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div>
                    <form onSubmit={handleEdit}>
                        <div className="form-controls">
                            <label htmlFor="name">Name:</label>
                            <input type="text" name="name" id="name" required placeholder='Your Name' />
                        </div>
                        <div className="form-controls">
                            <label htmlFor="photo">Photo URL:</label>
                            <input type="text" name="photo" id="photo" required placeholder='Your Photo URL' />
                        </div>
                        <input type="submit" value="Upadate" className='magic-btn cursor-pointer mt-2' />
                    </form>
                </div>
            </Modal>
        </main>
    );
};

export default Profile;