import React from "react";
import {Section} from "react-fullpage";
import ProfileImage from "./ProfileImage";
import styled from "styled-components";
import Item from "./Item";

const Wrapper = styled.div`
    padding-top: 51px;

    .inner {
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

        @media all and (max-width: 650px) {
            .item {
                width: 100%;
            }

            .item + .item {
                margin-left: 0;
            }
        }

        .info-container {
            background-color: #f9f9f9; /* 밝은 배경 색상 */
            padding: 10px; /* 내부 여백 */
            border-radius: 8px; /* 모서리 둥글게 */
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 살짝의 그림자 효과 */
        }

        .info-container p {
            margin: 10px 0; /* 각 문단의 상하 여백 */
            font-size: 1.2rem; /* 글자 크기 */
            color: #333; /* 글자 색상 */
        }

        .info-container strong {
            color: #131230; /* 강조할 텍스트 색상 */
        }
        .about-container {
            background-color: #f2f2f2; /* 밝은 배경 색상 */
            padding: 20px; /* 내부 여백 */
            border-radius: 8px; /* 모서리 둥글게 */
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 살짝의 그림자 효과 */
        }

        .about-container p {
            margin: 10px 0; /* 각 문단의 상하 여백 */
            font-size: 1.2rem; /* 글자 크기 */
            color: #333; /* 글자 색상 */
        }
    }
`;
const InfoAbout = () => {
    return (
        <Section>
            <Wrapper>
                <ProfileImage/>
                <div className="layout-width inner">
                    <Item title="INFO">
                        <div className="info-container">
                            <p><strong>이름:</strong> 이인석</p>
                            <p><strong>전화번호:</strong> 010-7722-5089</p>
                            <p><strong>이메일:</strong> syt06137@naver.com</p>
                            <p><strong>생년월일:</strong> 1999년 05월 17일</p>
                            <p><strong>학력:</strong> 숭실대학교 전자공학과 졸업</p>
                            <p><strong>직책:</strong> Full Stack Developer</p>
                            <p><strong>주요 프로젝트:</strong> NonNull 논문 관리 시스템</p>
                            <p><strong>기술 스택:</strong> Java, Spring Boot, React, Next.js, Oracle, Docker, AWS</p>
                            <p><strong>GitHub:</strong> <a href="https://github.com/inseokLee999"
                                                           target="_blank">github.com/inseokLee999</a></p>
                            <p><strong>포트폴리오:</strong> <a href="http://nonnull.life" target="_blank">nonnull.life</a>,<a
                                href="http://maratanghuru.xyz" target="_blank">여행어때?</a></p>
                        </div>
                    </Item>
                    <Item title="ABOUT">
                        <div className="about-container">
                            <p>안녕하세요! 저는 전자공학을 전공한 개발자 이인석입니다.</p>
                            <p>여러 프로젝트 경험을 통해 프론트엔드와 백엔드 개발을 두루 경험하였으며, 협업과 지속 가능한 소프트웨어 개발을 중요하게 생각합니다.</p>
                        </div>
                    </Item>
                </div>
            </Wrapper>
        </Section>
    );
};

export default React.memo(InfoAbout);
