//index.js가 홈페이지의 HOME이다.

//만약 로그인상태에서 시작하기를 누른다면 개인정보 창으로 가도록
import Link from "next/link";
import { Router } from "next/router";
import NavBar from "../component/NavBar";

export default function Home() {
  return (
    <div className="a">
      <div className="Home_home">
        <h1>MILI-DREAM</h1>
        <div>
          <Link href="/login">
            <button>시작하기</button>
          </Link>
        </div>

        <style jsx>
          {`
            button {
              background-color: #566270;
              color: white;
              cursor: pointer;
              top: 170px;
              left: 35px;
              border-radius: 40px 40px;
              border: 0;
              outline: 0;
              box-shadow: 0 4px 4px -4px black;
              font-weight: bold;
            }
            .Home_home {
              width: 100vw;
              height: 100vh;
              // background: url("./img/home.svg");
              background-size: cover;
              background-position: center;
              background-repeat: no-repeat;
              background-color: #808994;
            }
            h1 {
              color: white;
            }
          `}
        </style>
      </div>
    </div>
  );
}

//STYLE JSX 써서 HOME 이미지 넣는다.
