import { createSelector } from "reselect";

export const selectAuth = (state:any) => state.user;

export const selectCurrentUser = createSelector(
    [selectAuth],
    (user) => user
  );
  