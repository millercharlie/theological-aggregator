import styled from "@emotion/styled";
import * as Typography from "@libs/Typography";
import logogram from "@assets/logogram.svg";
import { sidebarData } from "@database/mockData";
import NavigationBar from "@components/NavigationBar";
import Sidebar from "@components/Sidebar";

import { MediumCard } from "@components/Cards";

const Background = styled.div`
  background-color: black;
  width: 100%;
  height: 100%;
  background-image: url("src/assets/background_gradient.svg"); // TODO: Eventually, this should be calculated dynamically
  background-size: 150%;
  background-attachment: fixed;
  background-position: center;
`;
const BackgroundGradient = styled.img`
  // TODO: This is for the future ^
  width: 100vw;
  height: 100vw;
  position: absolute;
  top: 0;
  user-select: none;
  z-index: 0;
`;

const ContentBackground = styled.div`
  margin-top: 30px;
  padding-left: 45px;
  padding-right: 45px;
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 20px;
  z-index: 1;
`;
const Heading = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 60px;
`;
const Content = styled.div`
  /* width: 70vw; */
`;
// TODO: Color is not working here
const Logogram = styled.img`
  width: 300px;
  color: #ffffff;
  fill: #ffffff;
`;
const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0px;
`;

// TODO: Background Gradient should NOT be an SVG - it should be dynamically calculated
// Logged out Dashboard
const Dashboard = () => {
  return (
    <Background>
      <NavigationBar highlighted="dashboard" />
      <ContentBackground>
        <Content>
          <Heading>
            <TitleContainer>
              <Typography.Description>Welcome to</Typography.Description>
              <Logogram src={logogram} alt="logogram" />
            </TitleContainer>
            <div id="description">
              <Typography.LargeParagraph>
                Solomon is a convenient platform with resources on apologetics,
                theology, and Bible commentaries. We hope you can use this
                platform to discover new resources, engage with theologians, and
                dive deeper into your faith!
                <br />
                <br />
                Below, you will find curated introductory resources to
                apologetics and theology, but feel free to explore and find your
                own resources!
                <br />
                <br />
                If you wish for additional functionality (such as
                recommendations, favorites) be sure to create an account with
                us!
              </Typography.LargeParagraph>
            </div>
          </Heading>
          <div id="main-content">
            {/* MAP WILL GO HERE! :D */}
            <div id="apologetics-beginners">
              {/* and another map here! */}
              <MediumCard
                id="william_lane_craig"
                title="William Lane Craig"
                description="Reformed Theologian focusing on apologetics, debates, and more"
                backgroundColor="#00679A"
                favorite={true}
                icon="scholar.svg"
                fullscreen={true}
                dropdown={false}
                badges={[
                  {
                    text: "Video",
                    icon: "video.svg",
                    backgroundColor: "#C42929",
                    textColor: "#FFFFFF",
                  },
                  {
                    text: "Website",
                    icon: "website.svg",
                    backgroundColor: "#2396E8",
                    textColor: "#FFFFFF",
                  },
                  {
                    text: "Apologetics",
                    icon: "puzzle.svg",
                    backgroundColor: "#295AC4",
                    textColor: "#FFFFFF",
                  },
                  {
                    text: "Theology",
                    icon: "comment.svg",
                    backgroundColor: "#6EBCB9",
                    textColor: "#FFFFFF",
                  },
                ]}
              />
            </div>
          </div>
        </Content>
        <Sidebar contents={sidebarData} />
      </ContentBackground>
      {/*
      <BackgroundGradient
        src={backgroundGradient}
        alt="background-gradient"
        draggable="false"
      />
      */}
    </Background>
  );
};

export default Dashboard;
