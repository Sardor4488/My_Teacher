import styled from "styled-components";
const HeaderWrapper = styled.div`
  .header {
    background-color: #f5f5f7;
    width: 100%;
    padding: 10px;
    
  }
  .register{
      background-color:#A30041;
      color:#fff;
      &:hover{
        background-color:#A30050;
       }
  }
  .headerContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .logo {
  }
  .linksHeader {
    margin: 10px;
    &::hover {
    }
  }
  .linksHeader {
    padding: 10px 12px;
    font-size: 16px !important;
    &::hover {
    }
  }
  .kirish{
      color: #a30041;
      border:1px solid #a30041 !important;
  }
  .active {
    border-top: 4px #a30041 solid;
    color: #a30041 !important;
    transition: 0.1s;
    border-radius:4px;
  }
`;
export default HeaderWrapper;
