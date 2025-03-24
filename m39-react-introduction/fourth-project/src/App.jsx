import Posts from "./Posts";
import "./App.css";
import { Suspense } from "react";
import Players from "./Players";

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};

function App() {
  const postsPromise = fetchPosts();
  return (
    <>
      {/* <Suspense fallback={<h3>Post are coming....</h3>}>
        <Posts postsPromise = {postsPromise}></Posts>
      </Suspense> */}
      <Players></Players>
    </>
  );
}

export default App;
