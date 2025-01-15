import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { FixedSizeList as List, ListChildComponentProps } from "react-window";
import { MealSelection as MealSelectionModel } from "../../tables-def/user-profile";
import MainCard from "../../components/MainCard";
import MealCard from "../meals/components/MealCard";
import { getNextWeekDays } from "../../utils/getNextWeekDays";

const Selection: React.FC<ListChildComponentProps<MealSelectionModel[]>> = ({
  index,
  style,
  data,
}) => {
  const selection = data[index];

  return (
    <div
      style={{
        ...style,
        width: "300px",
      }}
      key={index}
    >
      <MainCard border={false} cardContent={false} sx={{ p: 0 }}>
        <Box
          sx={{
            p: 1,
          }}
        >
          <Typography sx={{ fontWeight: "600", fontSize: "18px" }}>
            Day : {selection.day}
          </Typography>
          <Divider sx={{ my: 1 }} />
          <MealCard meal={selection.meal} withExtraInfo={false} />
        </Box>
      </MainCard>
    </div>
  );
};

const MealSelection = ({
  mealSelection,
}: {
  mealSelection: MealSelectionModel[];
}) => {
  const days = getNextWeekDays();
  const [selectedDay, setSelectedDay] = useState(days[0].day.toLowerCase());

  return (
    <Box>
      <SectionTitle>Meal Selection</SectionTitle>
      <Stack mb={1} flexDirection={"row"} alignItems={"center"} gap={0.5}>
        {days.map((day) => (
          <Button
            color={
              selectedDay === day.day.toLowerCase() ? "primary" : "inherit"
            }
            onClick={() => {
              setSelectedDay(day.day.toLowerCase());
            }}
            variant={
              selectedDay === day.day.toLowerCase() ? "outlined" : "text"
            }
          >
            {day.day}
          </Button>
        ))}
      </Stack>
      <List
        itemCount={
          mealSelection?.filter((ms) => ms.day === selectedDay)?.length || 0
        }
        itemSize={310}
        height={400}
        width={1000}
        itemData={mealSelection?.filter((ms) => ms.day === selectedDay) || []}
        layout="horizontal"
        style={{
          width: "100%",
        }}
      >
        {Selection}
      </List>
    </Box>
  );
};

export default MealSelection;
