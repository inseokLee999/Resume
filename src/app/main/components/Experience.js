import React from "react";
import {Section} from "react-fullpage";
import styled from "styled-components";
import Item from "./Item";

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

    @media all and (max-width: 650px) {
        .item {
            width: 100%;
        }

        .item + .item {
            margin-left: 0;
        }
    }

    .description {
        font-size: 1.2rem; /* 글자 크기 */
        line-height: 1.8; /* 행간 조정으로 가독성 향상 */
        color: #333; /* 부드러운 검정색으로 설정 */
        letter-spacing: 0.5px; /* 글자 간격을 약간 늘려서 깔끔하게 */
        padding: 10px 15px; /* 텍스트 주변에 여백을 줘서 읽기 쉽게 */
        border-left: 4px solid #131230; /* 왼쪽에 포인트를 주는 선 추가 */
        background-color: #f9f9f9; /* 배경 색상을 약간 밝게 */
        border-radius: 8px; /* 모서리를 둥글게 처리 */
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* 살짝의 그림자 효과 */
    }
    strong{
        font-size: 1.4rem;
    }
    span {
        font-size: 1.1rem; /* span 글자 크기 */
        line-height: 1.8; /* line-height를 description과 맞춤 */
        display: block; /* span을 블록 요소로 설정하여 줄 바꿈 */
        text-align: center; /* 텍스트 중앙 정렬 */
    }
`;
const Experience = () => {
    return (
        <Section>
            <Wrapper className="layout-width first">
                <Item title="EDUCATION">
                    <div className="description">
                        <div style={{marginBottom: '8px'}}>
                            <strong>운중고등학교</strong>
                            <span style={{float: 'right'}}>2015.03 ~ 2018.02</span>
                            <br/>
                            졸업
                        </div>
                        <div>
                            <strong>숭실대학교</strong> (전자공학과)
                            <span style={{float: 'right'}}>2018.03 ~ 2024.02</span>
                            <br/>
                            졸업
                        </div>
                    </div>
                </Item>
                <Item title="WORK EXPERIENCE">
                    <div className="description">
                        <div>
                            <strong>숭실대학교 AI보안연구센터</strong>
                            <span style={{float: 'right'}}>2023.09 ~ 2023.12</span>
                            <br/>
                        </div>
                    </div>
                </Item>
            </Wrapper>
            <Wrapper className="layout-width">
                <Item title="CERTIFICATE">
                    <div className="description">
                        <strong>어학 성적:</strong> TOEIC 920점
                        <div style={{marginBottom: '8px'}}>
                            <strong>SQLD (SQL개발자)</strong>
                            <span style={{float: 'right'}}>발급기관: 한국데이터산업진흥원</span>
                            <br/>
                            취득일: 2023.07.07
                        </div>
                        <div style={{marginBottom: '8px'}}>
                            <strong>ADSP (데이터분석준전문가)</strong>
                            <span style={{float: 'right'}}>발급기관: 한국데이터산업진흥원</span>
                            <br/>
                            취득일: 2023.09.15
                        </div>
                        <div>
                            <strong>정보처리기사</strong>
                            <span style={{float: 'right'}}>발급기관: 한국산업인력공단</span>
                            <br/>
                            취득일: 2024.09.10
                        </div>
                        <div>
                            <strong>운전면허 1종보통</strong>
                            <span style={{float: 'right'}}>발급기관: 경기남부지방경찰청</span>
                            <br/>
                            취득일: 2018.08.14
                        </div>
                    </div>
                </Item>
                <Item title="SKILL">
                    <div className="description">
                        <strong>Frontend:</strong> React, Next.js, JavaScript (ES6+), HTML5, CSS3
                        <br/>
                        <strong>Backend:</strong> Java, Spring Boot, Spring Security
                        <br/>
                        <strong>DevOps:</strong> Docker, Jenkins, AWS
                        <br/>
                        <strong>Database:</strong> Oracle, SQL
                        <br/>
                        <strong>Tools:</strong> Git, GitHub, DBeaver
                    </div>
                </Item>
            </Wrapper>
            <Wrapper className="layout-width">
                <Item title="AWARDS">
                    <div className="description">
                        <div>
                            <strong>2023 사업화 및 지적재산권 아이디어 공모전 - 2위</strong>
                            <span style={{float: 'right'}}>2023.11.08</span>
                            <br/>
                            작품명 : 대형화물차 사각지대 사고예방을 위한 센서 자동제어 시스템
                        </div>
                        <div>
                            <strong>프로젝트 발표회 - 대상</strong>
                            <span style={{float: 'right'}}>2023.11.08</span>
                            <br/>
                            작품명 : 학습 및 연구 논문 관리(MSA를 활용한 유연하고 확장 가능한 논문 조회 및 업로드 서비스 구현)
                        </div>
                    </div>
                </Item>

                <Item title="EDUCATIONAL BACKGROUND">
                    <div className="description">
                        <div>
                            <strong>SW 개발자 양성 교육</strong>
                            <span style={{float: 'right'}}>2023.09 ~ 2023.11</span>
                            <br/>
                            GIT에 대해 다룬 강의(비전공자 과정)와 소스 코드 개발 및 활용을 위한<br/>
                            웹프로그래밍(전공자 과정) 교육
                        </div>
                        <div>
                            <strong>K-Digital Training</strong>
                            <span style={{float: 'right'}}>2024.03 ~ 2024.09</span>
                            <br/>
                            프로젝트 기반 자바(JAVA) SW개발자 취업과정
                        </div>
                    </div>
                </Item>
            </Wrapper>
        </Section>
    );
};

export default React.memo(Experience);
