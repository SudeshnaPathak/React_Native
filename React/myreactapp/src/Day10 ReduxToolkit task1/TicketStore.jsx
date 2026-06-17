import { configureStore } from "@reduxjs/toolkit";
import TicketSlice from "./TicketSlice";

export const TicketStore = configureStore({
    reducer: {
        tickets: TicketSlice
    }
})

export default TicketStore;