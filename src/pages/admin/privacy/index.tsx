import {
  alpha,
  Box,
  IconButton,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import {
  Editor,
  EditorState,
  RichUtils,
  ContentState,
  convertFromHTML,
} from "draft-js";
import "draft-js/dist/Draft.css";
import { useEffect, useState } from "react";
import useGetGetDarkValue from "../../../utils/useGetGetDarkValue";
import { VscListOrdered } from "react-icons/vsc";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { useGetPrivacy, useUpdatePrivacy } from "../../../api/info";
import LoadingDataError from "../../../components/LoadingDataError";
import { LoadingButton } from "@mui/lab";
import { stateToHTML } from "draft-js-export-html";

const TextEditorButton = styled(IconButton)(({ theme }) => ({
  borderRadius: "6px",
  backgroundColor: alpha(theme.palette.primary.light, 0.05),
  fontSize: "14px",
  minWidth: "30px",
}));

const Privacy = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const privacy = useGetPrivacy();

  const updatePrivacy = useUpdatePrivacy();

  const { getVlaue } = useGetGetDarkValue();

  const handleKeyCommand = (command: string) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      setEditorState(newState);
      return "handled";
    }
    return "not-handled";
  };

  const toggleInlineStyle = (style: string) => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, style));
  };

  const toggleBlockType = (blockType: string) => {
    setEditorState(RichUtils.toggleBlockType(editorState, blockType));
  };

  const handleSave = () => {
    const contentState = editorState.getCurrentContent();

    const htmlContent = stateToHTML(contentState);

    updatePrivacy.mutate({ content: htmlContent });
  };

  useEffect(() => {
    if (!privacy.isLoading && !privacy.isError && privacy.data?.data) {
      const html = privacy.data.data.content;

      const blocksFromHTML = convertFromHTML(html);
      const contentState = ContentState.createFromBlockArray(
        blocksFromHTML.contentBlocks,
        blocksFromHTML.entityMap
      );

      setEditorState(EditorState.createWithContent(contentState));
    }
  }, [privacy.isLoading, privacy.isError, privacy.data]);

  if (privacy.isLoading) {
    return <Typography>Loading ...</Typography>;
  }

  if (privacy.isError) {
    return <LoadingDataError refetch={privacy.refetch} />;
  }

  return (
    <Box>
      <Box
        sx={{
          minHeight: "400px",
          backgroundColor: "background.paper",
          mb: 1,
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: (theme) =>
            `1px 1px 15px -5px ${getVlaue(
              theme.palette.grey[800],
              theme.palette.grey[400]
            )}`,
        }}
      >
        <Box>
          <Stack
            flexDirection={"row"}
            gap={1}
            alignItems={"flex-start"}
            flexWrap={"nowrap"}
          >
            <Stack
              gap={0.5}
              flexDirection={"column"}
              sx={{
                p: 1,
                //   backgroundColor: getVlaue("grey.900", "grey.200"),
                borderRadius: "8px",
              }}
            >
              <Stack flexDirection={"row"} gap={0.5}>
                <TextEditorButton onClick={() => toggleInlineStyle("BOLD")}>
                  B
                </TextEditorButton>
                <TextEditorButton onClick={() => toggleInlineStyle("ITALIC")}>
                  I
                </TextEditorButton>
              </Stack>
              <Stack flexDirection={"row"} gap={0.5}>
                <TextEditorButton
                  onClick={() => toggleBlockType("ordered-list-item")}
                >
                  <VscListOrdered />
                </TextEditorButton>
                <TextEditorButton
                  onClick={() => toggleBlockType("unordered-list-item")}
                >
                  <AiOutlineUnorderedList />
                </TextEditorButton>
              </Stack>
            </Stack>
            <Stack
              gap={0.5}
              flexDirection={"column"}
              sx={{
                p: 1,
                //   backgroundColor: getVlaue("grey.900", "grey.200"),
                borderRadius: "8px",
              }}
            >
              <Stack gap={0.5} flexDirection={"row"}>
                <TextEditorButton onClick={() => toggleBlockType("header-one")}>
                  h1
                </TextEditorButton>
                <TextEditorButton onClick={() => toggleBlockType("header-two")}>
                  h2
                </TextEditorButton>
                <TextEditorButton
                  onClick={() => toggleBlockType("header-three")}
                >
                  h3
                </TextEditorButton>
              </Stack>
              <Stack gap={0.5} flexDirection={"row"}>
                <TextEditorButton
                  onClick={() => toggleBlockType("header-four")}
                >
                  h4
                </TextEditorButton>
                <TextEditorButton
                  onClick={() => toggleBlockType("header-five")}
                >
                  h5
                </TextEditorButton>
                <TextEditorButton onClick={() => toggleBlockType("header-six")}>
                  h6
                </TextEditorButton>
              </Stack>
            </Stack>
          </Stack>
        </Box>
        <Box
          sx={{
            p: 1,
            backgroundColor: getVlaue("grey.900", "grey.100"),
            "& .DraftEditor-root": {
              minHeight: "400px",
            },
          }}
        >
          <Editor
            editorState={editorState}
            onChange={setEditorState}
            handleKeyCommand={handleKeyCommand}
            placeholder="Start typing here..."
          />
        </Box>
      </Box>
      <LoadingButton
        variant="contained"
        loading={updatePrivacy.isPending}
        onClick={handleSave}
      >
        Save
      </LoadingButton>
    </Box>
  );
};

export default Privacy;
