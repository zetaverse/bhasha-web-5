import { useEffect, useState } from 'react';
import Script from 'next/script';
import './PopupForm.module.scss';

export default function BiginForm(props) {
  const { language, displayTitle, UTMSource, UTMMedium, UTMCampaign, btntxt = "Send Your Enquiry", headingtxt = "Fill in your details" } = props;
  // const { language, displayTitle, UTMSource, UTMMedium, UTMCampaign } = props;
  const [selectedLanguage, setSelectedLanguage] = useState(language);

  useEffect(() => {
    if (language) {
      setSelectedLanguage(() => language);
    }
    const formScript = document.getElementById(
      'BiginWebToRecordForm471816000001556773'
    );
    const z = document.createElement('script');
    z.innerHTML = `
      function validateForm() {
        return validateForm471816000001556773();
      }
      function validateForm471816000001556773() {
        if((typeof checkMandatory !== "undefined" && checkMandatory()) || (typeof checkMandatory471816000001556773 !== "undefined" && checkMandatory471816000001556773())) {
          var formname = document.getElementById('BiginWebToRecordForm471816000001556773');
          if(formname) {
            formname.action = "https://bigin.zoho.in/crm/WebForm";
            formname.className = formname.className + " wf-form-paid";
            formname.submit();
          }
        } else {
          event.preventDefault();
          return false;
        }
      }
    `;
    formScript.appendChild(z);
  }, [language]);

  return (
    <>
    
    {/* <iframe id='hidden471816000001556773Frame' name='hidden471816000001556773Frame' style={{display: 'none'}} class='iframe-container'></iframe><div class='wf-parent' style={{backgroundColor: '#EAEEF2'}}></div> */}
    
    <div className='wf-wrapper' id='BiginWebToRecordFormDiv471816000001556773'>
<meta name='viewport' content='width=device-width, initial-scale=1.0'/>
<meta httpEquiv='content-type' content='text/html;charset=UTF-8'/>
<form id='BiginWebToRecordForm471816000001556773' name='BiginWebToRecordForm471816000001556773' className='wf-form-component !pt-4' data-ux-form-alignment='top' style={{position: "relative",fontSize:"15px"}}  method='POST' encType='multipart/form-data' 
// target='hidden471816000001556773Frame' 
onSubmit={()=> validateForm471816000001556773()} acceptCharset='UTF-8'>
{/* <!-- Do not remove this code. --> */}
  {/* <input type='text' style={{display:'none'}} name='xnQsjsdp' value='f2301da59cf1ad786b73756d76d148d47a02959550027a65fc597dbd2cac3eae'/> */}
  <input type='text' style={{display:'none'}} name='xnQsjsdp' defaultValue='f2301da59cf1ad786b73756d76d148d47a02959550027a65fc597dbd2cac3eae'/>

  <input type='hidden' name='zc_gad' id='zc_gad' />
  {/* <input type='text' style={{display:'none'}} name='xmIwtLD' value='8e7808245f4c1c00cf0ec19d0a2e5a323dee3a64290026330264d3fbce662fccf73870301c4af27dac92503df22b645c'/>
  <input type='text' style={{display:'none'}} name='actionType' value='Q29udGFjdHM='/>
  <input type='hidden' name='rmsg' id='rmsg' value='true'/>
  <input type='text' style={{display:'none'}} name='returnURL' value={`https://bhasha.io/testimonials?feedback=true&lang=${selectedLanguage}`} /> */}
  <input type='text' style={{display:'none'}} name='xmIwtLD' defaultValue='8e7808245f4c1c00cf0ec19d0a2e5a323dee3a64290026330264d3fbce662fccf73870301c4af27dac92503df22b645c'/>
  <input type='text' style={{display:'none'}} name='actionType' defaultValue='Q29udGFjdHM='/>
  <input type='hidden' name='rmsg' id='rmsg' defaultValue='true'/>
  <input type='text' style={{display:'none'}} name='returnURL' value={`https://bhasha.io/testimonials?feedback=true&lang=${selectedLanguage}`} readOnly />
  <div style={
            displayTitle
              ? { display: 'none' }
              : {
                  fontSize: '28px',
                  fontWeight: '500',
                  marginBottom: '15px',
                  wordBreak: 'break-word',
                  textAlign: 'start',
                }
          // } className='wf-header'>Fill in your details</div>
          } className='wf-header'>{headingtxt}</div>
  <div id='elementDiv471816000001556773' className='wf-form-wrapper'   style={{
            border: 0,
            color: 'black',
            textAlign: 'left',
            fontSize: '15',
            display: 'flex',
            flexDirection: 'column',
          }}>
  <div className={language ? 'bgn-wf-row' : 'bgn-wf-row !pt-4'}>  
  <div className='wf-label' style={{ display: 'none' }}>Name</div>
  <div className='wf-field wf-field-mandatory'>
  <div className='wf-field-inner'>
  <input name='Last Name' maxLength='80' type='text' 
  //  
  className='wf-field-item wf-field-input' 
  // onInput={removeError(this)}
            defaultValue=""
            placeholder="Full name"
            style={{
              border: '1px solid #e2e0df',
              padding: '12px',
              borderRadius: '8px',
              margin: '1rem 0',
              width: '100%',
              backgroundColor:"white"
            }}/>
  </div>
  <div className='wf-field-help-text'>
  </div>
  </div>
  </div>
  <div className='wf-row'>  
  <div className='wf-label' style={{ display: 'none' }}>Mobile</div>
  <div className='wf-field wf-field-mandatory'>
  <div className='wf-field-inner'>
  <input fvalidate='true' ftype='mobile' name='Mobile' maxLength='30' type='text'  className='wf-field-item wf-field-input' 
  // onInput={removeError(this)}  
   defaultValue=""
                placeholder="Contact Number"
                style={{
                  border: '1px solid #e2e0df',
                  padding: '12px',
                  borderRadius: '8px',
                  width: '100%',
                  margin: '1rem 0',
                  backgroundColor:"white"
                }}/>
  </div>
  </div>
  </div>
  <div className='wf-row'>  
  <div className='wf-label' style={{ display: 'none' }}>Email</div>
  <div className='wf-field'>
  <div className='wf-field-inner'>
  <input fvalidate='true' ftype='email' name='Email' maxLength='100' type='text'  className='wf-field-item wf-field-input' 
  // onInput={removeError(this)}  
  defaultValue=""
                placeholder="E-mail address"
                style={{
                  border: '1px solid #e2e0df',
                  padding: '12px',
                  borderRadius: '8px',
                  width: '100%',
                  margin: '1rem 0',
                  backgroundColor:"white"
                }}/>
  </div>
  </div>
  </div>
  <div className='wf-row'>  
  <div className='wf-label' style={{ display: 'none' }}>City</div>
  <div className='wf-field wf-field-mandatory'>
  <div className='wf-field-inner'>
  <input name='CONTACTCF3' maxLength='255' type='text'  className='wf-field-item wf-field-input'
  //  onInput={removeError(this)}
   defaultValue=""
         placeholder="City"
         style={{
           border: '1px solid #e2e0df',
           padding: '12px',
           borderRadius: '8px',
           width: '100%',
           margin: '1rem 0',
           backgroundColor:"white"
         }}/>
  </div>
  </div>
  </div>
  <div className='wf-row !pb-4' style={language? {display:'none'}: {}}>  
  <div className='wf-label' style={{ display: 'none' }}>Language</div>
  <div className='wf-field wf-field-mandatory'>
  <div className='wf-field-inner'>
  <select name='CONTACTCF1' className='wf-field-item wf-field-dropdown  bg-white' data-wform-field='select' 
  // onchange='removeError(this);'
    onChange={(e) => {setSelectedLanguage(() => e.target.value) }}
    value={selectedLanguage}
         style={{
           border: '1px solid #e2e0df',
           padding: '12px',
           borderRadius: '8px',
           width: '100%',
           margin: '1rem 0',
           backgroundColor:"white",
           color: 'gray',
         }}>
  <option value='-None-' >Language</option>
  {/* <option value='kannada' selected={selectedLanguage === 'kannada'}>Kannada</option>
  <option value='telugu' selected={selectedLanguage === 'telugu'}>Telugu</option>
  <option value='hindi' selected={selectedLanguage === 'hindi'}>Hindi</option>
  <option value='malayalam' selected={selectedLanguage === 'malayalam'}>Malayalam</option>
  <option value='marathi' selected={selectedLanguage === 'marathi'}>Marathi</option>
  <option value='tamil' selected={selectedLanguage === 'tamil'}>Tamil</option>
  <option value='bengali' selected={selectedLanguage === 'bengali'}>Bengali</option>
  <option value='gujarati' selected={selectedLanguage === 'gujurati'}>Gujarati</option>
  <option value='punjabi' selected={selectedLanguage === 'punjabi'}>Punjabi</option>
  <option value='english' selected={selectedLanguage === 'english'}>English</option> */}
  <option value='kannada'>Kannada</option>
  <option value='telugu'>Telugu</option>
  <option value='hindi'>Hindi</option>
  <option value='malayalam'>Malayalam</option>
  <option value='marathi'>Marathi</option>
  <option value='tamil'>Tamil</option>
  <option value='bengali'>Bengali</option>
  <option value='gujarati'>Gujarati</option>
  <option value='punjabi'>Punjabi</option>
  <option value='english'>English</option>
  </select>
  </div>
  <div className='wf-field-help-text'>
  </div>
  </div>
  </div>
  <div className='wf-row' style={{display:'none'}}>  
  <div className='wf-label'>utm_source</div>
  <div className='wf-field'>
  <div className='wf-field-inner'>
  <input name='CONTACTCF5' maxLength='255' type='text'  className='wf-field-item wf-field-input'
  //  onInput={removeError(this)} 
  defaultValue={UTMSource}/>
  </div>
  </div>
  </div>
  <div className='wf-row' style={{display:'none'}}>  
  <div className='wf-label'>utm_medium</div>
  <div className='wf-field'>
  <div className='wf-field-inner'>
  <input name='CONTACTCF6' maxLength='255' type='text'  className='wf-field-item wf-field-input'
  //  onInput={removeError(this)}
   defaultValue={UTMMedium}/>
  </div>
  </div>
  </div>
  <div className='wf-row' style={{display:'none'}}>  
  <div className='wf-label'>utm_campaign</div>
  <div className='wf-field'>
  <div className='wf-field-inner'>
  <input name='CONTACTCF7' maxLength='255' type='text'  className='wf-field-item wf-field-input' 
  // onInput={removeError(this)} 
  defaultValue={UTMCampaign}/>
  </div>
  <div className='wf-field-help-text'>
  </div>
  </div>
  </div>
  <div className='wf-row wf-btn-row'>
  <div className='wf-label' data-ux-empty-label='true'></div>
  <div className='wform-btn-wrap'>
  <button
                className="text-white bg-[#4B2AAD] !px-12 !rounded-md border-0 !w-full !mb-6 !p-2 cursor-pointer"
                style={{textDecoration: 'none',
                  boxShadow: '0 4px 4px rgba(0, 0, 0, 0.25)'
                }}
                id="formsubmit"
                type="submit"
                value={language ? 'Submit' : 'Enquire Now'}
              >
       <span style={{ fontWeight: '500', fontSize: '20px' }}>
        {language ? 'Submit Details' : btntxt}
        {/* {language ? 'Submit Details' : "Send Your Enquiry"} */}
        </span>
      </button>
  {/* <input id='formsubmit' type='submit' class='wf-btn' style={{backgroundColor:"#1980d8", color: "#fff", border: "1px solid #1980d8", width: "auto"}} value='Submit'
  /> */}
  </div></div>
  
</div>
<Script src="/FormFunctions.js" />
</form>

</div>
</>
);

    //  {/* <div */}
    //   className="bgn-wf-wrapper"
    //   id="BiginWebToEntityFormDiv471816000000314048"
    //   style={{
    //     color: 'black',
    //   }}
    // >
    //   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    //   <meta httpEquiv="content-type" content="text/html;charset=UTF-8" />
    //   <form
    //     id="BiginWebToContactForm471816000000314048"
    //     name="BiginWebToContactForm471816000000314048"
    //     method="POST"
    //     encType="multipart/form-data"
    //     // eslint-disable-next-line no-undef
    //     onSubmit={() => validateForm471816000000314048()}
    //     acceptCharset="UTF-8"
    //     style={{ margin: 0 }}
    //   >
    //     <input
    //       type="text"
    //       style={{ display: 'none' }}
    //       name="xnQsjsdp"
    //       defaultValue="d5fb8ee6da247e043152a01264ef641070ed7d5c13988eaed46e3204d4f91c57"
    //     />
    //     <input type="hidden" name="zc_gad" id="zc_gad" defaultValue="" />
    //     <input
    //       type="text"
    //       style={{ display: 'none' }}
    //       name="xmIwtLD"
    //       defaultValue="057df71492b11d0c5448941b307fd09f21d0058f09994e1d8c8f5eaf6425188b"
    //     />
    //     <input
    //       type="text"
    //       style={{ display: 'none' }}
    //       name="actionType"
    //       defaultValue="Q29udGFjdHM="
    //     />

    //     <input
    //       type="text"
    //       style={{ display: 'none' }}
    //       name="returnURL"
    //       defaultValue={`https://bhasha.io/testimonials?feedback=true&lang=${selectedLanguage}`}
    //     />

    //     <div
    //       style={
    //         displayTitle
    //           ? { display: 'none' }
    //           : {
    //               fontSize: '28px',
    //               fontWeight: '500',
    //               marginBottom: '15px',
    //               wordBreak: 'break-word',
    //               textAlign: 'start',
    //             }
    //       }
    //     >
    //       Fill in your details
    //     </div>
    //     <div
    //       id="elementDiv471816000000314048"
    //       style={{
    //         border: 0,
    //         color: 'black',
    //         textAlign: 'left',
    //         fontSize: '15',
    //         display: 'flex',
    //         flexDirection: 'column',
    //       }}
    //     >
    //       <div className={language ? 'bgn-wf-row' : 'bgn-wf-row pt-3'}>
            /* <div className="bgn-wf-label">
                      Last Name
                      <span className="bgn-star">&#42;</span>
                    </div> */
          //   <div className="bgn-wf-field">
          //     <input
          //       name="Last Name"
          //       type="text"
          //       maxLength="80"
          //       defaultValue=""
          //       placeholder="Full name"
          //       style={{
          //         border: '1px solid #e2e0df',
          //         padding: '12px',
          //         borderRadius: '8px',
          //         margin: '1rem 0',
          //         width: '100%',
          //       }}
          //     />
          //   </div>
          // </div>
          // <div className="bgn-wf-row">
            /* <div className="bgn-wf-label">
                      Mobile
                      <span className="bgn-star">&#42;</span>
                    </div> */
          //   <div className="bgn-wf-field">
          //     <input
          //       name="Mobile"
          //       type="text"
          //       maxLength="30"
          //       defaultValue=""
          //       placeholder="Contact Number"
          //       style={{
          //         border: '1px solid #e2e0df',
          //         padding: '12px',
          //         borderRadius: '8px',
          //         width: '100%',
          //         margin: '1rem 0',
          //       }}
          //     />
          //   </div>
          // </div>
          // <div className="bgn-wf-row">
            /* <div className="bgn-wf-label">
                      Email
                      <span className="bgn-star">&#42;</span>
                    </div> */
          //   <div className="bgn-wf-field">
          //     <input
          //       name="Email"
          //       type="email"
          //       maxLength="100"
          //       defaultValue=""
          //       placeholder="E-mail address"
          //       style={{
          //         border: '1px solid #e2e0df',
          //         padding: '12px',
          //         borderRadius: '8px',
          //         width: '100%',
          //         margin: '1rem 0',
          //       }}
          //     />
          //   </div>
          // </div>
          // <div className="bgn-wf-row">
            /* <div className="bgn-wf-label">
                      City
                      <span className="bgn-star">&#42;</span>
                    </div> */
          //   <div className="bgn-wf-field">
          //     <input
          //       name="CONTACTCF3"
          //       type="text"
          //       maxLength="255"
          //       defaultValue=""
          //       placeholder="City"
          //       style={{
          //         border: '1px solid #e2e0df',
          //         padding: '12px',
          //         borderRadius: '8px',
          //         width: '100%',
          //         margin: '1rem 0',
          //       }}
          //     />
          //   </div>
          // </div>
          // <div
          //   className="bgn-wf-row"
          //   style={language ? { display: 'none' } : {}}
          // >
            /* <div className="bgn-wf-label">Language</div> */
            // <div className="bgn-wf-field">
            //   <select
            //     name="CONTACTCF1"
            //     style={{
            //       border: '1px solid #e2e0df',
            //       padding: '12px',
            //       width: '100%',
            //       borderRadius: '8px',
            //       margin: '1rem 0',
            //       color: 'gray',
            //     }}
            //     value={selectedLanguage}
            //     onChange={(e) => setSelectedLanguage(() => e.target.value)}
            //   >
            //     <option selected="true" disabled="disabled" value="-None-">
            //       Language
            //     </option>
            //     <option
            //       value="kannada"
            //       selected={selectedLanguage === 'kannada'}
            //     >
            //       Kannada
            //     </option>
            //     <option value="telugu" selected={selectedLanguage === 'telugu'}>
            //       Telugu
            //     </option>
            //     <option value="hindi" selected={selectedLanguage === 'hindi'}>
            //       Hindi
            //     </option>
            //     <option
            //       value="malayalam"
            //       selected={selectedLanguage === 'malayalam'}
            //     >
            //       Malayalam
            //     </option>
            //     <option
            //       value="marathi"
            //       selected={selectedLanguage === 'marathi'}
            //     >
            //       Marathi
            //     </option>
            //     <option value="tamil" selected={selectedLanguage === 'tamil'}>
            //       Tamil
            //     </option>
            //     <option
            //       value="bengali"
            //       selected={selectedLanguage === 'bengali'}
            //     >
            //       Bengali
            //     </option>
                /* <option value="English">English</option> */
          //     </select>
          //   </div>
          // </div>
          // <div className="bgn-wf-row" style={{ margin: '1rem 0' }}>
          //   <div className="bgn-wf-label" />
          //   <div className="bgn-wf-field">
              /* <input
                        onClick="disableSubmitwhileReset471816000000314048()"
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
                      /> */
        //       <button
        //         className="text-light bg-body-primary bg-primary text-decoration-none p-1 px-5 rounded shadow-sm border-0 w-100 mb-4 p-2"
        //         id="formsubmit471816000000314048"
        //         type="submit"
        //         value={language ? 'Submit' : 'Enroll Today'}
        //       >
        //         <span style={{ fontWeight: '500', fontSize: '20px' }}>
        //           {language ? 'Submit' : 'Enroll Today'}
        //         </span>
        //       </button>
        //     </div>
        //   </div>
        // </div>
        
    //   </form>
    // </div>
  
}
