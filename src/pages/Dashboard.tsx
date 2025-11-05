import styled from "@emotion/styled";
import * as Typography from "@libs/Typography";
import logogram from "@assets/logos/logogram.svg";
import { sidebarData } from "@database/mockData";
import NavigationBar from "@components/NavigationBar";
import Sidebar from "@components/Sidebar";

import { Card } from "@components/Cards";
import {
  Theme,
  type ColorTheme,
  type DashboardData,
  type ResourceInfo,
} from "@libs/Types";
import * as theme from "@libs/globals";
import React, { useContext } from "react";
import ResourceModal from "@components/modals/ResourceModal";
import { ThemeContext } from "@libs/Context";
import { Colors } from "@libs/globals";
import { DefaultIcon } from "@libs/Icons";

const Background = styled.div<{ theme: ColorTheme }>`
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.text};
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
const Logogram = styled(DefaultIcon)`
  width: 300px;
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
  const [selectedResource, setSelectedResource] =
    React.useState<ResourceInfo | null>(null);
  const [theme, setTheme] = React.useState(Colors[Theme.DARK]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Background theme={theme}>
        <NavigationBar
          highlighted="dashboard"
          theme={theme}
          setTheme={setTheme}
        />
        <ContentBackground>
          <Content>
            <Heading>
              <TitleContainer>
                <Typography.RowHeading style={{ marginBottom: -20 }}>
                  Welcome to
                </Typography.RowHeading>
                <Logogram
                  src={logogram}
                  width={300}
                  height={130}
                  hover={false}
                />
              </TitleContainer>
              <Typography.LargeParagraph id="description">
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
            </Heading>
            <MainContent>
              {data.rows.map((row, i) => (
                <Row key={i}>
                  <Typography.RowHeading>{row.name}</Typography.RowHeading>
                  <CardRow id={row.id}>
                    {row.content.map(
                      (
                        item, // TODO: This needs to be more dynamic - only the cards can fit on the page should be displayed
                        j
                      ) => (
                        <Card
                          resource={item}
                          key={j}
                          setSelectedResource={setSelectedResource}
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
        {selectedResource !== null && (
          <ResourceModal
            visible={selectedResource !== null}
            resource={selectedResource!}
            setSelectedResource={setSelectedResource}
          />
        )}
      </Background>
    </ThemeContext.Provider>
  );
};

export default Dashboard;
