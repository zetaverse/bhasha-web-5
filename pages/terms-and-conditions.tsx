import Navbar from "../components/Navbar";
import MetaManager from "../components/MetaManager";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function TermsAndConditions() {
  return (
    <>
      <MetaManager
        pageTitle="Terms and Conditions | Bhasha.io"
        pageDescription="Read Bhasha.io's terms and conditions to understand the rules, guidelines, and agreements for using our language learning services."
        pageURL="https://bhasha.io/terms-and-conditions"
        pageKeywords="Terms and Conditions, Bhasha.io, Terms of Service"
      />
      <div className="allContent">
        <Navbar />
        <div className="!m-2 lg:!mx-12 lg:!px-12 overflow-hidden text-[#212529]">
          <section id="terms-and-conditions" className={`lg:!p-1 ${inter.className}`} style={{maxWidth:"1100px", margin:"0 auto"}}>
            <br/>
            <h1 className="text-[#4B2AAD] !mb-2">
              {"Terms and Conditions".toUpperCase()}
            </h1>
            <p className="text-[#212529] opacity-75 !mb-4">Last Updated: 10<sup>th</sup> December, 2024</p>
            {/* Add your terms and conditions content sections here */}
            <p className="text-[#212529] !mb-4">Please read these Terms and Conditions carefully before enrolling in Bhasha.io’s language learning programs.</p>
            <hr className="!my-4" />
            <h2 className="text-[#1A1715] !mb-2">
              {"1. Service Description".toUpperCase()}
            </h2>
            <p className="text-[#212529] !mb-4"> 
              <b>1.1.</b> Our company Varta Labs Private Limited, provides personalized language tutoring services through qualified instructors who are selected based on their expertise and teaching experience.
            </p>
            <p className="text-[#212529] !mb-4">
              <b>1.2.</b> We offer three distinct levels of instruction, each designed to meet specific learning objectives:
            </p>
            <ul className="terms-list list-disc">
              <li>Level 1 focuses on spoken language skills, helping learners develop basic communication abilities</li>
              <li>Level 2 advances to conversational proficiency, enabling learners to engage in natural dialogue</li>
              <li>Level 3 encompasses comprehensive reading and writing skills for complete language mastery</li>
            </ul>
            <p className="text-[#212529] !mb-4">
              <b>1.3.</b> Each level consists of 20 hours of instruction, structured as progressive units that build upon previous learning. These units are carefully designed to ensure steady progression and skill development throughout the course.
            </p>
            <p className="text-[#212529] !mb-4">
              <b>1.4.</b> All instruction is delivered online through Google Meet. Learners are required to have a stable internet connection and are strongly encouraged to use Google Chrome browser to ensure optimal learning experience.
            </p>
            <p className="text-[#212529] !mb-4">
              <b>1.5.</b> Upon enrollment, Learners receive one (1) year of access to course-specific learning resources provided through a designated Google Drive folder. The following terms govern this access: 
            </p>
            <ul className="terms-list list-disc">
              <li>All course materials and resources contained within the provided Google Drive folder are the exclusive intellectual property of Varta Labs Private Limited and are protected by applicable copyright laws. 
              </li>
              <li>Access to these resources is granted on a strictly personal, non-transferable basis to the enrolled student only. 
              </li>
              <li>Learners expressly agree not to: 
              </li>
              <ul className="terms-list list-[circle]">
                <li>Copy, reproduce, or distribute any portion of the materials</li>
                <li>Share access credentials with third parties</li>
                <li>Download or attempt to download the materials for reproduction or any other purpose</li>
                <li>Create derivative works based on the provided content</li>
                <li>Use the materials for any commercial purpose</li>
              </ul>
              <li>The resources are optimized for both mobile and desktop web access. Printing capabilities have been intentionally disabled to protect intellectual property rights.</li>
              <li>Violation of these terms may result in immediate termination of access privileges and possible legal action to protect Varta Labs Private Limited's intellectual property rights.</li>
            </ul>
            <hr className="!my-4"/>
            <h2 className="text-[#1A1715] !mb-2">
              {"2. Enrollment and Course Duration".toUpperCase()}
            </h2>
            <p className="text-[#212529] !mb-4">
              <b>2.1.</b> We encourage Learners to pay the full Course fees prior to the commencement of instruction. This ensures uninterrupted access to our services and maintains our high standard of instruction.</p>
            <p className="text-[#212529] !mb-4">
              <b>2.2.</b> Upon enrollment, Learners are granted a 4-month period to complete their chosen course level. This timeframe has been established to ensure optimal learning outcomes while providing reasonable flexibility.
            </p>
            <p className="text-[#212529] !mb-4">
              <b>2.3.</b> Learners must complete all 20 hours of instruction within the stipulated 4-month period to receive full course credit and certification of completion.
            </p>
            <p className="text-[#212529] !mb-4">
              <b>2.4.</b> Learners who determine they require additional instruction to master the content of their current level may extend their coursework beyond the standard 20 sessions. These supplementary sessions are provided at the same hourly rate as the original course package. To arrange additional sessions, learners should contact their assigned Program Advisor or the Program Manager, who will assist in coordinating the extension.
            </p>
            <p className="text-[#212529] !mb-4">
              <b>2.5.</b> In cases where learners fail to complete the course within the 4-month timeframe, any remaining hours may be forfeited unless an extension has been formally agreed upon in writing with the company.
            </p>
            <hr className="!my-4"/>
            <h2 className="text-[#1A1715] !mb-2">
              {"3. Scheduling and Attendance".toUpperCase()}
            </h2>
            <p className="text-[#212529] !mb-4">
              <b>3.1.</b> At the beginning of each course, learners and trainers will collaborate to establish a regular schedule that accommodates both parties' availability and learning objectives.
            </p>
            <p className="text-[#212529] !mb-4">
              <b>3.2.</b> While we understand that circumstances may occasionally require schedule modifications, we expect learners to maintain consistent attendance to ensure effective learning progression.
            </p>
            <p className="text-[#212529] !mb-4">
              <b>3.3.</b> If a Learner wants to reschedule or cancel a session, they must provide notice of individual session rescheduling to the Trainer and their dedicated Program Manager at least 24 hours before the scheduled session. This policy allows us to make appropriate arrangements and maintain high-quality service delivery.
            </p>
            <p className="text-[#212529] !mb-4">
              <b>3.4.</b> Any individual session cancelled with less than 24 hours' notice will be counted as attended and deducted from the student's total course hours.
            </p>
            <p className="text-[#212529] !mb-4">
              <b>3.5.</b> Class Verification Process
              <ul className="terms-list">
                <li>a) At the commencement of each class session, trainers will initiate a verification process through a One Time Password (OTP) system. 
                </li>
                <li>b) The verification process operates as follows:
                  <ul className="terms-list list-[circle]">
                    <li>Learners will receive an OTP via email at the scheduled start time of their class 
                    </li>
                    <li>The OTP remains valid for five (5) minutes from the time of issuance 
                    </li>
                    <li>Learners must provide this OTP to their trainer to verify their attendance and authenticate the session
                    </li>
                  </ul>
                </li>
                <li>c) Learners are prohibited from:
                  <ul className="terms-list list-[circle]">
                    <li>Sharing OTPs with trainers outside of scheduled class times 
                    </li>
                    <li>Providing OTPs to any person other than their assigned trainer
                    </li>
                  </ul>
                </li>
                <li>d) If a trainer requests an OTP outside of scheduled class hours, Learners must:
                  <ul className="terms-list list-[circle]">
                    <li>Decline to provide the OTP
                    </li>
                    <li>Immediately report the incident to the Program Manager 
                    </li>
                    <li>Maintain a record of such requests when possible
                    </li>
                  </ul>
                </li>
                <li>e) The company reserves the right to investigate any irregular OTP usage patterns and take appropriate action to maintain the integrity of our learning programs.
                </li>
                <li>f) It is possible that sometimes a learner might not receive the OTP due to various reasons such as poor network, unknown technical errors etc. In these cases, the trainer will continue with the session without verifying the class. The trainer is then expected to reach out to the program manager who will then get in touch with the learner to manually verify the class.
                </li>
              </ul>
            </p>
            <hr className="!my-4"/>
            <h2 className="text-[#1A1715]">
              {"4. Pausing Classes".toUpperCase()}
            </h2>
            <p className="text-[#212529] !mb-4">
              <b>4.1.</b> We recognize that learners may need to temporarily pause their enrollment due to various life circumstances. The following conditions apply to course pauses:
            </p>
            <p className="text-[#212529] !mb-4">Our pause policy includes these important provisions:</p>
            <ul className="terms-list list-disc">
              <li>The company cannot guarantee retention of your original time slot after the pause period.</li>
              <li>That being said, we will make every reasonable effort to accommodate your preferred schedule upon return</li>
              <li>The original 4-month completion requirement remains in effect unless explicitly modified in writing</li>
            </ul>
            <h2 className="text-[#1A1715] !mb-2">
              {"5. Cancellation and Refunds".toUpperCase()}
            </h2>
            <p className="text-[#212529] !mb-4">
              <b>5.1.</b> Learners may request cancellation of their enrollment for the following reasons, including:
            </p>
            <ul className="terms-list list-disc">
              <li>Dissatisfaction with the quality of instruction</li>
              <li>Unexpected personal circumstances</li>
              <li>Other valid reasons that will be evaluated on a case-by-case basis</li>
            </ul>
            <p className="text-[#212529] !mb-4">
              <b>5.2.</b> Before proceeding with cancellation, we strongly encourage learners to consider the following process: 
            </p>
            <ul className="terms-list list-disc">
              <li>First, request assignment to a different trainer, as this often resolves instructional concerns</li>
              <li>Second, discuss any issues with our team, who can often find satisfactory solutions for most learners.</li>
              <li>Finally, if no resolution is reached, proceed with the formal cancellation request</li>
            </ul>
            <p className="text-[#212529] !mb-4">
              <b>5.3.</b> When cancellation is deemed necessary, the following financial terms apply:
            </p>
            <ul className="terms-list list-disc">
              <li>The refund amount will be calculated by subtracting the fees for sessions that the learner has already attended</li>
              <li>A 15% cancellation fee will be applied on the total amount paid by the learner during enrollment.</li>
              <li>Learners who have completed three or fewer classes may be eligible for a cancellation fee waiver, subject to review by management on a case-to-case basis.</li>
              <li>All approved refunds will be completed in 2-3 business days from the moment of approval.</li>
            </ul>
            <hr className="!my-4"/>
            <h2 className="text-[#1A1715] !mb-2">
              {"6. Quality Assurance".toUpperCase()}
            </h2>
            <p className="text-[#212529] !mb-4">
              <b>6.1.</b> Our commitment to educational excellence is maintained through comprehensive quality control measures:
            </p>
            <ul className="terms-list list-disc">
              <li>Regular evaluation and training of our instructors</li>
              <li>Ongoing assessment of teaching methodologies</li>
              <li>Collection and implementation of student feedback</li>
              <li>Continuous curriculum development and improvement</li>
            </ul>
            <p className="text-[#212529] !mb-4">
              <b>6.2.</b> Learners have the right to request a change of trainer if they feel their learning needs are not being met. Such requests will be evaluated and addressed promptly by the Program Management team.
            </p>
            <hr className="!my-4"/>
            <h2 className="text-[#1A1715] !mb-2">
              {"7. Learner Responsibilities".toUpperCase()}
            </h2>
            <p className="text-[#212529] !mb-4">
              <b>7.1.</b> By enrolling in our courses, learners agree to fulfill the following responsibilities:
            </p>
            <ul className="terms-list list-disc">
              <li>Maintain regular attendance in scheduled classes</li>
              <li>Complete assigned coursework and practice exercises</li>
              <li>Engage in respectful communication with instructors and staff</li>
              <li>Provide and maintain accurate contact information</li>
              <li>Adhere to established payment schedules and policies</li>
            </ul>
            <hr className="!my-4"/>
            <h2 className="text-[#1A1715] !mb-2">
              {"8. Privacy and Data Protection".toUpperCase()}
            </h2>
            <p className="text-[#212529] !mb-4">
              <b>8.1.</b> We take the protection of student information seriously and handle all personal data in accordance with applicable privacy laws and regulations.
            </p>
            <p className="text-[#212529] !mb-4">
              <b>8.2.</b> Student information is collected and used exclusively for the following purposes:
            </p>
            <ul className="terms-list list-disc">
              <li>Administration of courses and educational services</li>
              <li>Enhancement of our teaching methods and materials</li>
              <li>Essential communication regarding services and schedules</li>
              <li>Compliance with legal and regulatory requirements</li>
            </ul>
            <hr className="!my-4" />
            <h2 className="text-[#1A1715] !mb-2">
              {"9. Intellectual Property".toUpperCase()}
            </h2>
            <p className="text-[#212529] !mb-4">
              <b>9.1.</b> All course materials provided during instruction are protected by copyright and other intellectual property laws. This includes:
            </p>
            <ul className="terms-list list-disc">
              <li>Comprehensive lesson plans and curricula</li>
              <li>Custom-designed worksheets and exercises</li>
              <li>Digital learning resources and platforms</li>
              <li>Supplementary educational materials and guides</li>
            </ul>
            <p className="text-[#212529] !mb-4">
              <b>9.2.</b> These materials may not be reproduced, distributed, or shared without explicit written permission from the company management.
            </p>
            <hr className="!my-4"/>
            <h2 className="text-[#1A1715] !mb-2">
              {"10. Modifications to Terms".toUpperCase()}
            </h2>
            <p className="text-[#212529] !mb-4">
              <b>10.1.</b> We reserve the right to modify these terms and conditions as necessary to improve our services and maintain compliance with applicable laws and regulations.
            </p>
            <p className="text-[#212529] !mb-4">
              <b>10.2.</b> All current learners will receive notification of any modifications via their registered email address, with reasonable notice provided before changes take effect.
            </p>
            <hr className="!my-4"/>
            <h2 className="text-[#1A1715] !mb-2">
              {"11. Limitation of Liability".toUpperCase()}
            </h2>
            <p className="text-[#212529] !mb-4">
              <b>11.1.</b> Our financial liability is strictly limited to the amount paid for services by the student.
            </p>
            <p className="text-[#212529] !mb-4">
              <b>11.2.</b> The company cannot accept liability for:
            </p>
            <ul className="terms-list list-disc">
              <li>Technical difficulties beyond our reasonable control</li>
              <li>External events that may affect class delivery</li>
              <li>Indirect or consequential losses arising from service use</li>
            </ul>
            <hr className="!my-4"/>
            <h2 className="text-[#1A1715] !mb-2">
              {"12. Governing Law".toUpperCase()}
            </h2>
            <p className="text-[#212529] !mb-4">
              <b>12.1.</b> These terms and conditions are governed by and construed in accordance with the laws of Karnataka, India. Any disputes arising from these terms will be subject to the exclusive jurisdiction of the courts in Karnataka, India.
            </p>
            <hr className="!my-4"/>
            <h2 className="text-[#1A1715] !mb-2">
              {"13. Contact Information".toUpperCase()}
            </h2>
            <p className="text-[#212529] !mb-4">
              <b>13.1.</b> For any questions or concerns regarding these terms and conditions, please contact our customer service team at the following email address: <a href="mailto:hello@bhasha.io" style={{color: "#4B2AAD", textDecoration: "underline"}}>hello@bhasha.io</a>
            </p>
            <p className="text-[#212529] !mb-4">
              <b>13.2.</b> By enrolling in our services, you acknowledge that you have read, understood, and agree to be bound by these terms and conditions in their entirety.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}