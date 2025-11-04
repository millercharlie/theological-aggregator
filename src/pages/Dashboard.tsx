import styled from "@emotion/styled";
import * as Typography from "@libs/Typography";
import logogram from "@assets/logogram.svg";
import { sidebarData } from "@database/mockData";
import NavigationBar from "@components/NavigationBar";
import Sidebar from "@components/Sidebar";

import { Card } from "@components/Cards";
import type { DashboardData } from "@libs/Types";
import * as theme from "@libs/global";

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
const MainContent = styled.div`
  margin-top: 30px;
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

const Row = styled.div`
  margin-bottom: 30px;
`;
const CardRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  @media screen and (max-width: ${theme.breakpoints.md}px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: ${theme.breakpoints.sm}px) {
    // TODO: Mobile-mode carousel
  }
`;

// TODO: Background Gradient should NOT be an SVG - it should be dynamically calculated

/**
 * Desktop Dashboard when the user is logged out.
 * @returns Desktop Dashboard
 */
const Dashboard: React.FC<{ data: DashboardData }> = ({ data }) => {
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
          <MainContent>
            {data.rows.map((row, i) => (
              <Row key={i}>
                <Typography.RowHeading>{row.name}</Typography.RowHeading>
                <CardRow id={row.id}>
                  {row.content.map(
                    (
                      resource, // TODO: This needs to be more dynamic - only the cards can fit on the page should be displayed
                      j
                    ) => (
                      <Card
                        id={resource.id}
                        key={j}
                        name={resource.name}
                        shortDescription={resource.shortDescription}
                        color={resource.color}
                        favorite={resource.favorite}
                        type={resource.type}
                        fullscreen={resource.fullscreen}
                        dropdown={resource.dropdown}
                        badges={resource.badges}
                      />
                    )
                  )}
                </CardRow>
              </Row>
            ))}
          </MainContent>
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
