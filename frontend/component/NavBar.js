import Link from "next/link";
import { useRouter } from "next/router";

//만약 로그인된 상태라면 로그아웃을 출력해야 함.
export default function NavBar() {
  const router = useRouter();
  return (
    <header>
      <nav>
        <Link href="/">
          <img src="/img/logo.png" />
        </Link>
        <ul>
          <li>
            <Link href="/login">
              <a>로그인</a>
            </Link>
          </li>
          <li>
            <Link href="/signup">
              <a>회원가입</a>
            </Link>
          </li>
          <li>
            <Link href="/test">
              <a>TEST</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>CONTACT</a>
            </Link>
          </li>
        </ul>

        <style jsx>
          {`
            nav {
              height: 107px;
              line-height: 150px;
            }
            img {
              width: 80px;
              cursor: pointer;
              padding-left: 50px;
            }
            ul {
              float: right;
              list-style: none;
              padding: 0;
              display: flex;
              padding-right: 60px;
            }
            a {
              color: #000000;
              display: block;
              height: 70px;
            }
            a:hover {
              color: #8a939c;
              transition-duration: 2ms;
              transition-delay: 2ms;
            }
            li {
              margin: 0px 16px;
              width: 30;
              font-size: 16px;
              font-weight: 318;
              line-height: 100px;
              padding-left: 30px;
            }
          `}
        </style>
      </nav>
    </header>
  );
}

// li의 line-height는 로그인 등 헤더의 txt 부분 높이 조절
// nav의 line-height는 로고 아이콘 부분 높이 조절
