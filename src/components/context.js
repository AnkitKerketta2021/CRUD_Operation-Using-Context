import { createContext } from "react";

const MyContext = createContext();

const MyProvider = MyContext.Provider;
const MyConsumer = MyContext.Consumer;

export default MyContext;
export { MyProvider, MyConsumer };
