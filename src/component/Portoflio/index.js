import React from "react";
import {
  Portfolio,
  PortfolioItem,
  PortfolioTitle,
  PortfolioList,
  ImageWrapper,
  Imge,
  Overlay,
  OverlaySpan,
  Span,
} from "./style";
import { useEffect, useState } from "react";
import axios from "axios";

const Portoflio = () => {
  const [imges, setimges] = useState([]);
  useEffect(() => {
    axios.get("js/data.json").then((res) => {
      setimges(res.data.portfolio)
    });
  }, []);

  const portfolioImag= imges.map((imgitem)=>{
    return(
       <ImageWrapper key={imgitem.id}>
          <Imge src={imgitem.image} alt="" />
          <Overlay>
            <OverlaySpan>Show Image</OverlaySpan>
          </Overlay>
        </ImageWrapper>

    )
  })

  return (
    <Portfolio>
      <PortfolioTitle>
        <Span>My</Span> Portfolio
      </PortfolioTitle>
      <PortfolioList>
        <PortfolioItem active >All</PortfolioItem>
        <PortfolioItem>HTML</PortfolioItem>
        <PortfolioItem>Photoshop</PortfolioItem>
        <PortfolioItem>Wordpress</PortfolioItem>
        <PortfolioItem>Mobile</PortfolioItem>
      </PortfolioList>

      <div className="box">
       {portfolioImag}
      </div>
    </Portfolio>
  );
};

export default Portoflio;
