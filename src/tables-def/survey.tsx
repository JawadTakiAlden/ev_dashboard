import { SurveyQuestionModel } from "./surveyQuestions";

export interface Survey {
  id: number;
  title: string;
  package_id: number;
  questions?: SurveyQuestionModel[];
}

export const surveys: Survey[] = [
  {
    id: 1,
    title: "Customer Satisfaction Survey",
    package_id: 101,
  },
];

export const surveyDetail: Survey = {
  id: 1,
  title: "Customer Satisfaction Survey",
  package_id: 101,
  questions: [
    {
      question: "How satisfied are you with our service?",
      image: "https://via.placeholder.com/150",
    },
    {
      question: "How likely are you to recommend us to others?",
      image: "https://via.placeholder.com/150",
    },
    {
      question: "What aspects of our service do you value the most?",
      image: "https://via.placeholder.com/150",
    },
    {
      question: "What areas do you think we can improve?",
      image: "https://via.placeholder.com/150",
    },
    {
      question: "Do you have any additional comments or feedback?",
      image: "https://via.placeholder.com/150",
    },
  ],
};
