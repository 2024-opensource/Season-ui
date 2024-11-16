import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { ReactComponent as Santa } from '../../icons/santa.svg';

const ProgressBar = ({ progress, max }) => {
  const clampedProgress = Math.min(progress, max);
  const percentage = Math.min(Math.max(clampedProgress / max, 0), 1) * 100;

  return (
    <ProgressBarContainer>
      <Progress>
        <ProgressFill style={{ width: `${percentage}%` }} />
        <SantaIcon style={{ left: `${percentage}%` }} />
      </Progress>
    </ProgressBarContainer>
  );
};

export default ProgressBar;

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
};

ProgressBar.defaultProps = {
  progress: 50,
  max: 100,
};

const ProgressBarContainer = styled.div`
  width: 400px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Progress = styled.div`
  position: relative;
  width: 95%;
  height: 10px;
  background-color: #f1f3f5;
  border-radius: 10px;
`;

const ProgressFill = styled.div`
  height: 100%;
  background-color: #b03b26;
  transition: width 0.3s ease;
  border-radius: 10px;
`;

const SantaIcon = styled(Santa)`
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  left: ${({ style }) => style?.left || 0};
  transition: left 0.3s ease;
  width: 40px;
  height: 40px;
`;
