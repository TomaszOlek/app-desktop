/* global localStorage */

import React, { useEffect, useState, useRef, useCallback } from "react";

import {
  createSearchParams,
  useNavigate,
  useSearchParams,
  useLocation,
} from "react-router-dom";

import { Box, Flex, Text, Button, Image, useTheme } from "@blend-ui/core";

import { useToast, ToastContextProvider } from "@blend-ui/toast";

import {
  useAppContext,
  useIsMountedRef,
  listAppsQuery,
  updateAppVersionMutation,
  deleteAppVersionMutation,
  getPrifinaUserQuery,
  updateUserProfileMutation,
  useUserMenu,
  withUsermenu,
  i18n,
  createClient,
  // SidebarMenu,
} from "@prifina-apps/utils";

i18n.init();

import { API as GRAPHQL, Auth } from "aws-amplify";
import AWSAppSyncClient, { AUTH_TYPE } from "aws-appsync";

import UploadApp from "../components/UploadApp";

import PropTypes from "prop-types";
import { DevConsoleSidebar } from "../components/components";

import dashboardBanner from "../assets/dashboard-banner.png";

import docs from "../assets/docs.png";
import starterResources from "../assets/starterResources.png";
import slackResources from "../assets/slackResources.png";
import zendeskResources from "../assets/zendeskResources.png";

import * as C from "../components/components";
import { DevConsoleLogo } from "../components/DevConsoleLogo";

import CreateProjectModal from "../components/CreateProjectModal";

import Table from "../components/Table";

import viewDashboard from "@iconify/icons-mdi/view-dashboard";
import mdiWidget from "@iconify/icons-mdi/widgets";
import mdiBookOpenVariant from "@iconify/icons-mdi/book-open-variant";
import mdiSitemap from "@iconify/icons-mdi/sitemap";

import ProjectDetails from "../components/ProjectDetails";

import Resources from "../components/Resources";

import { CssGrid as Grid, CssCell as Cell } from "@blend-ui/css-grid";

const resourceCardItems = [
  {
    src: docs,
    title: i18n.__("prifinaDocsResourcesCardHeading"),
    description: i18n.__("docsResourcesCardPara"),
  },
  {
    src: starterResources,
    title: i18n.__("gitResourcesResourcesCardHeading"),
    description: i18n.__("gitResourcesCardPara"),
  },
  {
    src: zendeskResources,
    title: i18n.__("zenDeskResourcesCardHeading"),
    description: i18n.__("zenResourcesCardPara"),
  },
  {
    src: slackResources,
    title: i18n.__("slackResourcesCardHeading"),
    description: i18n.__("slackResourcesCardPara"),
  },
];

const versionStatus = [
  "init",
  "received",
  "review-stage-1",
  "review-stage-2",
  "review-stage-3",
  "published",
];

const Content = ({
  Component,
  initials,
  notificationCount,
  updateNotificationHandler,
  appSyncClient,
  activeUser,
  ...props
}) => {
  const userMenu = useUserMenu();
  console.log(
    "USERMENU DEV APP INIT  ",
    { ...props },

    initials,
    notificationCount,
    typeof updateNotificationHandler,
    appSyncClient,
    activeUser,
  );

  userMenu.setClientHandler(appSyncClient);
  userMenu.setActiveUser(activeUser);
  useEffect(() => {
    userMenu.show({
      initials: initials,
      effect: { hover: { width: 42 } },
      notifications: notificationCount,
      RecentApps: [],
      PrifinaGraphQLHandler: GRAPHQL,
      prifinaID: activeUser.uuid,
    });
  }, []);

  updateNotificationHandler(userMenu.onUpdate);

  return <Component data={props.data} currentUser={props.currentUser} />;
};

Content.propTypes = {
  Component: PropTypes.elementType.isRequired,
  initials: PropTypes.string,
  notificationCount: PropTypes.number,
  updateNotificationHandler: PropTypes.func,
  appSyncClient: PropTypes.instanceOf(Object),
  activeUser: PropTypes.instanceOf(Object),
  currentUser: PropTypes.instanceOf(Object),
  data: PropTypes.instanceOf(Array),
};

