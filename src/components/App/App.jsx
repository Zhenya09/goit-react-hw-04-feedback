import { useState } from 'react';
import { Section } from '../Section/Section';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Statistics } from '../Statistics/Statistics';
import { Notification } from 'components/Notification/Notification'; 
import { Container } from './App.syled';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => { 
    return good + neutral + bad;
  };

  // const onLeaveFeedback = (option) => {
  //   if (option === 'good') setGood(prev => prev + 1);
  //   if (option === 'neutral') setNeutral(prev => prev + 1);
  //   if (option === 'bad') setBad(prev => prev + 1);
  // }

  const onLeaveFeedback = (option) => {
  switch (option) {
    case 'good':
      setGood((prev) => prev + 1);
      break;
    case 'neutral':
      setNeutral((prev) => prev + 1);
      break;
    case 'bad':
      setBad((prev) => prev + 1);
      break;
    default:
      break;
  }
}

  const countPositiveFeedbackPercentage = () => {
    return Math.floor((good / (good + neutral + bad)) * 100 || 0); 
  };

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys({ good, neutral, bad })}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">

        {countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback yet..." />
        ) : (
          <Statistics
            options={Object.keys({ good, neutral, bad })}
            statistic={{ good, neutral, bad }}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        )}
      </Section>
    </Container>
  );
};

