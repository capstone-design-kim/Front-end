import '../css/CompetitionDetail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import { faEye, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';

export default function CompetitionDetail() {
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
                    <div className='competition_detail_main_team'>
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