const Main2 = ({ data, currentUser }) => {
  const navigate = useNavigate();

  const { colors } = useTheme();

  const toast = useToast();

  // const appTypes = ["Widget", "App"];

  const [step, setStep] = useState(0);

  switch (step) {
    case 0:
      break;
    case 1:
      break;
    case 2:
      break;
    case 3:
      break;
    case 4:
      break;
    case 5:
      break;
    default:
  }

  console.log("is it saved", data);

  let [searchParams, setSearchParams] = useSearchParams();

  const openProject = props => {
    setSearchParams(createSearchParams({ appID: props.row.values.id }));
    setStep(3);
  };

  const Columns = [
    {
      Header: "Name",
      accessor: "name",
      Cell: props => {
        console.log("props", props);

        return (
          <Text
            onClick={() => {
              openProject(props);
            }}
          >
            {props.cell.value}
          </Text>
        );
      },
    },
    {
      Header: "App ID",
      accessor: "id",
      Cell: props => {
        return <Text>{props.cell.value}</Text>;
      },
    },
    {
      Header: "Type",
      accessor: "appType",
      className: "appType",
      Cell: props => {
        return props.cell.value === 1 ? "App" : "Widget";
      },
    },

    {
      Header: "Title",
      accessor: "title",
    },
    {
      Header: "Status",
      accessor: "status",
      className: "status",
      Cell: cellProp => versionStatus[cellProp.row.values.status],
    },
    {
      Header: "Version",
      accessor: "version",
      className: "version",
    },
    {
      Header: "Next Version",
      accessor: "nextVersion",
      className: "nextVersion",
    },
    {
      Header: "Modified",
      accessor: "modifiedAt",
      className: "date",
      Cell: props => {
        return <Text>{props.cell.value}</Text>;
      },
    },
    {
      Header: () => null, // No header
      id: "edit",
      Cell: props => {
        return (
          <Button
            size="xs"
            onClick={() => {
              openProject(props);
            }}
          >
            Edit
          </Button>
        );
      },
    },
  ];

  const [upload, setUpload] = useState(false);
  const selectedRow = useRef({});

  const sendClick = row => {
    selectedRow.current = row;
    setUpload(true);
  };

  const closeClick = (fileUploaded = false, version) => {
    if (fileUploaded) {
      updateAppVersionMutation(GRAPHQL, {
        id: selectedRow.current.id,
        nextVersion: version,
        status: 1, //received
      }).then(res => {
        setUpload(false);
      });
    } else {
      setUpload(false);
    }
  };

  const [projectDialogOpen, setProjectDialogOpen] = useState(false);

  const onDialogClose = e => {
    setProjectDialogOpen(false);
    e.preventDefault();
  };

  const onDialogClick = async e => {
    setProjectDialogOpen(false);
    setStep(2);
    e.preventDefault();
  };

  const menuItems = [
    // {
    //   label: i18n.__("dashboard"),
    //   icon: viewDashboard,
    //   onClick: () => {
    //     setStep(0);
    //     setSearchParams({});
    //   },
    // },
    {
      label: i18n.__("projects"),
      icon: mdiWidget,
      onClick: () => {
        /*
        setStep(2);
        setSearchParams({});
        */
      },
    },
    // {
    //   label: i18n.__("resources"),
    //   icon: mdiBookOpenVariant,
    //   badgeText: "New",
    //   onClick: () => {
    //     setStep(4);
    //     setSearchParams({});
    //   },
    // },
    // {
    //   label: "Profiles",
    //   icon: mdiSitemap,
    //   disabled: true,
    // },
  ];

  const [updatedData, setUpdatedData] = useState(data);

  useEffect(() => {
    async function fetchData() {
      const prifinaApps = await listAppsQuery(GRAPHQL, {
        filter: { prifinaId: { eq: currentUser.prifinaID } },
      });
      let updatedApps = prifinaApps.data.listApps.items;
      setUpdatedData(updatedApps);
      console.log("updated apps", updatedApps);
    }
    fetchData();
  }, [step]);

  useEffect(() => {
    const showProjects = searchParams.get("appID");

    if (showProjects !== null) {
      setStep(3);
    } else setStep(2);
  }, [searchParams]);

  return (
    <React.Fragment>
      {/* <DevConsoleSidebar items={menuItems} /> */}
      {/* <C.NavbarContainer bg="basePrimary">
        <DevConsoleLogo className="appStudio" />
      </C.NavbarContainer> */}
      <C.ContentContainer>
        {step === 2 && (
          <>
            {projectDialogOpen && (
              <CreateProjectModal
                onClose={onDialogClose}
                onButtonClick={onDialogClick}
                // isOpen={projectDialogOpen}
              />
            )}

            <Box marginTop="48px">
              {updatedData.length > 0 && (
                <Flex
                  bg="baseMuted"
                  flexDirection="column"
                  borderRadius="10px"
                  padding="16px"
                >
                  {upload && (
                    <UploadApp row={selectedRow.current} close={closeClick} />
                  )}
                  {!upload && (
                    <>
                      <Flex
                        alignItems="center"
                        justifyContent="space-between"
                        marginBottom="40px"
                      >
                        <Text textStyle="h3">{i18n.__("projects")}</Text>
                        <Button
                          onClick={() => {
                            setProjectDialogOpen(true);
                          }}
                        >
                          {i18n.__("newProject")}
                        </Button>
                      </Flex>
                      <div className="tableWrap">
                        <Table columns={Columns} data={updatedData} />
                      </div>
                    </>
                  )}
                </Flex>
              )}

              {updatedData.length === 0 && (
                <div
                  style={{
                    //same as table
                    width: 1000,
                  }}
                >
                  <Flex flexDirection="column" alignItems="center" mt="42px">
                    <Image
                      src={dashboardBanner}
                      style={{ position: "relative" }}
                    />
                    <Flex
                      textAlign="center"
                      width="506px"
                      height="196px"
                      flexDirection="column"
                      justifyContent="space-between"
                      alignItems="center"
                      position="absolute"
                      top="243px"
                    >
                      <Text fontSize="xl">
                        {i18n.__("createYourFirstProject")}
                      </Text>
                      <Text color={colors.textMuted} fontSize={20}>
                        {i18n.__("dashboardText")}
                      </Text>
                      <Button
                        size="sm"
                        bg={colors.baseAccent}
                        onClick={() => {
                          setProjectDialogOpen(true);
                        }}
                      >
                        {i18n.__("newProject")}
                      </Button>
                    </Flex>
                  </Flex>
                </div>
              )}
              <Flex
                marginTop="75px"
                width="1027px"
                justifyContent="space-between"
              >
                {/* {resourceCardItems.map((item, index) => (
                  <C.ResourceCard
                    key={index}
                    marginRight="42px"
                    src={item.src}
                    title={item.title}
                    description={item.description}
                  />
                ))} */}
              </Flex>
            </Box>
          </>
        )}
        {step === 3 && (
          <>
            <ProjectDetails
              setStep={setStep}
              setSearchParams={setSearchParams}
            />
          </>
        )}
      </C.ContentContainer>
    </React.Fragment>
  );
};

