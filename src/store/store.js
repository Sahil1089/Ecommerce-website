import { configureStore } from "@reduxjs/toolkit";
import { setUser } from "./Authslice/Authslice";



const store= configureStore(
    {
        reducer : {
            auth :setUser

        }
    }
);

export default store;