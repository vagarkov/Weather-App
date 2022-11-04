import { combineReducers } from "redux";

import searchReducer from "./searchReducer";
import locationReducer from "./locationReducer";
import weatherReducer from "./weatherReducer";

const rootReducer = combineReducers({
  search: searchReducer,
  location: locationReducer,
  weather: weatherReducer,
});
//eslint-disable-next-line @typescript-eslint/no-type-alias
export type RootReducer = ReturnType<typeof rootReducer>;

export default rootReducer;
