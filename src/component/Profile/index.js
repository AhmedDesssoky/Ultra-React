import React, { Component } from "react";
import {
  ProfileSection,
  ProfileDiv,
  ProfileTitle,
  ProfileTitleSpan,
  ProfileList,
  ListItem,
  ListItemSpan,
  Skills,
  SkillsTitle,
  SkillsTitleSpan,
  SkillsDesc,
  Bar,
  BarTitle,
  BarPerc,
  Parent,
  ParentSpan,
} from "./style";
import axios from "axios";

class Profile extends Component {
  state = {
    Bars: [],
  };
  componentDidMount() {
    axios.get("js/data.json").then((res) => {
      this.setState({ Bars: res.data.profile });
    });
  }
  render() {
    const { Bars } = this.state;
    const baritems = Bars.map((Baritem)=>{
      return(
        <Bar key={Baritem.id}>
        <BarTitle>{Baritem.title}</BarTitle>
        <BarPerc>{Baritem.perc}</BarPerc>
        <Parent>
          <ParentSpan id={Baritem.id}></ParentSpan>
        </Parent>
      </Bar>
      )

    })
    return (
      <ProfileSection>
        <div className="container">
          <ProfileDiv>
            <ProfileTitle>
              <ProfileTitleSpan>My </ProfileTitleSpan>Profile
            </ProfileTitle>
            <ProfileList>
              <ListItem>
                <ListItemSpan>Name</ListItemSpan>
                Hamza Nabil
              </ListItem>
              <ListItem>
                <ListItemSpan>Birthday</ListItemSpan>
                21/1/1996
              </ListItem>
              <ListItem>
                <ListItemSpan>Address</ListItemSpan>
                Ain shams
              </ListItem>
              <ListItem>
                <ListItemSpan>Phone</ListItemSpan>
                4444 5555 6666
              </ListItem>
              <ListItem>
                <ListItemSpan>Email</ListItemSpan>
                hamza@hamza.com
              </ListItem>
              <ListItem>
                <ListItemSpan>Website</ListItemSpan>
                <ListItemSpan web="web">www.google.com</ListItemSpan>
              </ListItem>
            </ProfileList>
          </ProfileDiv>

          <Skills>
            <SkillsTitle>
              Some <SkillsTitleSpan>skills</SkillsTitleSpan>
            </SkillsTitle>
            <SkillsDesc>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
              praesentium blanditiis esse cupiditate, omnis similique.
            </SkillsDesc>
           {baritems}
          </Skills>
        </div>
      </ProfileSection>
    );
  }
}

export default Profile;
