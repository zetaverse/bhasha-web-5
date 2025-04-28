var mndFileds=new Array('Last\x20Name','Mobile','CONTACTCF3','CONTACTCF1');
   var fldLangVal=new Array('Name','Mobile','City','Language');
  var wfInnerWidth = window.innerWidth;
  if(wfInnerWidth <= 768){
  document.forms['BiginWebToRecordForm471816000001556773'].setAttribute('data-ux-form-alignment', 'top');
  }
var name='';
var email='';
function removeError(fieldObj) {
  var parentElement = fieldObj.parentElement.parentElement,
  childEle = parentElement.getElementsByClassName('wf-field-error')[0];
  if(childEle) {
  parentElement.classList.remove('wf-field-error-active');
  parentElement.removeChild(parentElement.getElementsByClassName('wf-field-error')[0]);
  }
  }
  function setError(fieldObj, label) {
  var parentElement = fieldObj.parentElement.parentElement,
  childEle = parentElement.getElementsByClassName('wf-field-error')[0];
  if(!childEle) {
  var spanEle = document.createElement('SPAN');
  spanEle.setAttribute('class', 'wf-field-error');
  spanEle.innerHTML = label;
  parentElement.append(spanEle);
  parentElement.classList.add('wf-field-error-active');
  }
  }
  function validateFields471816000001556773() {
  var isReturn = true;
  var form = document.forms['BiginWebToRecordForm471816000001556773'];
  var validateFld = form.querySelectorAll('[fvalidate=true]');
  var i;
  for (i = 0; i < validateFld.length; i++)
  {
  var validateFldVal = validateFld[i].value;
  if(validateFldVal !== '') {
  var fLabel = validateFld[i].parentElement.parentElement.parentElement.getElementsByClassName('wf-label')[0].innerHTML;
  switch(validateFld[i].getAttribute('ftype')) {
  case 'email':
  if(validateFldVal.match(/^([A-Za-z0-9-._%'+/]+@[A-Za-z0-9.-]+.[a-zA-Z]{2,22})$/) === null) {
  setError(validateFld[i], 'Enter valid ' + fLabel);
  isReturn = false;
  }
  break;
  case 'number':
  if(validateFldVal.match(/^[0-9]+$/) === null) {
  setError(validateFld[i], 'Enter valid ' + fLabel);
  isReturn = false;
  }
  break;
  case 'double':
  if(validateFldVal.match(/^[0-9]*(\.[0-9]{0,2})?$/) === null) {
  setError(validateFld[i], 'Enter valid ' + fLabel);
  isReturn = false;
  }
  break;
  case 'mobile':
  if(validateFldVal.match(/^[0-9a-zA-Z+.()\-;\s]+$/) === null) {
  setError(validateFld[i], 'Enter valid ' + fLabel);
  isReturn = false;
  }
  break;
  }
  }
  }
  return isReturn;
  }

function checkMandatory471816000001556773() {
var isReturn = true;
for(i=0;i<mndFileds.length;i++) {
 var fieldObj=document.forms['BiginWebToRecordForm471816000001556773'][mndFileds[i]];
 if(fieldObj) {
if (((fieldObj.value).replace(/^\s+|\s+$/g, '')).length==0) {
if(fieldObj.type =='file')
{
setError(fieldObj, 'Please select a file to upload.');
isReturn = false;
}
setError(fieldObj, fldLangVal[i] + ' cannot be empty');
isReturn= false;
}  else if(fieldObj.nodeName=='SELECT') {
if(fieldObj.options[fieldObj.selectedIndex].value=='-None-') {
setError(fieldObj, fldLangVal[i] +' cannot be none.');
isReturn = false;
  }
} else if(fieldObj.type =='checkbox'){
  if(fieldObj.checked == false){
setError(fieldObj, 'Please accept  '+fldLangVal[i]);
isReturn= false;
}
}
   }
}
if(!validateFields471816000001556773()){isReturn = false;}
if(!isReturn){
var errEle = document.getElementsByClassName('wf-field-error');
if(errEle && errEle.length >0){
var inputEle = errEle[0].parentElement.getElementsByTagName('input');
if(inputEle && inputEle.length == 0) {
inputEle = errEle[0].parentElement.getElementsByTagName('select');
}
if(inputEle && inputEle.length > 0) {
inputEle[0].focus();
}
}
}
return isReturn;
}

 
// document.getElementById('hidden471816000001556773Frame').addEventListener('load', function () {
// try {
// var doc = arguments[0].currentTarget.contentWindow.document;
// if(doc.body.childElementCount !== 0) {
// arguments[0].currentTarget.style.display = 'block';
// document.getElementById('BiginWebToRecordForm1000000105005').style.display = 'none';
// }
// } catch (error) {
// arguments[0].currentTarget.style.display = 'block';
// document.getElementById('BiginWebToRecordForm471816000001556773').style.display = 'none'
// }
// });


// function disableSubmitwhileReset471816000000314048() {
//   const submitbutton = document.getElementById('formsubmit471816000000314048');
//   if (
//     document.getElementById('privacyTool471816000000314048') !== null ||
//     document.getElementById('consentTool') !== null
//   ) {
//     submitbutton.disabled = true;
//     submitbutton.style.opacity = '0.5;';
//   } else {
//     submitbutton.removeAttribute('disabled');
//   }
// }

// function checkMandatory471816000000314048() {
//   const mndFields = new Array('Last Name', 'Mobile', 'Email', 'CONTACTCF3');
//   const fldLangVal = new Array('Full Name', 'Mobile', 'Email', 'City');
//   let i;
//   const mndFieldslength = mndFields.length;
//   let fieldObj;
//   for (i = 0; i < mndFieldslength; i++) {
//     fieldObj =
//       document.forms.BiginWebToContactForm471816000000314048[mndFields[i]];
//     if (fieldObj) {
//       if (fieldObj.value.replace(/^s+|s+$/g, '').length === 0) {
//         if (fieldObj.type === 'file') {
//           alert('Please select a file to upload.');
//           fieldObj.focus();
//           return false;
//         }
//         alert(`${fldLangVal[i]} cannot be empty.`);
//         fieldObj.focus();
//         return false;
//       }
//       if (fieldObj.nodeName === 'SELECT') {
//         if (fieldObj.options[fieldObj.selectedIndex].value === '-None-') {
//           alert(`${fldLangVal[i]} cannot be none.`);
//           fieldObj.focus();
//           return false;
//         }
//       } else if (fieldObj.type === 'checkbox') {
//         if (fieldObj.checked === false) {
//           alert(`Please accept  ${fldLangVal[i]}`);
//           fieldObj.focus();
//           return false;
//         }
//       }
//       if (fieldObj.name === 'Last Name' && fieldObj.value) {
//         name = fieldObj.value;
//       }
//     }
//   }
//   return true;
// }
// function validateFileUpload() {
//   const e = document.getElementById('theFile');
//   let t = 0;
//   if (e) {
//     if (e.files.length > 3)
//       return alert('You can upload a maximum of three files at a time.'), !1;
//     if ('files' in e) {
//       const i = e.files.length;
//       if (i !== 0) {
//         for (let o = 0; o < i; o++) {
//           const a = e.files[o];
//           'size' in a && (t += a.size);
//         }
//         if (t > 20971520)
//           return alert('Total file(s) size should not exceed 20MB.'), !1;
//       }
//     }
//   }
//   return !0;
// }
