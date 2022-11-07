import { useState } from 'react';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedbackState = name => {
    switch (name) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default: console.log(feedbackState)
    }
  };

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () =>
    Math.round((good / countTotalFeedback()) * 100);

  const total = countTotalFeedback();
  const positiveFeedback = countPositiveFeedbackPercentage();
  const options = ['Good', 'Neutral', 'Bad'];

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={feedbackState}
        />
      </Section>
      <Section title="Statistics">
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positiveFeedback={positiveFeedback}
          />
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </Section>
    </>
  );
}

// class App extends Component {
// state = {
//   good: 0,
//   neutral: 0,
//   bad: 0,
// };

// feedbackState = name => this.setState(prev => ({ [name]: prev[name] + 1 }));

// countTotalFeedback = () =>
//   this.state.good + this.state.neutral + this.state.bad;

// countPositiveFeedbackPercentage = () =>
//   Math.round((this.state.good / this.countTotalFeedback()) * 100);

// render() {
//   const { good, neutral, bad } = this.state;
// const total = this.countTotalFeedback();
// const positiveFeedback = this.countPositiveFeedbackPercentage();
// const options = ['Good', 'Neutral', 'Bad'];

// return (
//   <>
//     <Section title="Please leave feedback">
//       <FeedbackOptions
//         options={options}
//         onLeaveFeedback={this.feedbackState}
//       />
//     </Section>
//     <Section title="Statistics">
//       {total > 0
//         ?
//         <Statistics
//           good={good}
//           neutral={neutral}
//           bad={bad}
//           total={total}
//           positiveFeedback={positiveFeedback}

//         />
//         : <Notification message="There is no feedback"></Notification>
//       }
//     </Section>
//   </>

//     );
//   }
// }

// export default App;
