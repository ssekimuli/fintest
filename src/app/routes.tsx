import { createBrowserRouter } from "react-router";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import DocumentsPage from "../pages/DocumentsPage";
import FaqPage from "../pages/FaqPage";
import HeroPage from "../pages/HeroPage";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import ServicesPage from "../pages/ServicesPage";
import TeamPage from "../pages/TeamPage";
import PseoPage from "../pages/PseoPage";
import PseoHubPage from "../pages/PseoHubPage";

const router = createBrowserRouter([
  { path: "/", Component: HomePage },
  { path: "/home", Component: HeroPage },
  { path: "/services", Component: ServicesPage },
  { path: "/documents", Component: DocumentsPage },
  { path: "/about", Component: AboutPage },
  { path: "/team", Component: TeamPage },
  { path: "/faq", Component: FaqPage },
  { path: "/contact", Component: ContactPage },

  // Programmatic SEO Directories & Hubs
  { path: "/resources", element: <PseoHubPage /> },
  { path: "/locations", element: <PseoHubPage filterCategory="location" /> },
  { path: "/guides", element: <PseoHubPage filterCategory="guide" /> },
  { path: "/sectors", element: <PseoHubPage filterCategory="sector" /> },

  // Programmatic SEO Detail Pages
  { path: "/locations/:slug", Component: PseoPage },
  { path: "/guides/:slug", Component: PseoPage },
  { path: "/sectors/:slug", Component: PseoPage },

  { path: "*", Component: NotFoundPage },
]);

export default router;

