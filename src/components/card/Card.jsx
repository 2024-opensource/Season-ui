import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Rating from './Rating';

const CardStyle = styled.div`
  width: ${({ width }) => width}px;
  height: ${({ width }) => width * 1.5}px;
  background-color: #b03b26;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ width }) => width * 0.1}px;
  color: white;
  text-align: center;
  margin: 0;
`;

const ImagePlaceholder = styled.img`
  width: 90%;
  height: ${({ width }) => width * 0.75}px;
  background-color: white;
  border-radius: 10px;
  margin-bottom: ${({ width }) => width * 0.05}px;
  object-fit: cover;
`;

const SkeletonPlaceholder = styled.div`
  width: 90%;
  height: ${({ width }) => width * 0.75}px;
  background: linear-gradient(-135deg, #e0e0e0 25%, #f5f5f5 50%, #e0e0e0 75%);
  background-size: 200% 100%;
  border-radius: 10px;
  margin-bottom: ${({ width }) => width * 0.05}px;
  animation: skeleton-loading 3s infinite linear;

  @keyframes skeleton-loading {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`;

const Title = styled.h3`
  font-size: ${({ width }) => width * 0.09}px;
  margin: ${({ width }) => width * 0.02}px 0 ${({ width }) => width * 0.01}px 0;
`;

const Description = styled.p`
  font-size: ${({ width }) => width * 0.06}px;
  margin: 0;
`;

const IconRow = styled.div`
  display: flex;
  justify-content: center;
  margin: ${({ width }) => width * 0.03}px 0;
`;

const HireButton = styled.button`
  padding: ${({ width }) => width * 0.05}px ${({ width }) => width * 0.1}px;
  background-color: #f3dfcd;
  color: #b03b26;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
  margin-top: ${({ width }) => width * 0.05}px;
  font-size: ${({ width }) => width * 0.06}px;

  &:hover {
    background-color: #e3cbbf;
  }
`;

const Card = ({ title, description, buttonText, width, imageSrc }) => {
  const iconWidth = width * 0.15;

  return (
    <CardStyle width={width}>
      {imageSrc ? (
        <ImagePlaceholder src={imageSrc} width={width} />
      ) : (
        <SkeletonPlaceholder width={width} />
      )}
      <Title width={width}>{title}</Title>
      <Description width={width}>{description}</Description>
      <IconRow width={width}>
        <Rating totalStars={5} iconWidth={iconWidth} />
      </IconRow>
      <HireButton width={width}>{buttonText}</HireButton>
    </CardStyle>
  );
};

export default Card;

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  width: PropTypes.number,
  imageSrc: PropTypes.string,
};

Card.defaultProps = {
  title: '루돌프 이름',
  description: '저 밥 조금만 먹어요',
  buttonText: 'Hire Me',
  width: 200,
  imageSrc: '',
};
