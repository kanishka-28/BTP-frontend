
import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import { Toaster } from 'react-hot-toast';
import Home from './pages/home/home';
import AddStudent from './pages/add_student/add_student';
import axios from 'axios';
import AllStudents from './pages/all_students/all_students';
import CheckAttendance from './pages/check_attendance/check_attendance';

axios.defaults.baseURL = 'http://localhost:4000';

function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <Toaster> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<AddStudent />} />
            <Route path="/list" element={<AllStudents />} />
            <Route path="/check" element={<CheckAttendance />} />
          </Routes>
        {/* </Toaster> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
