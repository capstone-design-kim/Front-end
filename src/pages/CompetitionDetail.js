import '../css/CompetitionDetail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';

export default function CompetitionDetail() {
    return (
        <div>
            <div>
                <div>
                    <div>D-n</div>
                    <div>팀원 &&&</div>
                    <div>공모 ***</div>
                </div>
                <div>
                    <div><FontAwesomeIcon icon={faBookmark} /></div>
                    <div>
                        <FontAwesomeIcon icon={faEye} />
                        <div>hits</div>
                    </div>
                </div>
            </div>
            <div>공모명</div>
            <div>
                <div>이미지</div>
                <div>
                    <div>
                        <div>
                            <div>
                                <div>주최/주관</div>
                                <div></div>
                            </div>
                            <div>
                                <div>접수방법</div>
                                <div></div>
                            </div>
                            <div>
                                <div>접수기간</div>
                                <div></div>
                            </div>
                            <div>
                                <div>신청링크</div>
                                <div></div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <div>참가대상</div>
                                <div></div>
                            </div>
                            <div>
                                <div>참가비용</div>
                                <div></div>
                            </div>
                            <div>
                                <div>심사기간</div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                    <div>나와 맞는 팀원 찾기</div>
                </div>
            </div>
            <div>
                <div>상세요강</div>
                <div></div>
            </div>
        </div>
    )
}