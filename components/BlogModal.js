import { useEffect } from 'react';
import BiginForm from './BiginForm';
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ['latin'] });

export default function BlogModal(props) {
    const {language, UTMSource, UTMMedium, UTMCampaign} = props;
  useEffect(() => {
    const fieldsToHide = ['CONTACTCF1'];

        fieldsToHide.forEach((fieldName) => {
            const fieldElement = document.querySelector(`[name="${fieldName}"]`);
            if (fieldElement) {
                const fieldRow = fieldElement.closest('.wf-row');
                if (fieldRow) {
                    fieldRow.style.display = 'none';
                }
            }
        });
    }, []);

  return (
    <div
    id="BlogModal"
    // data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabIndex="-1"
    aria-labelledby="blogLabel"
    aria-hidden="true"
    >
    <div
      className={`!w-full !mx-auto !p-6 ${inter.className}`}
      style={{
        maxWidth: '536px',
        backgroundColor: '#F0F2FF',
      }}>
            <div style={{
                        fontWeight: '400',
                        color: '#4B2AAD',
                    }} className={`wf-header ${inter.className}`}>

                <BiginForm
                headingtxt="Enquire about our Program today!"
                btntxt="Book a Call"
                language={language}
                UTMSource={UTMSource}
                UTMMedium={UTMMedium}
                UTMCampaign={UTMCampaign}/>          
            </div>
        </div>
    </div>
  );
}
