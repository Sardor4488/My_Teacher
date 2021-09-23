import styled from "styled-components";
const HeaderWrapper = styled.div`
  .header {
    background-color: #f5f5f7;
    width: 100%;
    padding: 10px;
    box-shadow: 0px 5px 5px -5px #000 !important;  }
  z-index:1000 !important;
  .register{
      background-color:#A30041;
      color:#fff;
      &:hover{
        background-color:#fff;
        color:#A30041 !important;
       }
  }.registertext{
    color:#fff !important;
    &:hover{
      color:#A30041 !important;

    }
  }
  .colorPrimary{
    color:#A30050 !important;
  }
  .kirishText:hover{
    color:#fff !important;
  }
  

  // yo tog'rilang yo indamay tutring okokokokokokok

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
      &:hover{
        color: #fff;
      background-color:#A30041;

       }
  }
  .active {
    border-top: 4px #a30041 solid;
    color: #a30041 !important;
    transition: 0.1s;
    border-radius:4px;
  }
  .textPrimary{
    color: #a30041 !important;
    font-size:25px;
   cursor: pointer;
  
  }
  @media screen and (max-width:978px){
    .md_hide{
      display:none !important ;
    } 
     .logo {
       width:120px
  }.md_show{
      display:flex !important;
    }
  }
  .nav__start {
  right: 0;
  transition: 0.5s;
}
.nav__menu {
  position: fixed;
  right: -100%;
  top: 78px;
  width: 20%;
  height: 100vh;
  background-color: white;
  transition: 0.5s;
  box-shadow: rgb(0 0 0 / 13%) -10px 80px 20px 0px;
}
`;
export default HeaderWrapper;
