import React, { useEffect } from 'react';
import '../css/CompetitionMatching.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import { faEye, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import Swal from "sweetalert2";
import axios from "axios";

function SideNav() {

}

export default function CompetitionMatching() {

    return (
        <div>
            <div className='competitionMatching_mainbox'>
                <div className='competitionMatching_mybox'>
                    <div className='competitionMatching_my'>
                        <div>내 프로필</div>
                    </div>
                    <div className='competitionMatching_box'>
                        <div className='competitionMatching_box_user'>
                            <img alt='이미지' id='competitionMatching_myimg'/>
                            <div>user 1</div>
                        </div>
                        <div className='competitionMatching_box_content'>
                            <div>
                                <p>한 줄 소개 : &nbsp;</p>
                                <p>공모전 참가 이력은 별로 없지만, 열심히 해보겠습니다!</p>
                            </div>
                            <div>
                                <p>기술 스택 : &nbsp;</p>
                                <p>JAVA / Spring / MySQL / JS</p>
                            </div>
                            <div>
                                <p>투자 가능 시간 : &nbsp;</p>
                                <p>주 50시간 이상 가능</p>
                            </div>
                            <div>
                                <p>팀원에게 원하는 스택 : &nbsp;</p>
                                <p>JAVA / Spring / MySQL / JS</p>
                            </div>
                            <div>
                                <p>기타 : &nbsp;</p>
                                <p>특히 클라우드 자원을 활용한 개인 프로젝트를 해본 경험이 다수 있습니다.</p>
                            </div>
                            <div>
                                <p>공모전 참가 이력 : &nbsp;</p>
                                <div>2023년도 ETRI 오픈 API 활용사례 공모전</div>
                            </div>
                            <div><p>평점 및 후기</p></div>
                        </div>
                    </div>
                </div>
                <div className='competitionMatching_mybox'>
                    <div className='competitionMatching_aibox'>
                        <p>AI추천매칭!<i>나의 성향과 맞는 사람을 추천해줘요</i></p>
                    </div>
                    <div className='competitionMatching_aibox_content'>
                        <div>
                            <div className='competitionMatching_box_user'>
                                <img alt='이미지' />
                                <div>user 1</div>
                            </div>
                            <div className='competitionMatching_box_content'>
                                <div>
                                    <p>한 줄 소개 : &nbsp;</p>
                                    <p>공모전 참가 이력은 별로 없지만, 열심히 해보겠습니다!</p>
                                </div>
                                <div>
                                    <p>기술 스택 : &nbsp;</p>
                                    <p>JAVA / Spring / MySQL / JS</p>
                                </div>
                                <div>
                                    <p>투자 가능 시간 : &nbsp;</p>
                                    <p>주 50시간 이상 가능</p>
                                </div>
                                <div>
                                    <p>팀원에게 원하는 스택 : &nbsp;</p>
                                    <p>JAVA / Spring / MySQL / JS</p>
                                </div>
                                <div>
                                    <p>기타 : &nbsp;</p>
                                    <p>특히 클라우드 자원을 활용한 개인 프로젝트를 해본 경험이 다수 있습니다.</p>
                                </div>
                                <div>
                                    <p>공모전 참가 이력 : &nbsp;</p>
                                    <div>2023년도 ETRI 오픈 API 활용사례 공모전</div>
                                </div>
                                <div><p>평점 및 후기</p></div>
                            </div>
                        </div>
                        <div className='competitionMatching_aibox_content_select'>찜하기</div>
                    </div>
                </div>
                <div className='competitionMatching_mybox'>
                    <div className='competitionMatching_userbox'>
                        <p>공모전 매칭목록</p>
                    </div>
                    <div className='competitionMatching_aibox_content'>
                        <div>
                            <div className='competitionMatching_box_user'>
                                <img alt='이미지' />
                                <div>user 1</div>
                            </div>
                            <div className='competitionMatching_box_content'>
                                <div>
                                    <p>한 줄 소개 : &nbsp;</p>
                                    <p>공모전 참가 이력은 별로 없지만, 열심히 해보겠습니다!</p>
                                </div>
                                <div>
                                    <p>기술 스택 : &nbsp;</p>
                                    <p>JAVA / Spring / MySQL / JS</p>
                                </div>
                                <div>
                                    <p>투자 가능 시간 : &nbsp;</p>
                                    <p>주 50시간 이상 가능</p>
                                </div>
                                <div>
                                    <p>팀원에게 원하는 스택 : &nbsp;</p>
                                    <p>JAVA / Spring / MySQL / JS</p>
                                </div>
                                <div>
                                    <p>기타 : &nbsp;</p>
                                    <p>특히 클라우드 자원을 활용한 개인 프로젝트를 해본 경험이 다수 있습니다.</p>
                                </div>
                                <div>
                                    <p>공모전 참가 이력 : &nbsp;</p>
                                    <div>2023년도 ETRI 오픈 API 활용사례 공모전</div>
                                </div>
                                <div><p>평점 및 후기</p></div>
                            </div>
                        </div>
                        <div className='competitionMatching_aibox_content_select'>찜하기</div>
                    </div>
                </div>
            </div>
        </div>
    )
}