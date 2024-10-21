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
        font-size: 1.5rem; /* 글자 크기 */
        line-height: 1.8; /* 행간 조정으로 가독성 향상 */
        color: #333; /* 부드러운 검정색으로 설정 */
        letter-spacing: 0.5px; /* 글자 간격을 약간 늘려서 깔끔하게 */
        padding: 10px 15px; /* 텍스트 주변에 여백을 줘서 읽기 쉽게 */
        border-left: 4px solid #131230; /* 왼쪽에 포인트를 주는 선 추가 */
        background-color: #f9f9f9; /* 배경 색상을 약간 밝게 */
        border-radius: 8px; /* 모서리를 둥글게 처리 */
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* 살짝의 그림자 효과 */
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
        </Section>
    );
};

export default React.memo(Experience);
