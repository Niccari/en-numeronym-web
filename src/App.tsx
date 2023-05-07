import { RecoilRoot } from "recoil";
import TopPage from "./components/TopPage";

const App = (): JSX.Element => (
  <RecoilRoot>
    <TopPage />
  </RecoilRoot>
);

export default App;
