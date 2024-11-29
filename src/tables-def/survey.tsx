export interface Survey {
  id: number;
  title: string;
  package_id: number;
}

export const surveys: Survey[] = [
  {
    id: 1,
    title: "Customer Satisfaction Survey",
    package_id: 101,
  },
];
