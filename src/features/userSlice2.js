import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    selectMail: (state, action) => {
      state.selectedMail = action.payload;
    },
    openSendMessage: (state) => {
      state.sendMessageIsOpen = true; //open the compose to true
    },
    closeSendMessage: (state) => {
      state.sendMessageIsOpen = false; //close the compose to close
    },
  },
});

export const {
  selectMail,
  openSendMessage,
  closeSendMessage,
} = mailSlice.actions;

export const selectOpenMail = (state) => state.mail.selectedMail;

export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;

export default mailSlice.reducer;
