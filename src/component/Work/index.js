import React from "react";
import {
  WorkSection,
  WorkTitle,
  Descreption,
  PartTitle,
  Icon,
  Line,
  Span,
  WorkPart,
} from "./style";
import axios from "axios";
import { Component } from "react";
class Work extends Component {
  state = {
    works: [],
  };

  componentDidMount() {
    axios.get("js/data.json").then((res) => {
      this.setState({ works: res.data.works });
    });
  }

  render() {
    const { works } = this.state;
    const worksItem = works.map((item) => {
      return (
        <WorkPart first={item.id} key={item.id}>
          <Icon className={item.icon_name}></Icon>
          <PartTitle>{item.title}</PartTitle>
          <Line className="line" />
          <Descreption>{item.body}</Descreption>
        </WorkPart>
      );
    });
    return (
      <WorkSection>
        <div className="container">
          <WorkTitle>
            <Span>My</Span> Work
          </WorkTitle>
          {worksItem}
        </div>
      </WorkSection>
    );
  }
}

export default Work;
