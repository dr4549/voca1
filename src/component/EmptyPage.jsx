import { Link } from "react-router-dom/cjs/react-router-dom";

export default function EmptyPage() {
    return (
        <>
            <h2>잘못된 접근입니다.</h2>
            <Link to="/">돌어가기</Link>
        </>
    );
}
