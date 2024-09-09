import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Screens/Home";
import Events from "./Screens/EventsPage";
import NewEvent from "./Screens/NewEvent";
import EventDetailPage from "./Screens/EventDetailPage";
import EditEvent from "./Screens/EditEvent";
function App() {
  return (
    <div>
      <Routes>
        <Route path="*" element={"404"} />
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/product/:eventId" element={<EventDetailPage />} />
        <Route path="/events/new" element={<NewEvent />} />
        <Route path="/events/:eventId/edit" element={<EditEvent />} />
      </Routes>
    </div>
  );
}

export default App;
