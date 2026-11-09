import { create } from "zustand";
import { api } from "../api/api";


const useMessageStore = create((set) => ({
    message: [],
    getMessages: async (own = false) => {
        try {
            const res = own 
            ? await api.getMyMessages()
            : await api.getMyMessages()
            set({ messages: res.data})
        } catch (error) {
        console.error(error)
    }
},

}))