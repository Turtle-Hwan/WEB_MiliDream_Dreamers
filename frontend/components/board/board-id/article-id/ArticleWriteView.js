import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";


function displayedAt(createdAt) {
	const milliSeconds = Date.parse(new Date()) - Date.parse(createdAt)
	const seconds = milliSeconds / 1000
	if (seconds < 60) return `방금 전`
	const minutes = seconds / 60
	if (minutes < 60) return `${Math.floor(minutes)}분 전`
	const hours = minutes / 60
	if (hours < 24) return `${Math.floor(hours)}시간 전`
	const days = hours / 24
	if (days < 7) return `${Math.floor(days)}일 전`
	const weeks = days / 7
	if (weeks < 5) return `${Math.floor(weeks)}주 전`
	const months = days / 30
	if (months < 12) return `${Math.floor(months)}개월 전`
	const years = days / 365
	return `${Math.floor(years)}년 전`
}

function ContentRow({ comment }) {
	//const router = useRouter();
	//console.log(comment)
	const [user, setUser] = useState();
	const router = useRouter();
	useEffect(() => {
		(async () => {
			const results = await (await fetch(`/api/user/${Number(comment?.userKey)}`, { method: 'GET' })).json();
			setUser(results);
		})();
	}, []);
	//console.log(user?.userName)
	return (
				<tr>
					<th scope="row" className="count content">{user?.userName}</th>
					<td className="content">{comment?.body}</td>
					<td className="content">{displayedAt(comment?.commentTime)}</td>
					{/* <td className="content">수정</td>
					<td className="content">삭제</td> */}
				</tr>

	)
}

export default function ArticleWriteView({ post, articleId }) {
	const [user, setUser] = useState();
	const router = useRouter();
	useEffect(() => {
		(async () => {
			const results = await (await fetch(`/api/user/${Number(post?.userKey)}`, { method: 'GET' })).json();
			setUser(results);
		})();
	}, []);

	//console.log(post)
	return (
		<div>
			<div className="table-box">
				<table className="table">
					<tbody>
						<tr className="mainTitle">
							<th scope="col count" className="count titleBar">{post?.title}</th>
							<div>
							<td scope="col title" className="title titleBar">{user?.userName}</td>
							<td scope="col writeUser" className="writeUser titleBar">{displayedAt(post?.postTime)}</td>
							<td scope="col time" className="time titleBar">조회수 {post?.viewCount}</td>
							<td scope="col viewCount" className="veiwCount titleBar">수정</td>
							<td scope="col heart" className="heart titleBar">삭제</td>
							<td scope="col" className="comments">댓글수 [{post?.comments.length}]</td>
							</div>
						</tr>
						<tr className="mainBody">
							<th scope="col count" className="count titleBar">{post?.body}//내용이 너무 너무 짧아요 \n 짧다짧아</th>
							<div className="body">
							<td scope="col title" className="title titleBar">{post?.recommend} 공감 버튼</td>
							<td scope="col writeUser" className="writeUser titleBar">신고 버튼</td>
							</div>
							{/* <td scope="col time" className="time titleBar">익명댓글달기 버튼</td> */}
							<div className="comment">
							<td scope="col viewCount" className="veiwCount titleBar">댓글입력창</td>
							<td scope="col heart" className="heart titleBar">등록 버튼</td>
							</div>
						</tr>
						{post?.comments.slice(0).map((comment) => <ContentRow comment={comment} />)}
					</tbody>
				</table>
			</div>
			<style global jsx>{`
				.mainTitle {
					height: 80px;		
				}
				.mainTitle > th {
					margin-left: 15px;
					height: 40px;
					display: block;
					text-align: left;
					font-family: 'Noto Sans KR';
					font-style: normal;
					font-weight: 600;
					font-size: 20px;
				}
				.mainTitle > div {
					display: flex;
					height: 40px;
				}
				.mainTitle > div > td {
					margin-left : 15px;
					font-family: 'Noto Sans KR';
					font-style: normal;
					font-weight: 400;
					font-size: 13px;
					line-height: 19px;
					color: rgba(0, 0, 0, 0.5);
				}
				.mainTitle > div > td:after {
					content: "|";
					margin-left : 15px;
				}

				//아래부터 body 내용. 위는 title
				.mainBody > th {
					height : 300px;
					margin-left: 15px;
					display: block;
					font-family: 'Noto Sans KR';
					font-style: normal;
					font-weight: 500;
					font-size: 15px;
					line-height: 22px;
					color: #000000;
				}
				.mainBody > .body {
					
				}
				.mainBody > .comment {
					height : 100px;
				}

				//아래는 table 기본 속성
        .table-box {
          border: 2px solid #A7A7A7;
        }
        .table {
          --bs-table-color: black;
          --bs-table-border-color: transparent;
          width: 1000px;
          display: flex;
          flex-direction: column;
          text-align: center;
        }
        .table-light {
          --bs-table-color: white;
          --bs-table-bg: transparent;
          --bs-table-border-color: transparent;
        }
        .content {
          font-family: 'Noto Sans KR';
          font-style: normal;
          font-weight: 400;
          font-size: 15px;
          line-height: 22px;
          color: black;
        }
        .gray {
          color: #A7A7A7;
        }
        tbody {
          display: flex;
          flex-direction: column;
        }
        tr:after {
          content: "";
          display: block;
          width: 970px;
          border-bottom: 1px solid #A7A7A7;
          margin-left: 15px;
        }
        tbody > tr {
          height: 60px;
        }
        .title.content {
          text-align: start;
        }
			`}</style>
		</div>
	)
}