Main2.propTypes = {
  data: PropTypes.instanceOf(Array),
  currentUser: PropTypes.instanceOf(Object),
  cell: PropTypes.instanceOf(Array),
  row: PropTypes.instanceOf(Array),
};

const Main = ({ data, currentUser }) => {
  const navigate = useNavigate();
  const [projectDialogOpen, setProjectDialogOpen] = useState(false);

  //const { colors } = useTheme();
  //console.log("THEME COLORS ", colors);

  const [updatedData, setUpdatedData] = useState(data);

  const openProject = props => {
    console.log("APP SELECTED ", props);
    navigate("/project/" + props.row.values.id);

    //setSearchParams(createSearchParams({ appID: props.row.values.id }));
  };

  const Columns = [
    {
      Header: "Name",
      accessor: "name",
      Cell: props => {
        console.log("props", props);

        return (
          <Text
            onClick={() => {
              openProject(props);
            }}
          >
            {props.cell.value}
          </Text>
        );
      },
    },
    {
      Header: "App ID",
      accessor: "id",
      Cell: props => {
        return <Text>{props.cell.value}</Text>;
      },
    },
    {
      Header: "Type",
      accessor: "appType",
      className: "appType",
      Cell: props => {
        return props.cell.value === 1 ? "App" : "Widget";
      },
    },

    {
      Header: "Title",
      accessor: "title",
    },
    {
      Header: "Status",
      accessor: "status",
      className: "status",
      Cell: cellProp => versionStatus[cellProp.row.values.status],
    },
    {
      Header: "Version",
      accessor: "version",
      className: "version",
    },
    {
      Header: "Next Version",
      accessor: "nextVersion",
      className: "nextVersion",
    },
    {
      Header: "Modified",
      accessor: "modifiedAt",
      className: "date",
      Cell: props => {
        return <Text>{props.cell.value}</Text>;
      },
    },
    {
      Header: () => null, // No header
      id: "edit",
      Cell: props => {
        return (
          <Button
            size="xs"
            onClick={() => {
              openProject(props);
            }}
          >
            Edit
          </Button>
        );
      },
    },
  ];

  useEffect(() => {
    async function fetchData() {
      const prifinaApps = await listAppsQuery(GRAPHQL, {
        filter: { prifinaId: { eq: currentUser.prifinaID } },
      });
      let updatedApps = prifinaApps.data.listApps.items;
      setUpdatedData(updatedApps);
      console.log("updated apps", updatedApps);
    }
    fetchData();
  }, []);

  const onDialogClose = e => {
    setProjectDialogOpen(false);
    e.preventDefault();
  };

  const onDialogClick = async e => {
    setProjectDialogOpen(false);

    e.preventDefault();
  };
  return (
    <>
      <Box height={"100vh"}>
        {projectDialogOpen && (
          <CreateProjectModal
            onClose={onDialogClose}
            onButtonClick={onDialogClick}
          />
        )}

        <Box>
          <Flex
            alignItems="center"
            justifyContent="space-between"
            marginBottom="40px"
            marginTop={"20px"}
            marginRight={"25px"}
          >
            <Text textStyle="h3">{i18n.__("projects")}</Text>
            <Button
              onClick={() => {
                setProjectDialogOpen(true);
              }}
            >
              {i18n.__("newProject")}
            </Button>
          </Flex>
        </Box>
        <Box bg="baseMuted" marginRight={"25px"} padding={"5px"}>
          <div className="tableWrap">
            <Table columns={Columns} data={updatedData} />
          </div>
        </Box>
        <Box marginTop="48px" marginLeft={"20px"}>
          <Grid columns="repeat(auto-fit,minmax(120px,1fr))">
            {/* {resourceCardItems.map((item, index) => (
              <Cell key={"card-" + index}>
                <C.ResourceCard
                  src={item.src}
                  title={item.title}
                  description={item.description}
                />
              </Cell>
            ))} */}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

Main.propTypes = {
  data: PropTypes.instanceOf(Array),
  currentUser: PropTypes.instanceOf(Object),
};

const Header = ({
  initials,
  notificationCount,
  updateNotificationHandler,
  appSyncClient,
  activeUser,
  ...props
}) => {
  const userMenu = useUserMenu();
  console.log(
    "USERMENU DEV APP INIT  ",
    { ...props },

    initials,
    notificationCount,
    typeof updateNotificationHandler,
    appSyncClient,
    activeUser,
  );

  userMenu.setClientHandler(appSyncClient);
  userMenu.setActiveUser(activeUser);
  useEffect(() => {
    userMenu.show({
      initials: initials,
      //effect: { hover: { width: 42 } },
      notifications: notificationCount,
      RecentApps: [],
      PrifinaGraphQLHandler: GRAPHQL,
      prifinaID: activeUser.uuid,
    });
  }, []);

  updateNotificationHandler(userMenu.onUpdate);

  return (
    <>
      <C.NavbarContainer bg="basePrimary">
        <DevConsoleLogo className="appStudio" />
      </C.NavbarContainer>
    </>
  );
};
Header.propTypes = {
  initials: PropTypes.string,
  notificationCount: PropTypes.number,
  updateNotificationHandler: PropTypes.func,
  appSyncClient: PropTypes.instanceOf(Object),
  activeUser: PropTypes.instanceOf(Object),
  currentUser: PropTypes.instanceOf(Object),
};

const Home = props => {
  const {
    userAuth,
    currentUser,
    isAuthenticated,
    mobileApp,
    APIConfig,
    AUTHConfig,
  } = useAppContext();

  console.log("HOME ", currentUser);

  const { colors } = useTheme();
  console.log("HOME THEME COLORS ", colors);

  const navigate = useNavigate();
  const { pathname, search } = useLocation();
  //coreApp = appPaths[pathname.split("/").pop()];
  console.log("APP HOME ", pathname);

  const [initClient, setInitClient] = useState(false);

  const isMountedRef = useIsMountedRef();
  const apps = useRef([]);
  const componentProps = useRef({});
  const activeUser = useRef({});
  const notificationCount = useRef(0);
  const appProps = useRef({});
  let AppComponent = null;

  if (pathname.startsWith("/project")) {
    // /project/J2Q3FoSU1BKmCemMwTUWEbg
    const selectedAppID = pathname.split("/").pop();
    appProps.current = { appID: selectedAppID };
    AppComponent = ProjectDetails;
  } else {
    appProps.current = {
      data: componentProps.current.data,
      currentUser: componentProps.current.currentUser,
    };
    AppComponent = Main;
  }

  const updateNotification = useCallback(handler => {
    //notificationHandler.current = handler;
  }, []);

  useEffect(() => {
    async function fetchData() {
      if (isMountedRef.current) {
        const currentPrifinaUser = await getPrifinaUserQuery(
          GRAPHQL,
          currentUser.prifinaID,
        );
        console.log("CURRENT USER ", currentPrifinaUser);
        let appProfile = JSON.parse(
          currentPrifinaUser.data.getPrifinaUser.appProfile,
        );
        console.log("CURRENT USER ", appProfile, appProfile.initials);

        let clientEndpoint = "";
        let clientRegion = "";

        if (!appProfile.hasOwnProperty("endpoint")) {
          const defaultProfileUpdate = await updateUserProfileMutation(
            GRAPHQL,
            currentUser.prifinaID,
          );
          console.log("PROFILE UPDATE ", defaultProfileUpdate);
          appProfile = JSON.parse(
            defaultProfileUpdate.data.updateUserProfile.appProfile,
          );
        }
        clientEndpoint = appProfile.endpoint;
        clientRegion = appProfile.region;

        //const client = createClient(clientEndpoint, clientRegion);
        const _currentSession = await Auth.currentSession();
        const client = await createClient(
          clientEndpoint,
          clientRegion,
          _currentSession,
        );

        activeUser.current = {
          name: appProfile.name,
          uuid: currentUser.prifinaID,
          endpoint: clientEndpoint,
          region: clientRegion,
          dataConnectors: currentPrifinaUser.data.getPrifinaUser.dataSources
            ? JSON.parse(currentPrifinaUser.data.getPrifinaUser.dataSources)
            : {},
        };

        const prifinaApps = await listAppsQuery(GRAPHQL, {
          filter: { prifinaId: { eq: currentUser.prifinaID } },
        });
        console.log("APPS ", prifinaApps.data);
        apps.current = prifinaApps.data.listApps.items;

        console.log("APPS ", prifinaApps.data);
        componentProps.current = {
          data: apps.current,
          currentUser: currentUser,
        };

        //console.log("CURRENT SETTINGS 2", client);
        componentProps.current.GraphQLClient = GRAPHQL;
        componentProps.current.appSyncClient = client;
        componentProps.current.prifinaID = currentUser.prifinaID;
        componentProps.current.initials = appProfile.initials;
        componentProps.current.updateNotificationHandler = updateNotification;
        componentProps.current.activeUser = activeUser.current;

        console.log("COMPONENT ", componentProps);
        setInitClient(true);
      }
      return null;
    }

    fetchData();
  }, [isMountedRef.current]);

  const menuItems = [
    // {
    //   label: i18n.__("dashboard"),
    //   icon: viewDashboard,
    //   onClick: () => {
    //     setStep(0);
    //     setSearchParams({});
    //   },
    // },
    {
      label: i18n.__("projects"),
      icon: mdiWidget,
      onClick: () => {
        navigate("/", { replacec: true });
      },
    },
    // {
    //   label: i18n.__("resources"),
    //   icon: mdiBookOpenVariant,
    //   badgeText: "New",
    //   onClick: () => {
    //     setStep(4);
    //     setSearchParams({});
    //   },
    // },
    // {
    //   label: "Profiles",
    //   icon: mdiSitemap,
    //   disabled: true,
    // },
  ];

  return (
    <>
      <ToastContextProvider>
        {initClient && (
          <>
            <Grid
              bg="basePrimary"
              columns={"280px 1fr"}
              rows={"45px 1fr"}
              areas={["header header", "menu content"]}
            >
              <Cell area="header">
                <Header {...componentProps.current} />
              </Cell>
              <Cell area="content">
                <AppComponent {...appProps.current} />
              </Cell>
              <Cell area="menu">
                <DevConsoleSidebar items={menuItems} />
              </Cell>
            </Grid>

            {/* 
            <Content Component={AppComponent} {...componentProps.current} />
            */}
          </>
        )}
      </ToastContextProvider>
    </>
  );
};

Home.displayName = "Home";

export default withUsermenu()(Home);
