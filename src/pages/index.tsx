import Header from "../Components/Header";
import { withProtected } from "../Hook/routes";

function Web() {
  return (
    <div>
      <Header />
      <h1>Web</h1>
    </div>
  );
}

export default withProtected(Web);
