import { useEffect, useState } from 'react';
import Script from 'next/script';
import './PopupForm.module.scss';

export default function BiginForm(props) {
  const { language, displayTitle } = props;
  const [selectedLanguage, setSelectedLanguage] = useState('none');
  useEffect(() => {
    const formScript = document.getElementById(
      'BiginWebToContactForm471816000000314084'
    );
    const z = document.createElement('script');
    z.innerHTML =
      'var formname = document.BiginWebToContactForm; if(!formname){ formname = document.BiginWebToContactForm471816000000314084 } formname.action = "https://bigin.zoho.in/crm/WebToContactForm";function validateForm() {  return validateForm471816000000314084();  }function validateForm471816000000314084() {  if((typeof checkMandatory !== "undefined" && checkMandatory()) || (typeof checkMandatory471816000000314084 !== "undefined" && checkMandatory471816000000314084())) {var formname = document.BiginWebToContactForm; if(!formname){ formname = document.BiginWebToContactForm471816000000314084 }  formname.submit();  }else{  event.preventDefault();  return false;  }  }';
    formScript.appendChild(z);
  });
  return (
    <div
      className="bgn-wf-wrapper"
      id="BiginWebToEntityFormDiv471816000000314084"
      style={{
        color: 'black',
      }}
    >
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="content-type" content="text/html;charset=UTF-8" />
      <form
        id="BiginWebToContactForm471816000000314084"
        name="BiginWebToContactForm471816000000314084"
        method="POST"
        encType="multipart/form-data"
        // eslint-disable-next-line no-undef
        onSubmit={() => validateForm471816000000314084()}
        acceptCharset="UTF-8"
        style={{ margin: 0 }}
      >
        <input
          type="text"
          style={{ display: 'none' }}
          name="xnQsjsdp"
          defaultValue="d5fb8ee6da247e043152a01264ef641070ed7d5c13988eaed46e3204d4f91c57"
        />
        <input type="hidden" name="zc_gad" id="zc_gad" defaultValue="" />
        <input
          type="text"
          style={{ display: 'none' }}
          name="xmIwtLD"
          defaultValue="057df71492b11d0c5448941b307fd09f21d0058f09994e1d8c8f5eaf6425188b"
        />
        <input
          type="text"
          style={{ display: 'none' }}
          name="actionType"
          defaultValue="Q29udGFjdHM="
        />

        <input
          type="text"
          style={{ display: 'none' }}
          name="returnURL"
          defaultValue={`https://bhasha.io/testimonials?feedback=true&lang=${selectedLanguage}`}
        />

        <div
          style={
            displayTitle
              ? { display: 'none' }
              : {
                  fontSize: '28px',
                  fontWeight: '500',
                  marginBottom: '15px',
                  wordBreak: 'break-word',
                  textAlign: 'start',
                }
          }
        >
          Fill in your details
        </div>
        <div
          id="elementDiv471816000000314084"
          style={{
            border: 0,
            color: 'black',
            textAlign: 'left',
            fontSize: '15',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div className={language ? 'bgn-wf-row' : 'bgn-wf-row pt-3'}>
            {/* <div className="bgn-wf-label">
                      Last Name
                      <span className="bgn-star">&#42;</span>
                    </div> */}
            <div className="bgn-wf-field">
              <input
                name="Last Name"
                type="text"
                maxLength="80"
                defaultValue=""
                placeholder="Full name"
                style={{
                  border: '1px solid #e2e0df',
                  padding: '12px',
                  borderRadius: '8px',
                  margin: '1rem 0',
                  width: '100%',
                }}
              />
            </div>
          </div>
          <div className="bgn-wf-row">
            {/* <div className="bgn-wf-label">
                      Mobile
                      <span className="bgn-star">&#42;</span>
                    </div> */}
            <div className="bgn-wf-field">
              <input
                name="Mobile"
                type="text"
                maxLength="30"
                defaultValue=""
                placeholder="Contact Number"
                style={{
                  border: '1px solid #e2e0df',
                  padding: '12px',
                  borderRadius: '8px',
                  width: '100%',
                  margin: '1rem 0',
                }}
              />
            </div>
          </div>
          <div className="bgn-wf-row">
            {/* <div className="bgn-wf-label">
                      Email
                      <span className="bgn-star">&#42;</span>
                    </div> */}
            <div className="bgn-wf-field">
              <input
                name="Email"
                type="email"
                maxLength="100"
                defaultValue=""
                placeholder="E-mail address"
                style={{
                  border: '1px solid #e2e0df',
                  padding: '12px',
                  borderRadius: '8px',
                  width: '100%',
                  margin: '1rem 0',
                }}
              />
            </div>
          </div>
          <div className="bgn-wf-row">
            {/* <div className="bgn-wf-label">
                      City
                      <span className="bgn-star">&#42;</span>
                    </div> */}
            <div className="bgn-wf-field">
              <input
                name="CONTACTCF3"
                type="text"
                maxLength="255"
                defaultValue=""
                placeholder="City"
                style={{
                  border: '1px solid #e2e0df',
                  padding: '12px',
                  borderRadius: '8px',
                  width: '100%',
                  margin: '1rem 0',
                }}
              />
            </div>
          </div>
          <div
            className="bgn-wf-row"
            style={language ? { display: 'none' } : {}}
          >
            {/* <div className="bgn-wf-label">Language</div> */}
            <div className="bgn-wf-field">
              <select
                name="CONTACTCF1"
                style={{
                  border: '1px solid #e2e0df',
                  padding: '12px',
                  width: '100%',
                  borderRadius: '8px',
                  margin: '1rem 0',
                  backgroundColor: 'white',
                  // color: 'gray',
                }}
                defaultValue={language || 'Language'}
                onChange={(e) => setSelectedLanguage(() => e.target.value)}
              >
                <option value="-None-">Language</option>
                <option value="kannada">Kannada</option>
                <option value="telugu">Telugu</option>
                <option value="hindi">Hindi</option>
                <option value="malayalam">Malayalam</option>
                <option value="marathi">Marathi</option>
                <option value="tamil">Tamil</option>
                <option value="bengali">Bengali</option>
                {/* <option value="English">English</option> */}
              </select>
            </div>
          </div>
          <div className="bgn-wf-row" style={{ margin: '1rem 0' }}>
            <div className="bgn-wf-label" />
            <div className="bgn-wf-field">
              {/* <input
                        onClick="disableSubmitwhileReset471816000000314084()"
                        type="reset"
                        style={{
                          margin: '10px',
                         
                          fontSize: '13px',
                          borderRadius: '3px',
                          verticalAlign: 'middle',
                          backgroundColor: '#fff',
                          borderColor: '#222',
                          padding: '8px 15px',
                          color: '#3c3c3c',
                          border: 'solid 1px #d4d3d2',
                          display: 'inline-block',
                          width: 'auto',
                        }}
                        value="Reset"
                      /> */}
              <button
                className="text-light bg-body-primary bg-primary text-decoration-none p-1 px-5 rounded shadow-sm border-0 w-100 mb-2 p-2"
                id="formsubmit471816000000314084"
                type="submit"
                value={language ? 'Secure Your Spot' : 'Send Your Enquiry'}
              >
                <span style={{ fontWeight: '500', fontSize: '20px' }}>
                  {language ? 'Secure Your Spot' : 'Send Your Enquiry'}
                </span>
              </button>
            </div>
          </div>
        </div>
        <Script src="FormFunctionsCopy.js" />
      </form>
    </div>
  );
}
