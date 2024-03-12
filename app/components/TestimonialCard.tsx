import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface TestimonialProps {
  name: string;
  review: string;
}

const TestimonialCard = ({
  testimonial,
}: {
  testimonial: TestimonialProps;
}) => {
  return (
    <div className="dark:bg-gradient-to-br from-yellow-500 to-yellow-900 bg-white p-10 text-black dark:text-white flex flex-col text-center gap-5 border-2 dark:border-white border-black rounded-lg">
      <div className="flex justify-center">
        <FontAwesomeIcon icon={faMessage} className="dark:bg-black bg-neutral-300 border-2 border-black text-yellow-500 p-1 text-3xl rounded-md" />
      </div>
      <div className="flex flex-col gap-1">
        <span>{testimonial.name}</span>
      </div>
      <p className="font-light">{testimonial.review}</p>
    </div>
  );
};

export default TestimonialCard;