import styled from "styled-components";
 const HeadPageWrapper = styled.div`
  .headPage {
    background-image: url("HeadPage.png") !important;
    color:#fff;
    padding-bottom:60px;
    background-repeat:no-repeat;
    background-size:cover
  }
 .abv{
   width:260px !important;
 }
  @media screen and (max-width:975px){
    .questionTextp {
    font-size: 14px !important;
  }
  }
  
  @media screen and (max-width:751px){
     .headPageContainer {
    padding: 20px  !important;
   } 
   .startPadding{
 padding:0 10px  }
   .categorycomp{
     width:100% !important;
    }
    .categoryBook{
    width:100% !important;  
   }
   .questionText {
     border-radius: 8px 8px 0px 0px !important;
   }
   .md-none-padding{
         padding-right:0px !important;

   }
  .howelessonTimeImg {
    border-radius: 0px 0px 8px 8px !important;
  }
}
  .headPageContainer {
    padding: 60px 100px;
  }
  Input {
    box-shadow:none !important;
    border: 0;
    /* &:hover{
        background: #10279E0D;
        transition:0.4s;
    } */
  }
  .category{
      background-color:#fff;
      border-radius:4px;
      height: 80px;
      padding: 25px !important;
       align-items:center;
       margin:5px;
  }
  .categorycomp{
      background-color:#A30041;
      color:#fff !important;
      width:288px;
      margin:auto;
  }
  .categoryBook{
    width:288px;  
        margin:auto;

  }
  .iconsirkul2{
      position:absolute;
  }
  .iconsirkul2{
      position:relative ;
      left:-10px;
  }
  .input_headPage {
    background-color: #a30041 !important;
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
    &:hover {
        box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2)!important;
      transition: 0.5s;
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
    &:hover{
        background-color:#a30041 !important;
        transition: 0.5s;
        color:#ffff;
    }
   }
   .shadowComunity{
       border-radius:8px ;
       background-color:#F5F5f7 !important;
        min-height:450px !important;
        max-height:450px !important;
        &:hover{
            box-shadow: 0px 5px 5px -5px rgba(34, 60, 80, 0.6) !important;
            transition: 0.3s;

        }
   }
   .imgTeachers{
       border-radius:50%;
   }
   
`;
export default HeadPageWrapper;
