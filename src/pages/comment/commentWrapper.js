import styled from "styled-components";
const CommentWrapper = styled.div`
 
    .commentPage {
    background-image: url("about.png");
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-position:center;
  }
  .checIcon{
      background-color:#fff !important;
  }
  .colorPrimary {
    color: #a30041;
    border: #a30041 slolid 1px !important;
  }
  .colorPrimary{
    color: #a30041 !important;
  }
  .comments {
    background-color: #f5f5f7;
    padding:50px 0;
  }
  .commentButton {
    color: #a30041;
    border: 1px solid #a30041 !important;
    padding: 5px 30px !important;
  }
 `
export default CommentWrapper;