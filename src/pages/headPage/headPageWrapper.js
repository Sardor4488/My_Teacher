import styled from "styled-components";
import imgBg from "./HeadPage.png";
const HeadPageWrapper = styled.div`
  .headPage {
    background-image: url();
  }
  .headPageContainer {
    padding: 60px 100px;
  }
  Input {
    overflow: hidden;
    border: 0;
  }
  .input_headPage {
    background-color: #a30041;
    color: #fff;
  }
  .howelessonTime {
    padding: 50px 0;
  }
  .questionText {
    background-color: #a30041;
    color: #fff;
    border-radius: 8px 0px 0px 8px;
    padding: 40px 10px;
    text-align: start;
  }
  .questionTextp {
    font-size: 24px;
  }
  .howelessonTimeImg {
    border-radius: 0px 8px 8px 0px;
  }
  .informationTecher {
    background-color: #f5f5f7;
    border-radius: 8px;
    padding: 20px 0;
    &::hover {
      box-shadow: 0px 0px 30px 12px rgba(34, 60, 80, 0.07);
    }
  }

  .colorPrimary {
    color: #a30041;
  }
  .colorSucces {
    color: #37363c;
  }
  .colorGreen {
    color: #0dad13;
  }
  .cause{
      background-color:#F5F5F7;
  }
  .shadowCauce{
    box-shadow: 0px 0px 20px 2px rgba(34, 60, 80, 0.07);
    border-radius:4px;
    &::hover{
        background-color:#a30041;
    }
   }
   .shadowComunity{
       border-radius:8px ;
       background-color:#F5F5f7 !important;
        min-height:450px !important;
        max-height:450px !important;

   }
   .imgTeachers{
       border-radius:50%;
   }
   
`;
export default HeadPageWrapper;
