import styled from "styled-components";
const height = "60px"
const DashboardCss = styled.div`
display:flex;
 
header{
    position:sticky;
    top:0;
    background-color:#3C8DBC;
    color:#fff;
    height:${height} !important;
    width:100% !important;
    
}
.MuiTypography-body1{
    width:auto;
    color:#fff;
}
.active{
  color: rgb(204, 204, 204) !important;
    border-bottom:1px solid #367FA9 ;
    transition:0.4s  ;
    margin-left:10px;
}
.icons{
    width:30px;
}
.title{
    background-color:#367FA9;
    height:${height};

}
 

.MuiAccordionSummary-root, .MuiAccordionDetails-root, .MuiSvgIcon-root  {
    background-color:#222D32 !important;
    color:#fff !important;

}
 
.MuiSvgIcon-fontSizeMedium {
    background-color:transparent  !important;
}
.profil{
    width:60px;
    height:60px;
    border-radius:50%;
}
.information{
    background-color:#222D32;
    height:100vh;
    position:sticky;
    
    /* overflow-y:auto; */
    width:300px;
 }
.content{
    background-color:#aaa;
    flex:1;
    height:100vh !important;
     overflow:auto !important;
    background-color:#F3F3F3;
}
@media screen and (max-width:480px){
.information{
    width:180px;
}
}
`;
export default DashboardCss;