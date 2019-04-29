import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"

const globalStyles = createGlobalStyle`
  ${reset};
  a{
    text-decoration:none;
    color:#fff;
  }
  *{
    box-sizing:border-box;
  }
  body{
    font-family:-apple-ststem, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Canta;
    font-size:14px;
    background-color:rgba(20, 20, 20, 1);
    padding-top: 50px;
    color: #fff;
  }

`;

export default globalStyles;

// const globalStyles = 대신
// export default () => {}
// 로 분리해서 선언해줄 필요 없이 바로 함수로 내보낼수도 있다.