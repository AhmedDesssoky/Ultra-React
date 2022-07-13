import React  from "react";
import { HomeSection ,HomeInfomation,HomeTitle,HomeInfo,DescSpan,Description,Button} from "./style";
const Home =()=> {
 
    return (
      <HomeSection>
      <div className="container">
          <HomeInfomation>
              <HomeTitle>Ahmed Dessoky</HomeTitle>
              <HomeInfo>Creative Director</HomeInfo>
              <Description>
                  Iam a professional <DescSpan>UX Designer</DescSpan> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
              </Description>
              <Button>Let's Begin</Button>
          </HomeInfomation>
      </div>
  </HomeSection>
    );
  
}

export default Home;
