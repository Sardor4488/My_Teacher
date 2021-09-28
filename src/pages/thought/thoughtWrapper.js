import styled from "styled-components";
const ThoughtWrapper = styled.div`
.commemtarieInput{
    background-color:#F5F5F5F7;
    border-bottom:0px !important;
}
.bg-succes{
    background-color:#F5F5F5F7;

}
.text-start{
    text-align:start !important;
    width: 100%
}
.form-control{
    background-color:#F5F5F5F7;
    box-shadow:none !important;
    border:0;
}
.iconCameraDiv{
        background-color:#F5F5F5F7;
     padding:10px;
     border-radius:50%;

}
.iconCamera{
     width: 100% !important;
     height: 100% ;

}
.putImg{
    border: 1px dashed rgba(0, 0, 0, 0.3);
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    background-image:url("2561351_camera_icon.png") !important;
}
.colorPrimary{
    color: #a30041 !important;

}
.kirish{
      color: #a30041;
      border:1px solid #a30041 !important;
  }
  .register{
      background-color:#A30041;
      color:#fff;
      &:hover{
        background-color:#A30050;
       }
  }
.textArea{
    border:0;
    background-color:#F5F5F5F7;
    width:100%;
    border-radius:8px;
    height:220px !important;
    overflow:hidden !important;
    outline: 0 !important;
}
`
export default ThoughtWrapper;