import React from 'react';
import PropTypes from 'prop-types';
import { Styled } from './StyleFeedback';

const Feedback = ({ onLeaveFeedback, options }) => {
  return (
    <Styled.Wrapper>
      {options.map((name, i) => {
        return (
          <Styled.Button
            key={name}
            hoverType={name}
            onClick={() => onLeaveFeedback(name)}
          >
            {name}
          </Styled.Button>
        );
      })}
    </Styled.Wrapper>
  );
};

Feedback.propTypes = {
  options: PropTypes.arrayOf(PropTypes.oneOf(['good', 'neutral', 'bad']))
    .isRequired,
};

export default Feedback;
