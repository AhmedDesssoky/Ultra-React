import React from "react";
import { CreativeSection,CreativeInfo,InfoTitle,Span ,Infodir,Infodesc,InfodescAnchor } from "./style";
const About = () => {
  return (
    <CreativeSection>
      <div className="container">
        <CreativeInfo>
          <InfoTitle>
            <Span>This is</Span> Me
          </InfoTitle>
          <Infodir>Creative Director</Infodir>
          <Infodesc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est{" "}
            <InfodescAnchor>explicabo</InfodescAnchor> maxime quibusdam quaerat nihil aliquid
            aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad
            veritatis?
          </Infodesc>
          <Infodesc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est
            explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti,
            repellendus dolorum. Possimus nisi cupiditate ad veritatis?
          </Infodesc>
        </CreativeInfo>
      </div>
    </CreativeSection>
  );
};

export default About;
