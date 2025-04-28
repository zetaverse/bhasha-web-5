import { useState } from 'react';

const defaultFormFields = {
  userName: '',
  email: '',
};

export default function PopupForm() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { userName, email } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div
      className="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h2 className="modal-title fs-5" id="staticBackdropLabel">
              Share your details and we will get back to you!
            </h2>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="Name" className="form-label text-start">
              Your Name
            </label>
            <input
              type="text"
              className="form-control"
              id="Name"
              name="userName"
              value={userName}
              onChange={handleChange}
            />

            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="InputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="InputEmail1"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="text-white bg-[#4B2AAD] !p-2 !px-6 !rounded-full shadow !border-0"
              style={{textDecoration:"none"}}
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
