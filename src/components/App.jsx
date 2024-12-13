import Description from "./Description/Description";
import Feedback from "./Feedback/Feedback";
import Options from "./Options/Options";
import Notification from "./Notification/Notification";
import { useState, useEffect } from "react";

const App = () => {
  const feedbackValues = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [state, setState] = useState(() => {
    const storageFeedback = window.localStorage.getItem("feedback");
    if (storageFeedback === null) return feedbackValues;
    return JSON.parse(storageFeedback);
  });

  const { good, neutral, bad } = state;
  const totalFeedback = good + neutral + bad;
  const positiveFeedback = Math.round((good / totalFeedback) * 100);

  const updateFeedback = (feedbackType) => {
    if (feedbackType === "reset") {
      setState(feedbackValues);
      return;
    }

    setState((prev) => ({ ...prev, [feedbackType]: prev[feedbackType] + 1 }));
  };

  useEffect(() => {
    window.localStorage.setItem("feedback", JSON.stringify(state));
  }, [state]);

  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} />
      {totalFeedback > 0 ? (
        <Feedback
          state={state}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
};
export default App;
