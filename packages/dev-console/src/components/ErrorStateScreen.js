import React from "react";
import { Box, Flex, Text, Button, useTheme } from "@blend-ui/core";
import { BlendIcon } from "@blend-ui/icons";

import slackIcon from "@iconify/icons-mdi/slack";
import noteTextOutline from "@iconify/icons-mdi/note-text-outline";
import zendIcon from "@iconify/icons-mdi/zend";

import PropTypes from "prop-types";

const CustomBox = ({ icon, title, description, buttonName, onClick }) => {
  const theme = useTheme()
  return (
    <Flex
      bg="baseTertiary"
      width=" 395px"
      height="226px"
      border={theme.borders.select.gray}
      padding="25px"
      justifyContent="space-between"
      flexDirection="column"
      style={{ position: "relative" }}
    >
      <BlendIcon iconify={icon} color={colors.brandAccent} />
      <Text>{title}</Text>
      <Text mb={44}>{description}</Text>
      <Button
        size="xs"
        onClick={onClick}
        variation="link"
        alignSelf="flex-start"
        style={{ position: "absolute", bottom: 25, left: 25 }}
      >
        {buttonName}
      </Button>
    </Flex>
  );
};



CustomBox.propTypes = {
  icon:PropTypes.node,
  title:PropTypes.string,
  description:PropTypes.string,
  buttonName:PropTypes.string,
  onClick:PropTypes.func
}  

const ErrorStateScreen = () => {
  const { colors } = useTheme();

  const items = [
    {
      icon: noteTextOutline,
      title: "Documentation",
      description: "Dive in to learn all about our product.",
      buttonName: "Start learning",
      onClick: () => {
        window.location.replace("https://docs.prifina.com");
      },
    },
    {
      icon: slackIcon,
      title: "LED Slack",
      description: "Read the latest posts on the liberty equality data Slack.",
      buttonName: "View lastest posts",
      onClick: () => {
        window.location.replace("https://www.prifina.com/slack.html");
      },
    },
    {
      icon: zendIcon,
      title: "Chat to us",
      description: "Can’t find what you’re looking for?",
      buttonName: "Chat to our team",
      onClick: () => {
        window.location.replace("https://prifina.zendesk.com/hc/en-us");
      },
    },
  ];

  return (
    <Flex flexDirection="column" alignItems="center">
      <Box textAlign="center" mb={70} width="500px">
        <Text color={colors.brandAccent}>ERROR MESSAGE</Text>
        <Text textStyle="h1" color={"white"} mb={24}>
          Oops! Something went wrong.
        </Text>
        <Text color={colors.baseWhite}>
          There is a problem with the remote link you entered.
        </Text>
        <Text color={colors.textMuted}>
          This could either be a probelm with the link itself or an error with
          your build. We cannot provide an exact error but here are some
          solutions to common problems.
        </Text>
      </Box>
      <Flex width="1248px" justifyContent="space-between">
        {items.map(item => (
          <CustomBox
            icon={item.icon}
            title={item.title}
            description={item.description}
            buttonName={item.buttonName}
            onClick={item.onClick}
          />
        ))}
      </Flex>
    </Flex>
  );
};

export default ErrorStateScreen;
