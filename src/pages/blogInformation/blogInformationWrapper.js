import styled from "styled-components";
const BlogInformationWrapper = styled.div`
.bgSucces{
    background-color:#F5F5F5F7;
}
.radiusText{
    border-radius:0px 8px 8px 0px;
}
.radiusImg{
    border-radius:8px 0px 0px 8px;

}
.vk{
    border-radius:50%;
    background-color:#4680C2;
    color:#fff !important; 
    padding:8px;
    display:flex;
    align-items:center;
    flex-wrap:wrap;
    width:32px;
    justify-content:center;

}
.Facebook{
    border-radius:50%;
    background-color:#3B5998;
    color:#fff !important; 
    padding:8px;
    display:flex;
    align-items:center;
    flex-wrap:wrap;
    width:32px;
    justify-content:center; 
}
.odna{
    border-radius:50%;
    background-color:#EB722E;
    color:#fff !important; 
    padding:8px;
    display:flex;
    align-items:center;
    flex-wrap:wrap;
    width:32px;
    justify-content:center;  
}
.tg{
    border-radius:50%;
    background-color:#64A9DC;
    color:#fff !important; 
    padding:8px;
    display:flex;
    align-items:center;
    flex-wrap:wrap;
    width:32px;
    justify-content:center; 
}
.twitter{
    border-radius:50%;
    background-color:#00ACED;
    color:#fff !important; 
    padding:8px;
    display:flex;
    align-items:center;
    flex-wrap:wrap;
    width:32px;
    justify-content:center; 
}

.text-end{
    text-align:end !important;
    width:100%;
    justify-content:right;
}
.whatsap{
    border-radius:50%;
    background-color:#65BC54;
    color:#fff !important; 
    padding:8px;
    display:flex;
    align-items:center;
    flex-wrap:wrap;
    width:32px;
    justify-content:center; 
}
@media screen and (max-width:751px){
      .radiusText{
        border-radius:0px 0px 8px 8px !important;
     }
     .radiusImg{
        border-radius:8px 8px 0px 0px !important;

     }
}
`
export default BlogInformationWrapper;