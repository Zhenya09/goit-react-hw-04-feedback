import PropTypes from 'prop-types'; 
import { Container, Button } from './FeedbackOptions.styled'; 

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <Container>

      {options.map((name) => {
        return (
          <Button
            key={name}
            hoverType={name}
            onClick={() => onLeaveFeedback(name)}
          >
            {name}
          </Button>
        );
      })}
    </Container>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired, 
  options: PropTypes.arrayOf(PropTypes.oneOf(['good', 'neutral', 'bad']))
    .isRequired,
};


