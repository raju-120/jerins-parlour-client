import React from 'react';

const ConfirmationModal = ({title,message,closeModal,modalData,successAction,successButtonName}) => {
    return (
        <div>
            {/* The button to open modal */}
            

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4">{message}</p>
                    <div className="modal-action">
                    <label htmlFor="confirmation-modal" onClick={()=>successAction(modalData)} className="btn btn-secondary">{successButtonName}</label>
                    <button className='btn btn-outline' onClick={closeModal}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;