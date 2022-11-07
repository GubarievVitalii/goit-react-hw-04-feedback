import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={s.btnList}>
      {options.map(option => (
        <li className={s.item}>
          <button className={s.btn} onClick={event => onLeaveFeedback(option.toLowerCase())}>
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default FeedbackOptions;
