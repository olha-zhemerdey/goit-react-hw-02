import css from "./Feedback.module.css";

const Feedback = ({
  totalFeedback,
  state: { good, neutral, bad },
  positiveFeedback,
}) => {
  return (
    <ul className={css.list}>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {totalFeedback}</li>
      <li>Positive: {positiveFeedback}%</li>
    </ul>
  );
};

export default Feedback;
