import React from "react";
import { Section } from "react-fullpage";
import styled from "styled-components";
const Wrapper = styled.div`
  &.first {
    padding-top: 51px;
  }
  display: flex;
  flex-wrap: wrap;
  .item {
    width: 0;
    flex-grow: 1;
    margin: 20px 0;
  }
  .item + .item {
    margin-left: 20px;
  }
`;
const Experience = () => {
  return (
    <Section>
      <h1>Education & Work Experience</h1>
    </Section>
  );
};

export default React.memo(Experience);
