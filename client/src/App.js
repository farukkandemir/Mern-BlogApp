import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import {Routes, Route} from "react-router-dom";
import PostsPage from "./pages/PostsPage";
import NewPost from "./pages/NewPost";

function App() {
  const user = true;

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {user && (
          <>
            <Route path="/dashboard" element={<PostsPage />} />
            <Route path="/newpost" element={<NewPost />} />
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;
