import { React, useEffect, useState } from "react";
import '../css/Main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight, faCircleChevronLeft, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

export default function Main() {
    return (
        <div>
            <div className="Hot_competition"><i>HOT!</i> 인기 공모전</div>
            <div className="competition_main">
                <FontAwesomeIcon className="competition_arrow" size="4x" icon={faCircleChevronLeft} />
                <div>
                    <div className="img1">
                        <Link to={'/CompetitionDetail'}>
                            <div className="img_box">
                                <p className="competition_content">2023.12.06~2024.01.31</p>
                                <p className="competition_content_main">미디어아트월공모전</p>
                            </div>
                        </Link>
                    </div>
                </div>
                <div>
                    <div className="img2">
                        <Link to={'/CompetitionDetail'}>
                            <div className="img_box">
                                <p className="competition_content">2023.11.27~2024.01.05</p>
                                <p className="competition_content_main">동계청소년올림픽대회 <br />알리바바클라우드 해커톤</p>
                            </div>
                        </Link>
                    </div>
                </div>
                <div>
                    <div className="img3">
                        <Link to={'/CompetitionDetail'}>
                            <div className="img_box">
                                <p className="competition_content">2023.12.01~2024.01.04</p>
                                <p className="competition_content_main">제주 위성데이터 활용 <br />경진대회</p>
                            </div>
                        </Link>
                    </div>
                </div>
                <FontAwesomeIcon className="competition_arrow" size="4x" icon={faCircleChevronRight} />
            </div>
            <div>
                <div className="Top_competition">
                    <div id="first">전체공모전</div>
                    <div>접수예정</div>
                    <div>접수중</div>
                    <div>마감임박</div>
                    <div>마감</div>
                </div>
                <div></div>
            </div>
            <div className="table_box">
                <table>
                    <tr>
                        <td className="contestName">공모명</td>
                        <td className="contestPeriod">진행기간</td>
                        <td className="contestSituation">진행현황</td>
                        <td className="contestCircumstances">매칭현황</td>
                        <td className="hits">조회수</td>
                    </tr>
                    <tr>
                        <td className="contestName_content">
                            <Link to={'/CompetitionDetail'}>2024년 에코스타트업 지원사업  & 청년그린창업 스프링캠프 모집</Link>
                        </td>
                        <td className="contestPeriod_content">23-12-27 ~ 24-01-21</td>
                        <td className="contestSituation_content" id="ongoing">접수중</td>
                        <td className="contestCircumstances_content">매칭마감</td>
                        <td className="hits_content">1500</td>
                    </tr>
                    <tr>
                        <td className="contestName_content">
                            <Link to={'/CompetitionDetail'}>제86회 대학생 온라인 기업경영 체험스쿨 참가자 모집</Link>
                        </td>
                        <td className="contestPeriod_content">23-12-26 ~ 24-01-14</td>
                        <td className="contestSituation_content" id="deadline">마감임박</td>
                        <td className="contestCircumstances_content">매칭마감</td>
                        <td className="hits_content">470</td>
                    </tr>
                    <tr>
                        <td className="contestName_content">
                            <Link to={'/CompetitionDetail'}>링글 AI OPIc 서포터즈 1기 모집</Link>
                        </td>
                        <td className="contestPeriod_content">23-12-26 ~ 24-01-14
                        </td>
                        <td className="contestSituation_content" id="deadline">마감임박</td>
                        <td className="contestCircumstances_content">매칭마감</td>
                        <td className="hits_content">845</td>
                    </tr>
                    <tr>
                        <td className="contestName_content">
                            <Link to={'/CompetitionDetail'}>국민의힘 제22대 국회의원 선거 '국민 +(플러스)' 공약 대전</Link>
                        </td>
                        <td className="contestPeriod_content">23-11-17 ~ 24-01-07</td>
                        <td className="contestSituation_content" id="deadline">마감임박</td>
                        <td className="contestCircumstances_content">매칭마감</td>
                        <td className="hits_content">578</td>
                    </tr>
                    <tr>
                        <td className="contestName_content">
                            <Link to={'/CompetitionDetail'}>2024 경기세계도자비엔날레 국제공모전 작품 모집</Link>
                        </td>
                        <td className="contestPeriod_content">24-12-01 ~ 24-12-15</td>
                        <td className="contestSituation_content" id="schedule">접수예정</td>
                        <td className="contestCircumstances_content" id="schedule">매칭예정</td>
                        <td className="hits_content">182</td>
                    </tr>
                    <tr>
                        <td className="contestName_content">
                            <Link to={'/CompetitionDetail'}>프로픽 아카데미 제 8회 무협 공모전</Link>
                        </td>
                        <td className="contestPeriod_content">23-12-27 ~ 24-01-10</td>
                        <td className="contestSituation_content" id="deadline">마감임박</td>
                        <td className="contestCircumstances_content">매칭마감</td>
                        <td className="hits_content">719</td>
                    </tr>
                    <tr>
                        <td className="contestName_content">
                            <Link to={'/CompetitionDetail'}>K리그 X 하나은행 : 축덕카드 디자인 공모전</Link>
                        </td>
                        <td className="contestPeriod_content">23-12-27 ~ 24-02-10</td>
                        <td className="contestSituation_content" id="ongoing">접수중</td>
                        <td className="contestCircumstances_content" id="ongoing">매칭중</td>
                        <td className="hits_content">391</td>
                    </tr>
                </table>
            </div>
            <div className="Bottom_competition">
                <FontAwesomeIcon className="arrow" icon={faCaretLeft} />
                <div>
                    <p id="one">1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>4</p>
                    <p>5</p>
                </div>
                <FontAwesomeIcon className="arrow" icon={faCaretRight} />
            </div>
        </div>
    )
}