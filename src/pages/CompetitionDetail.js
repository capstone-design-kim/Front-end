import React, { useState } from 'react';
import '../css/CompetitionDetail.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import { faEye, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import Swal from "sweetalert2";
import axios from "axios";

export default function CompetitionDetail() {
    const [contestId, setContestId] = useState();
    const navigate = useNavigate();

    function Matching() {
        Swal.fire({
            title: "팀원 매칭 시 필요한 정보",
            html: `
                <p>팀원에게 원하는 기술 스택</p>
                <input id="stack" class="swal2-input" placeholder="ex) 자바, 스프링">
        
                <p>공모전에 투자 가능한 시간</p>
                <input id="time" class="swal2-input" placeholder="ex) 주 50시간 이상">
        
                <p>기타(하고싶은 말)</p>
                <input id="additional" class="swal2-input" placeholder="하고싶은 말을 적어주세요">
            `,
            showCancelButton: true,
            confirmButtonText: "팀원찾기",
            cancelButtonText: "취소"
        }).then((result) => {
            if (result.isConfirmed) {
                const stackList = document.getElementById('stack').value;
                const time = document.getElementById('time').value;
                const additional = document.getElementById('additional').value;
                const userId = window.localStorage.getItem('userId');

                const profileRequestDto = [];
                profileRequestDto[stackList] = stackList;
                profileRequestDto[time] = time;
                profileRequestDto[additional] = additional;
                profileRequestDto[userId] = userId;
                profileRequestDto[contestId] = contestId;
        
                try{
                    axios({
                        method: 'post',
                        url: 'participation',
                        data: profileRequestDto
                    }).then(result => {
                        navigate('/CompetitionMatching');
                    })
                }catch (err) {
                    console.error(err);
                }
            }
        });
        
    }

    return (
        <div className='competiton_detail_big_box'>
            <div className='competition_detail_top'>
                <div className='competition_detail_top_state'>
                    <div className='competition_detail_top_state_deadline'>D-10</div>
                    <div className='competition_detail_top_state_matching'>팀원 모집중</div>
                    <div className='competition_detail_top_state_register'>공모 접수중</div>
                </div>
                <div className='competition_detail_top_BH'>
                    <div><FontAwesomeIcon icon={faBookmark} size='2x' /></div>
                    <div className='competition_detail_top_hits'>
                        <FontAwesomeIcon icon={faEye} />
                        <div>1658</div>
                    </div>
                </div>
            </div>
            <div className='competition_detail_contest_name'>제86회 대학생 온라인 기업경영 체험스쿨 참가자 모집</div>
            <div className='competition_detail_main'>
                <div className='competition_detail_main_img'></div>
                <div className='competition_detail_main_detail'>
                    <div className='competition_detail_main_detail_content'>
                        <div className='competition_detail_main_detail_frist'>
                            <div>
                                <div className='competition_detail_main_detail_content_detail'>주최/주관</div>
                                <div>환경부</div>
                            </div>
                            <div>
                                <div className='competition_detail_main_detail_content_detail'>접수방법</div>
                                <div>온라인 접수</div>
                            </div>
                            <div>
                                <div className='competition_detail_main_detail_content_detail'>접수기간</div>
                                <div>2024.01.25 ~ 2024.02.13</div>
                            </div>
                            <div>
                                <div className='competition_detail_main_detail_content_detail'>신청링크</div>
                                <div>http://bit.ly/3tSwioR</div>
                            </div>
                        </div>
                        <div className='competition_detail_main_detail_second'>
                            <div>
                                <div className='competition_detail_main_detail_content_detail'>참가대상</div>
                                <div>누구나</div>
                            </div>
                            <div>
                                <div className='competition_detail_main_detail_content_detail'>참가비용</div>
                                <div>무료 접수</div>
                            </div>
                            <div>
                                <div className='competition_detail_main_detail_content_detail'>심사기간</div>
                                <div>2024.02.13 ~ 2024.02.14</div>
                            </div>
                        </div>
                    </div>
                    <div className='competition_detail_main_team' onClick={Matching}>
                        <FontAwesomeIcon icon={faPeopleGroup} size='2x' />
                        <p>나와 맞는 팀원 찾기</p>
                    </div>
                </div>
            </div>
            <div className='competition_detail_content'>
                <div>상세요강</div>
                <div></div>
            </div>
        </div>
    )
}