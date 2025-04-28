import Questions from './Questions';
import Styles from './FAQ.module.scss';

function FAQ(props) {
  const { faqs } = props;
  return (
    <section id="feedback" className="!mt-12 lg:!m-12">
      <h2 className="text-center !p-1 !pb-2 lg:!pb-12 !mt-0 !mb-2">
        <span className={Styles.feedback}>Frequently Asked Questions</span>
      </h2>

      {faqs.map((faq) => (
        <Questions faq={faq} key={faq.id} />
      ))}
    </section>
  );
}

export default FAQ;
