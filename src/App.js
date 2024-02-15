import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Homepage from './components/homepage/homepage.component';
import About from './components/about/about.component';
import HomeLayout from './components/home_layout/home_layout.component';
import ProjectsCompleted from './components/projects/projects.component';
import ProjectsInProgress from './components/projects/projects_in_progress.component';
import Contact from './components/contact/contact.component';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeLayout />}>
            <Route index element={<Homepage />} />
            <Route path='about' element={<About />} />
            <Route path='projectscompleted' element={<ProjectsCompleted />} />
            <Route path='projectsinprogress' element={<ProjectsInProgress />} />
            <Route path='contact' element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
