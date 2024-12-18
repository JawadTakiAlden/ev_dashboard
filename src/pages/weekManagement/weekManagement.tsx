import React, { useState } from "react";
import Grid from "@mui/material/Grid2";
import {
  Avatar,
  Box,
  Button,
  Fade,
  IconButton,
  ListItemButton,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import { gridSpacing } from "../../config";
import { Meal } from "../../tables-def/meals";
import { mealTypes } from "../../tables-def/meal-types";

import { FixedSizeList as List, ListChildComponentProps } from "react-window";
import MealCard from "../meals/components/MealCard";
import { IoFilterSharp } from "react-icons/io5";
import MainCard from "../../components/MainCard";
import { MdDeleteSweep } from "react-icons/md";

const ITEM_HEIGHT = 48;

const days = [
  "Saturday",
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
];

const MiniItem = ({ meal }: { meal: Meal }) => {
  return (
    <MainCard border={false} sx={{ p: 0 }}>
      <Stack flexDirection={"row"} gap={1} alignItems={"center"}>
        <Avatar variant="rounded" src={meal.image_url} />
        <Typography>{meal.name}</Typography>
      </Stack>
    </MainCard>
  );
};

interface WeekManagmentStore {
  [key: string]: {
    meals: number[];
  };
}

const WeekManagement = () => {
  const types = [{ id: 0, title: "All" }, ...mealTypes];
  const [day, setDay] = useState<string>(days[0]);
  const [mealFilter, setMealFilter] = useState(types[0]);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const [droppedMeals, setDroppedMeals] = useState<WeekManagmentStore>({
    Saturday: {
      meals: [],
    },
    Sunday: {
      meals: [],
    },
    Monday: {
      meals: [],
    },
    Tuesday: {
      meals: [],
    },
    Wednesday: {
      meals: [],
    },
    Thursday: {
      meals: [],
    },
    Friday: {
      meals: [],
    },
  });

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const SelectableMeal = ({ index, style, data }: ListChildComponentProps) => {
    const [isDraging, setIsDraging] = useState(false);
    const meal = data[index];

    return (
      <div
        style={{
          ...style,
          width: "300px",
          transition: "0.3s",
          transform: isDraging ? `scale(0.8)` : `scale(1)`,
          cursor: "-webkit-grab",
        }}
        draggable
        onDragStart={(e) => {
          e.dataTransfer.setData("meal-id", meal.id.toString()); // Add meal ID to dataTransfer
          setIsDraging(true);
        }}
        onDragEnd={() => {
          setIsDraging(false);
        }}
      >
        <MealCard withExtraInfo={false} withAction={false} meal={meal} />
      </div>
    );
  };

  return (
    <Box>
      <Grid container spacing={gridSpacing}>
        <Grid size={12}>
          <div>
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              variant="outlined"
              endIcon={<IoFilterSharp />}
            >
              {mealFilter.title}
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              TransitionComponent={Fade}
              slotProps={{
                paper: {
                  style: {
                    maxHeight: ITEM_HEIGHT * 4.5,
                    width: "20ch",
                  },
                },
              }}
            >
              {types.map((filter) => (
                <MenuItem onClick={() => setMealFilter(filter)}>
                  {filter.title}
                </MenuItem>
              ))}
            </Menu>
          </div>
          <Box>
            <List
              height={420}
              itemCount={mealOptions.length}
              itemData={mealOptions}
              itemSize={310}
              layout="horizontal"
              width={1000}
              style={{
                width: "100%",
              }}
            >
              {SelectableMeal}
            </List>
          </Box>
        </Grid>
        <Grid size={12}>
          <Grid container columnSpacing={0.5} alignItems={"stretch"}>
            <Grid size={"auto"}>
              <Stack sx={{ height: "100%" }} justifyContent={"space-between"}>
                {days.map((item, i) => (
                  <ListItemButton
                    selected={day === item}
                    onClick={() => {
                      setDay(item);
                    }}
                    key={i}
                  >
                    {item}
                  </ListItemButton>
                ))}
              </Stack>
            </Grid>
            <Grid size="grow">
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "10px",
                  border: (theme) => `2px dashed ${theme.palette.divider}`,
                  p: 4,
                }}
                draggable
                onDragOver={(e) => {
                  e.preventDefault();
                }}
                onDrop={(e) => {
                  e.preventDefault();
                  const mealId = e.dataTransfer.getData("meal-id"); // Get the dropped meal ID
                  if (mealId) {
                    const parsedMealId = parseInt(mealId, 10);
                    const isAdded =
                      droppedMeals[day]?.meals?.includes(parsedMealId);
                    if (!isAdded) {
                      setDroppedMeals({
                        ...droppedMeals,
                        [day]: {
                          meals: [...droppedMeals[day].meals, parsedMealId],
                        },
                      });
                    }
                  }
                }}
              >
                <Stack flexDirection={"row"} flexWrap={"wrap"} gap={2}>
                  {droppedMeals[day]?.meals?.map((mealId) => {
                    const meal = meals.find((m) => m.id === mealId);
                    return meal ? (
                      <Stack
                        flexDirection={"row"}
                        gap={4}
                        alignItems={"center"}
                        sx={{ backgroundColor: "background.paper", px: 1 }}
                      >
                        <MiniItem key={mealId} meal={meal} />
                        <IconButton
                          onClick={() => {
                            const newMmeals = droppedMeals[day].meals.filter(
                              (m) => m !== mealId
                            );
                            setDroppedMeals({
                              ...droppedMeals,
                              [day]: {
                                meals: newMmeals,
                              },
                            });
                          }}
                          color="error"
                        >
                          <MdDeleteSweep />
                        </IconButton>
                      </Stack>
                    ) : null;
                  })}
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
export default WeekManagement;
