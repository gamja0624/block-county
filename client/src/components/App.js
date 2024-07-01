import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import IndexMain from "./IndexMain/IndexMain"
import UserFeed from "./UserFeed/UserFeedImg/UserFeed";

function App() {
  return (
    <div className="App" style={{ backgroundColor: '#252525' }}>
      {/* Router 설정 */}
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<IndexMain />} />
          <Route path="/UserFeed" element={<UserFeed />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
