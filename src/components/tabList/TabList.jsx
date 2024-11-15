import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { ReactComponent as Hat } from '../../icons/hat.svg';
import { ReactComponent as BladHead } from '../../icons/bald head.svg';

const TabList = ({ tabs }) => {
  const [selectedTab, setSelectedTab] = useState(null);

  return (
    <TabsContainer>
      {tabs.map((tab, index) => (
        <Tab key={index} onClick={() => setSelectedTab(index)}>
          <IconWrapper>
            <BladHead />
            {selectedTab === index && <AnimatedHat />}
          </IconWrapper>
          <Label>{tab.label}</Label>
        </Tab>
      ))}
    </TabsContainer>
  );
};

export default TabList;

TabList.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
    })
  ),
};

TabList.defaultProps = {
  tabs: [{ label: 'Home' }, { label: 'About' }, { label: 'Event' }],
};

const TabsContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  padding: 20px;
  width: 450px;
`;

const Tab = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Label = styled.span`
  position: absolute;
  top: 70%;
  transform: translateY(-50%);
  font-size: 18px;
  font-weight: bold;
  color: black;
  pointer-events: none;
`;

const AnimatedHat = styled(Hat)`
  position: absolute;
  top: -35px;
  transition: transform 0.3s ease;
  transform: translateY(-20px);
  animation: hatAppear 0.5s ease forwards;

  @keyframes hatAppear {
    from {
      opacity: 0;
      transform: translateY(-50px);
    }
    to {
      opacity: 1;
      transform: translateY(-20px);
    }
  }
`;
