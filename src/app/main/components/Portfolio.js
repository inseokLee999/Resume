import React, {useState, useCallback} from "react";
import {Section} from "react-fullpage";
import Image from "next/image";
import styled from "styled-components";
import classNames from "classnames";

const Tab1Content = () => {
    return (
        <>
            <Image
                src="/images/nonnull.png"
                className="pageImage"
                width={800}
                height={500}
                alt="포트폴리오 이미지"
            />
            <div className="description">
                <p>
                    <strong>NONNULL</strong>은 대학생, 교수, 학자 등 연구 활동을 하는 모든 사람을 대상으로, 논문 및 연구자료를 체계적으로 관리하며 학술 연구를 진행하는 데
                    필요한 다양한 기능을 제공하는 웹 플랫폼입니다.
                </p>
                <p>
                    NONNULL에서는 자신의 논문을 등록하여 여러 연구 활동에 공헌하고, 등록된 수많은 논문 자료를 공유함으로써 학문의 이해를 넓히는 데 도움을 주고자 합니다.
                    또한 관심 있는 논문을 찜하여 참고할 자료를 빠르게 확인할 수 있으며, 댓글을 통해 다양한 의견을 공유할 수 있는 특별한 서비스를 제공합니다.
                </p>
                <p>
                    이와 함께, 사용자의 검색 기록과 관심 분야를 기반으로 <strong>개인 맞춤형 논문 추천</strong> 기능을 제공하여, 원하는 논문을 보다 효율적으로 찾을 수 있도록
                    지원합니다.
                    또한, 학문 카테고리별 트렌드와 직업 그룹별 검색 기록 통계를 시각화하여 연구 활동에 필요한 다양한 정보를 제공합니다.
                </p>
                <a href="https://github.com/project34plus" target="_blank">
                    <strong>GitHub 바로가기</strong>
                </a>
            </div>

        </>
    );
};

const Tab2Content = () => {
    return (
        <>
            <Image
                src="/images/maratanghuru.png"
                width={800}
                height={500}
                alt="포트폴리오 이미지"
            />
            <div className="description">
                <p>
                    <strong>"여행어때?"</strong>는 한국관광공사 데이터를 기반으로 이용자 맞춤형 여행 정보를 제공하는 플랫폼입니다.
                    한국관광공사의 여행지 API를 활용하여 다양한 여행지 정보를 제공합니다.
                </p>
                <p>
                    사용자의 성별, 나이 등을 고려한 <strong>개인화된 추천 서비스</strong>를 제공하며,
                    커뮤니티 기능을 통해 여행 계획을 세우고 후기를 공유할 수 있습니다.
                </p>
                <a href="https://github.com/Class502GroupStudy4/G9Project4" target="_blank"><strong>GitHub 바로가기</strong></a>
            </div>

        </>
    );
};

const Tab3Content = () => {
    return (
        <>
            <Image
                src="/images/pokemon.png"
                width={800}
                height={500}
                alt="포트폴리오 이미지"
            />
            <div className="description">
                <p>
                    <strong>포켓몬 API</strong>를 활용하여 <em>포켓몬 도감, 게임, 뽑기, 게시판</em> 등의 다양한 기능을 구현한 프로젝트입니다.
                </p>
                <a href="https://www.youtube.com/watch?v=hXwrj8Rhu60" target="_blank">
                    <strong>사이트 구현 영상 보러가기</strong>
                </a><br/>
                <a href="https://github.com/Class502GroupStudy4/pokemonProject" target="_blank">
                    <strong>GitHub 바로가기</strong>
                </a>
            </div>
        </>
    );
};

const items = {
    tab1: {
        title: "NonNull",
        Content: Tab1Content,
        siteUrl: "http://nonnull.life",
    },
    tab2: {
        title: "여행 어때?",
        Content: Tab2Content,
        siteUrl: "http://maratanghuru.xyz/app",
    },
    tab3: {
        title: "포켓몬도감",
        Content: Tab3Content,
        // siteUrl: "#",
    },
};

const Wrapper = styled.div`
    padding-top: 100px;

    .tab-group {
        display: flex;
        height: 45px;
        border-bottom: 2px solid #000;

        li {
            padding: 0 25px;
            cursor: pointer;
            border: 1px solid #000;
            border-bottom: 0;
            margin-right: 5px;
            line-height: 42px;
            font-size: 1.4rem;
        }

        .on {
            color: #fff;
            background-color: #131230;
        }

    }

    .pageImage {
        width: 80%;
    }

    .title {
        font-size: 2rem;
    }

    a {
        font-size: 1.1rem;
        color: #800020;
    }

    .description {
        width: 80%;
        font-size: 1.2rem;
    }
`;

const Portfolio = () => {
    const [item, setItem] = useState(items.tab1);
    const [tab, setTab] = useState("tab1");

    const onClick = useCallback((tab) => {
        setItem(items[tab]);
        setTab(tab);
    }, []);

    const {title, Content, siteUrl} = item;

    return (
        <Section>
            <Wrapper className="layout-width">
                <h2>PORTFOLIO</h2>

                <ul className="tab-group">
                    <li
                        onClick={() => onClick("tab1")}
                        className={classNames({on: tab === "tab1"})}
                    >
                        논문관리 프로그램
                    </li>
                    <li
                        onClick={() => onClick("tab2")}
                        className={classNames({on: tab === "tab2"})}
                    >
                        여행지추천 프로그램
                    </li>
                    <li
                        onClick={() => onClick("tab3")}
                        className={classNames({on: tab === "tab3"})}
                    >
                        포켓몬 도감
                    </li>
                </ul>
                <div className="tab-content">
                    <div className="title">{title}</div>
                    {siteUrl && (
                        <a className="siteUrl" href={siteUrl} target="_blank" rel="noopener noreferrer">
                            사이트 바로가기
                        </a>
                    )}
                    <br/>
                    <Content/>
                </div>
            </Wrapper>
        </Section>
    );
};

export default React.memo(Portfolio);