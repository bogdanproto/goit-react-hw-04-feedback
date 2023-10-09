import { Button, ButtonBox } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonBox>
      {Object.keys(options).map(item => (
        <Button id={item} type="button" key={item} onClick={onLeaveFeedback}>
          {item}
        </Button>
      ))}
    </ButtonBox>
  );
};
