import axios from "axios";
import React, { Component } from "react";
import {
  Socialmedia,
  Icon,
  SocialMediaDiv,
  Paragraph,
  Span,
  SpanInfo,
} from "./style";

class SocialMedia extends Component {
  state = {
    social: [],
  };
  componentDidMount() {
    axios.get("js/data.json").then((res) => {
      this.setState({ social: res.data.social });
    });
  }

  render() {
    const { social } = this.state;
    const socialDiv = social.map((item) => {
      return (
        <SocialMediaDiv item={item.id} key={item.id}>
          <Icon  className={item.icon}></Icon>
          <Paragraph>
            <Span>{item.title}</Span>
            <SpanInfo>{item.body}</SpanInfo>
          </Paragraph>
        </SocialMediaDiv>
      );
    });
    return <Socialmedia>{socialDiv}</Socialmedia>;
  }
}

export default SocialMedia;
