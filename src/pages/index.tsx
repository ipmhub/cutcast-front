import Header from "../Components/Header";
import Main from "../Components/Main";
import VideoList from "../Components/VideoList";
import { withProtected } from "../Hook/routes";

function Web() {
  return (
    <div>
      <Header />
      <Main>
        <h1>Seus vídeos</h1>
        <li>
          <VideoList />
        </li>
      </Main>
    </div>
  );
}

export default withProtected(Web);
