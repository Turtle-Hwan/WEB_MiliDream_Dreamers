import NavBar from "../component/NavBar";
import "../styles/globals.css";

//모든 페이지의 청사진을 커스텀할 수 있는 장소
//아래 js파일이 렌더링되기 전에 확인되며
//global styles를 추가할 수 있다.
//여기에서만, global.css를 import 가능하다.
//다른 곳에서는 module.css이어야 함.

export default function App({ Component, pageProps }) {
  return (
    <div>
      <NavBar />
      <Component {...pageProps} />
    </div>
  );
}
