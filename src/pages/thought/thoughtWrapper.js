import styled from "styled-components";
const ThoughtWrapper = styled.div`
  .commemtarieInput {
    background-color: #f5f5f5f7;
    border-bottom: 0px !important;
  }
  .bg-succes {
    background-color: #f5f5f5f7;
  }
  .text-start {
    text-align: start !important;
    width: 100%;
  }
  .form-control {
    background-color: #f5f5f5f7;
    box-shadow: none !important;
    border: 0;
  }
  .iconCameraDiv {
    background-color: #f5f5f5f7;
    padding: 10px;
    border-radius: 50%;
  }
  .iconCamera ,  .visually-hidden {
    
    max-width: 184px;
    min-width: 184px;
    max-height: 210px;
    min-height: 200px;
 }
 
  .putImg {
    border: 1px dashed rgba(0, 0, 0, 0.3);
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("2561351_camera_icon.png") !important;
  }
  .colorPrimary {
    color: #a30041 !important;
  }
  .kirish {
    color: #a30041;
    border: 1px solid #a30041 !important;
  }
  .register {
    background-color: #a30041;
    color: #fff;
    &:hover {
      background-color: #a30050;
    }
  }
  .textArea {
    border: 0;
    background-color: #f5f5f5f7;
    width: 100%;
    border-radius: 8px;
    height: 220px !important;
    overflow: hidden !important;
    outline: 0 !important;
  }
`;
export default ThoughtWrapper;
