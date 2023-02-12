import { useContext } from "react";
import useCustomerContext from "../../context/useCustomerContext";

const useCustomerData = () => useContext(useCustomerContext)

export default useCustomerData