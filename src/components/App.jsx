import { Route, Routes } from 'react-router-dom';
import AppBar from './AppBar/AppBar';
import { HomePage, ContactsPage, HeroDetailsPage } from 'pages';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppBar />}>
          <Route index element={<HomePage />} />

          <Route path="hero" element={<ContactsPage />} />
          <Route path="hero/:id" element={<HeroDetailsPage />}>
            {/* <Route path="gallery" element={<Gallery />}></Route> */}
          </Route>
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
}
