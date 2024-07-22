// components/ServiceDetailForm.js
import { useState } from 'react';

const ServiceDetailForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <button className="form-button" onClick={toggleModal}>Connect with Us</button>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content-form">
            <form action="#" className="row gap-3 mx-0">
              <div className='d-flex align-items-center justify-content-between'>
                <h2 className="mb-0"> Let’s <span>Connect</span> With Us</h2>
                <span className="close" onClick={toggleModal}>&times;</span>
              </div>
              <input type="text" placeholder="Full Name" className="col-12 cst-input" />
              <input type="email" placeholder="Email" className="col-12 cst-input" />
              <input type="text" placeholder="Services" className="col-12 cst-input" />
              <textarea placeholder="Description" className="col-12 cst-input"></textarea>
              <button type="submit" className='theme-btn'>Submit</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ServiceDetailForm;
