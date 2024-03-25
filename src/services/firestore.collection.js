import { collection } from "firebase/firestore";
import { db } from "./FbServices";

export const userDetailsRef = collection(db, "userdetails");
