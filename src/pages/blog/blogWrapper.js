import styled from "styled-components";
const BlogWrapper = styled.div`
.blog{
    background-image:url("blolgBg.png");
     background-size:cover;
     background-repeat: no-repeat;
     background-position:center;
     height:100vh;
     display:flex;
     justify-content:center;
     align-items:center;
     color:#fff;
}
.informationImg{
    border-radius:8px 8px 0px 0px !important;
    width:100%;
    height:264px;
 }
 /* .bgPrimary{
     color: #A30041;
 } */
.informationCard{
    background-color:#F5F5F7;
    border-radius: 0px 0px 8px 8px !important;
    padding-bottom:10px;
    max-height:624px !important;
    min-height:624px !important;
    position: relative;
}
.batafsil{
    position:absolute;
    bottom:40px;
    left:150px;
    background-color:#A30041;
      color:#fff;
      &:hover{
        background-color:#A30050;
       }
}
`
export default BlogWrapper;