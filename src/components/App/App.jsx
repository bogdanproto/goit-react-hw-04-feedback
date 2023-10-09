import { useState } from 'react';
import { Section } from 'components/Section/Section';
import { Statistics } from 'components/Statistics/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Notification } from 'components/Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  //count each options
  function onLeaveFeedback(evt) {
    const { id } = evt.target;
    switch (id) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;
      default:
        return;
    }
  }

  const total = good + bad + neutral;
  const precentPositive = Math.round((good * 100) / total);

  return (
    <Section title="Please leave feedback">
      <FeedbackOptions
        options={{ good, bad, neutral }}
        onLeaveFeedback={onLeaveFeedback}
      />

      <h2>Statistics</h2>
      {total ? (
        <Statistics
          stats={{ good, bad, neutral }}
          total={total}
          positivePercentage={precentPositive}
        />
      ) : (
        <Notification message="There is no feedback" />
      )}
    </Section>
  );
};
