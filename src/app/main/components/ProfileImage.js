import React from "react";
import styled from "styled-components";
const ProfileImage = ({ className }) => {
  return (
    <div className={className}>
      <div className="layout-width">
        <div className="tit">
          <span>RESUME</span>
          이인석
        </div>
      </div>
    </div>
  );
};

const StyledProfileImage = styled(ProfileImage)`
  background: #b2b2b2 url("/images/profile_sample.png") no-repeat
    calc(50% + 318px) bottom;
  height: 450px;
  padding: 50px 30px 10px 30px;
  position: relative;
  @media all and (max-width: 650px) {
    & {
      background-position: center bottom;
    }
  }
  .tit {
    position: absolute;
    bottom: 10px;
    font-size: 1.35rem;
    span {
      font-size: 2rem;
      margin-right: 10px;
      letter-spacing: -1px;
    }
  }
`;
export default React.memo(StyledProfileImage);
