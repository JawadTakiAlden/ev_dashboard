import { alpha, Box } from "@mui/material";
import { MRT_ColumnDef } from "material-react-table";
import JustInViewRender from "../components/JustInViewRender";

export interface SurveyQuestionModel {
  question: string;
  image: string;
}

export const surveyQuestions: SurveyQuestionModel[] = [
  {
    question: "What is your favorite color?",
    image: "https://picsum.photos/200/300?random=1",
  },
  {
    question: "How often do you exercise?",
    image: "https://picsum.photos/200/300?random=2",
  },
  {
    question: "What is your dream travel destination?",
    image: "https://picsum.photos/200/300?random=3",
  },
  {
    question: "What type of music do you enjoy the most?",
    image: "https://picsum.photos/200/300?random=4",
  },
  {
    question: "What is your preferred mode of transportation?",
    image: "https://picsum.photos/200/300?random=5",
  },
  {
    question: "Which cuisine do you like the most?",
    image: "https://picsum.photos/200/300?random=6",
  },
  {
    question: "What is your favorite hobby?",
    image: "https://picsum.photos/200/300?random=7",
  },
  {
    question: "What is your favorite movie genre?",
    image: "https://picsum.photos/200/300?random=8",
  },
  {
    question: "How do you spend your weekends?",
    image: "https://picsum.photos/200/300?random=9",
  },
  {
    question: "What is your favorite season of the year?",
    image: "https://picsum.photos/200/300?random=10",
  },
];

export const surveyQuestionsColumns: MRT_ColumnDef<SurveyQuestionModel, any>[] =
  [
    {
      accessorKey: "question",
      header: "Question",
      maxSize: 200,
    },
    {
      accessorKey: "image",
      header: "Image",
      Cell: ({ row }) => {
        return (
          <JustInViewRender>
            <Box
              sx={{
                width: "100px",
                height: "100px",
                borderRadius: "10%",
                overflow: "hidden",
                backgroundColor: (theme) =>
                  alpha(theme.palette.primary.main, 0.1),
              }}
            >
              <img
                alt={row.original.image}
                src={row.original.image}
                loading="lazy"
                style={{
                  maxWidth: "100%",
                  objectFit: "contain",
                }}
              />
            </Box>
          </JustInViewRender>
        );
      },
    },
  ];
