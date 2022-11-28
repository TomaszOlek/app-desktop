import React, { useState, useMemo, useCallback, useEffect } from "react";

import { Storage as S3Storage } from "aws-amplify";

import { Box, Flex, Button, Text, Input, useTheme } from "@blend-ui/core";
import config from "../config";
import { useFormFields } from "@prifina-apps/utils";

import { useToast } from "@blend-ui/toast";

import styled from "styled-components";

import PropTypes from "prop-types";
import { NativeTypes } from "react-dnd-html5-backend";

import { useDrop } from "react-dnd";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const UploadField = styled(Flex)`
  border: ${props => props.theme.borders.uploadField.base};
  width: 451px;
  height: 132px;
  border-radius: 4px;
  background: transparent;
  align-items: center;
  justify-content: center;
`;

const StyledButton = styled(Button)`
  &:hover {
    color: ${props => props.theme.colors.baseHover}!important;
    background-color: transparent !important;
    border: 0 !important;
  }
`;

const list = (files) => {
  const label = file =>
    `'${file.name}' of size '${file.size}' and type '${file.type}'`;
  return files.map(file => (
    <Text fontSize="xs" key={file.name}>
      {label(file)}
    </Text>
  ));
}
const FileList = ({ files }) => {
  if (files.length === 0) {
    // return <Text>Nothing to display</Text>;
    return null;
  }
  const fileList = useMemo(() => list(files), [files]);
  return <Text>{fileList}</Text>;
};

FileList.propTypes = {
  files: PropTypes.array,
}

const TargetBox = ({ onDrop, colors, widgetId }) => {


  const toast = useToast();

  const [uploaded, setUploaded] = useState("");

  const buttonUploadFile = async e => {

    console.log("UPLOAD CLICK...")
    try {
      //check file info
      const file = e.target.files[0];
      console.log("Upload ", file);

      const userRegion = config.cognito.USER_IDENTITY_POOL_ID.split(":")[0];

      const s3Key = widgetId + "/packages/" + widgetId + ".zip";

      S3Storage.configure({
        bucket: `prifina-data-${config.prifinaAccountId}-${config.main_region}`,
        region: userRegion,
      });
      console.log("S3 KEY ", s3Key);

      const s3Status = await S3Storage.put(s3Key, file, {
        level: "public", // private doesn't work
        metadata: { created: new Date().toISOString(), "alt-name": file.name },

        progressCallback(progress) {

          setUploaded(`${Math.floor(progress.loaded / progress.total)}%`);
        },
        customPrefix: {
          public: "uploads/",
        },
      });

      console.log("success ");
      toast.success(`Package uploaded - Progress: ${uploaded}`, {});

      console.log(s3Status);
    } catch (e) {
      console.log("OOPS ", e);
      toast.error("Upload failed", {});
    }
  };

  const [{ canDrop, isOver }, drop] = useDrop(
    () => ({
      accept: [NativeTypes.FILE],

      drop(item) {
        if (onDrop) {
          onDrop(item);
        }
      },
      canDrop(item) {
        return true;
      },
      hover(item) { },
      collect: monitor => {
        const item = monitor.getItem();
        if (item) {
        }
        return {
          isOver: monitor.isOver(),
          canDrop: monitor.canDrop(),
        };
      },
    }),
    [],
  );

  const isActive = canDrop && isOver;
  return (
    <UploadField ref={drop}>
      {/* <Text ref={drop}>
        {isActive ? "Release to drop" : "Drag file here"}
      </Text> */}
      {isActive ? (
        <Text color={colors.textMuted}>Release to drop</Text>
      ) : (
        <Flex width="167px" alignItems="center" flexDirection="column">
          <Text fontSize="xs" color={colors.textMuted}>
            Upload a .zip file of your build
          </Text>
          <Text fontSize="xs" color={colors.textMuted}>
            Drag and drop a file here or
          </Text>
          <StyledButton
            accept={".zip"}
            onChange={buttonUploadFile}
            variation={"file"}
          >
            Click to upload
          </StyledButton>
        </Flex>
      )}
    </UploadField>
  );
};

TargetBox.propTypes = {
  onDrop: PropTypes.func,
  colors: PropTypes.object,
  widgetId: PropTypes.string
}

const UploadFile = ({ widgetId }) => {
  const { colors } = useTheme();

  const toast = useToast();

  const [droppedFiles, setDroppedFiles] = useState([]);

  const [uploaded, setUploaded] = useState("");
  //console.log("PROPS ", props);

  window.LOG_LEVEL = "DEBUG";

  console.log("log", NativeTypes);

  console.log("UPLOAD FILE ", widgetId);

  const handleFileDrop = useCallback(
    item => {
      if (item) {
        const files = item.files;
        setDroppedFiles(files);
      }
    },

    [setDroppedFiles],
  );

  const s3Key = widgetId + "/packages/" + widgetId + ".zip";

  const userRegion = config.cognito.USER_IDENTITY_POOL_ID.split(":")[0];

  /*
  const currentCredentials = JSON.parse(
    localStorage.getItem("PrifinaClientCredentials"),
  );

  console.log("CREDS ", currentCredentials);
  */

  const uploadFile = async e => {
    try {
      S3Storage.configure({
        bucket: `prifina-data-${config.prifinaAccountId}-${config.main_region}`,
        region: userRegion,
      });

      const s3Status = await S3Storage.put(s3Key, droppedFiles[0], {
        level: "public", // private doesn't work

        metadata: {
          created: new Date().toISOString(),
          "alt-name": droppedFiles[0].name,
        },

        progressCallback(progress) {
          setUploaded(`${Math.floor(progress.loaded / progress.total)}%`);
        },
        customPrefix: {
          public: "uploads/",
        },
      });
      // props.close(true, appFields.version);
      console.log("success");
      toast.success(`Package uploaded - Progress: ${uploaded}`, {});
      console.log(s3Status);
    } catch (e) {
      console.log("OOPS ", e);
      {
        uploaded !== "" ? toast.error("Upload failed", {}) : null;
      }
    }
  };

  useEffect(() => {
    if (droppedFiles.length > 0) {
      uploadFile();
    }
    //   }
  }, [droppedFiles]);

  console.log("droppedfiles", droppedFiles);

  return (
    <DndProvider backend={HTML5Backend}>
      <>
        <TargetBox onDrop={handleFileDrop} colors={colors} widgetId={widgetId} />
        <FileList files={droppedFiles} />
        {uploaded !== "" ? (
          <Text fontSize="xs" color={colors.baseSuccess}>
            Progress: {uploaded}
          </Text>
        ) : null}
      </>
    </DndProvider>
  );
};

UploadFile.propTypes = {
  widgetId: PropTypes.string,
  row: PropTypes.array,
  close: PropTypes.func,
};

UploadFile.displayName = "UploadFile";
export default UploadFile;
