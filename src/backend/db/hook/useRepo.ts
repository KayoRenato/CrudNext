import { useContext } from "react";
import AppContext from "../context/AppContext";

const useRepo = () => useContext(AppContext)

export default useRepo