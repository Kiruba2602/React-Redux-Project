import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store/store";
import { fetchHabits } from "../store/habit-slice";
import { Paper, Typography } from "@mui/material";

const HabitStats: React.FC = () => {
  const { habits, isLoading, error } = useSelector((state: RootState) => state.habits);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchHabits());
  }, []);

  return <Paper elevation={2} sx={{ p: 2, mt: 4 }}>
    <Typography variant="h6" gutterBottom>Habit Statistics</Typography>
    <Typography variant="body1">Total Habits</Typography>
    <Typography variant="body1">Completed Today</Typography>
    <Typography variant="body1">Longest Streak</Typography>
  </Paper>;
};

export default HabitStats;
