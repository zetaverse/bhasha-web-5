function disableSubmitwhileReset471816000000314084() {
  const submitbutton = document.getElementById('formsubmit471816000000314084');
  if (
    document.getElementById('privacyTool471816000000314084') !== null ||
    document.getElementById('consentTool') !== null
  ) {
    submitbutton.disabled = true;
    submitbutton.style.opacity = '0.5;';
  } else {
    submitbutton.removeAttribute('disabled');
  }
}

function checkMandatory471816000000314084() {
  const mndFields = new Array('Last Name', 'Mobile', 'Email', 'CONTACTCF3');
  const fldLangVal = new Array('Full Name', 'Mobile', 'Email', 'City');
  let i;
  const mndFieldslength = mndFields.length;
  let fieldObj;
  for (i = 0; i < mndFieldslength; i++) {
    fieldObj =
      document.forms.BiginWebToContactForm471816000000314084[mndFields[i]];
    if (fieldObj) {
      if (fieldObj.value.replace(/^s+|s+$/g, '').length === 0) {
        if (fieldObj.type === 'file') {
          alert('Please select a file to upload.');
          fieldObj.focus();
          return false;
        }
        alert(`${fldLangVal[i]} cannot be empty.`);
        fieldObj.focus();
        return false;
      }
      if (fieldObj.nodeName === 'SELECT') {
        if (fieldObj.options[fieldObj.selectedIndex].value === '-None-') {
          alert(`${fldLangVal[i]} cannot be none.`);
          fieldObj.focus();
          return false;
        }
      } else if (fieldObj.type === 'checkbox') {
        if (fieldObj.checked === false) {
          alert(`Please accept  ${fldLangVal[i]}`);
          fieldObj.focus();
          return false;
        }
      }
      if (fieldObj.name === 'Last Name' && fieldObj.value) {
        name = fieldObj.value;
      }
    }
  }
  return true;
}
function validateFileUpload() {
  const e = document.getElementById('theFile');
  let t = 0;
  if (e) {
    if (e.files.length > 3)
      return alert('You can upload a maximum of three files at a time.'), !1;
    if ('files' in e) {
      const i = e.files.length;
      if (i !== 0) {
        for (let o = 0; o < i; o++) {
          const a = e.files[o];
          'size' in a && (t += a.size);
        }
        if (t > 20971520)
          return alert('Total file(s) size should not exceed 20MB.'), !1;
      }
    }
  }
  return !0;
}
