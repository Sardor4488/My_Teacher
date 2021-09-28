import styled from "styled-components";
const GroupTeachersWrapper = styled.div`
  Input {
    box-shadow: none !important;
    border: 0;
    /* &:hover{
        background: #10279E0D;
        transition:0.4s;
    } */
  }
  .MuiSlider-track,
  .MuiSlider-thumbSizeMedium , .MuiSlider-rail {
    color: #a30041 !important;
  }
  

  .kirishText{
    display:flex;
    align-items: flex-end;
  }
  .form-control{
    width:196px !important;
    outline:0 !important;

  }
  .MuiSlider-valueLabel{
    background-color:#fff !important;
    color: #a30041 !important;

  }
  .input_headPage {
    background-color: #a30041;
    color: #fff;
  }
  .cause {
    background-color: #f5f5f7 !important;
  }
  .informationTecher {
    background-color: #f5f5f7;
    border-radius: 8px;
    padding: 20px 0;
    &:hover {
      box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) !important;
      transition: 0.5s;
    }
  }
  .colorGreen {
    color: #0dad13;
  }
  .kirish {
    color: #a30041;
    border: 1px solid #a30041 !important;
    &:hover {
      color: #fff;
      background-color: #a30041;
    }
  }
  .colorPrimary {
    color: #a30041 !important;
    &:hover {
      color: #fff !important;
    }
  }
`;
export default GroupTeachersWrapper;
