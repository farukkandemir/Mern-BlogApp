import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import {Routes, Route} from "react-router-dom";
import PostsPage from "./pages/PostsPage";
import NewPost from "./pages/NewPost";
import {useContextAPI} from "./context/Context";

function App() {
  const {user} = useContextAPI();

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {user?.accessToken && (
          <>
            <Route path="/dashboard" element={<PostsPage />} />
            <Route path="/newpost" element={<NewPost />} />
          </>
        )}

        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
