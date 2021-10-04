import styled from "styled-components";
const HeaderWrapper = styled.div`
  .header {
    background-color: #f5f5f7;
    width: 100%;
    padding: 10px;
    position: fixed;
    top: 0px;
    z-index: 1000 !important;
    box-shadow: 0px 5px 5px -5px #000 !important;
  }

  .register {
    background-color: #a30041;
    color: #fff;
    &:hover {
      background-color: #fff;
      color: #a30041 !important;
    }
  }
  .registertext {
    color: #fff !important;
    &:hover {
      color: #a30041 !important;
    }
  }
  .colorPrimary {
    color: #a30050 !important;
  }
  .kirishText:hover {
    color: #fff !important;
  }

  // yo tog'rilang yo indamay tutring okokokokokokok

  .headerContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .logo {
    width: 160px;
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
  .kirish {
    color: #a30041;
    border: 1px solid #a30041 !important;
    &:hover {
      color: #fff;
      background-color: #a30041;
    }
  }
  .active {
    border-top: 4px #a30041 solid;
    color: #a30041 !important;
    transition: 0.1s;
    border-radius: 4px;
  }
  .textPrimary {
    color: #a30041 !important;
    font-size: 25px;
    cursor: pointer;
  }
  .faTimes{
    position:absolute;
    top:20px;
    right:20px;
    color: #a30041 !important;

  }
  .transition{
    transition: top 0.5s;

  }
  @media screen and (max-width: 978px) {
    .md_hide {
      display: none !important ;
    }
    .dmdnone{
      display:none ;
    }
    .logo {
      width: 120px;
    }
    .md_show {
      display: flex !important;
    transition: top 0.5s;

    }
  }
 .d-flex{
  transition: top 0.5s;
  }

  .nav__menu {
    position: fixed;
    top: 0px !important;
    left:0;
    width:  100% !important;
    /* height:400px !important; */
    background-color: white;
    transition: top 0.5s;
    box-shadow: rgb(0 0 0 / 13%) -10px 20px 20px 0px;
  }
  .w-100Sm{
    display:block;
    text-align:center;
  }
  .activeSm{
    color: #a30041 !important;
  }
  @media screen and (max-width: 768px) {
    .btnHeader {
      display: none !important;
    }

    .btnBar {
      display: block !important   ;
    }
    .header_menumdhide {
      display: none !important;
    }
  }
`;
export default HeaderWrapper;
