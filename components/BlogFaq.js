import BlogQuestions from './BlogQuestions';
import BlogFaqStyles from './BlogFaq.module.scss';

function BlogFaq({ faqs }) {
  return (
    <section id="feedback" className={`!mt-12 lg:!m-12 ${BlogFaqStyles['faq-container']}`}>
      {Object.values(faqs).map((faq) => (
        <BlogQuestions faq={faq} key={faq.id} />
      ))}
    </section>
  );
}

export default BlogFaq;
