import { createBrowserRouter } from "react-router";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import FaqPage from "../pages/FaqPage";
import HeroPage from "../pages/HeroPage";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import ServicesPage from "../pages/ServicesPage";
import TeamPage from "../pages/TeamPage";

const router = createBrowserRouter([
  { path: "/", Component: HomePage },
  { path: "/home", Component: HeroPage },
  { path: "/services", Component: ServicesPage },
  { path: "/about", Component: AboutPage },
  { path: "/team", Component: TeamPage },
  { path: "/faq", Component: FaqPage },
  { path: "/contact", Component: ContactPage },
  { path: "*", Component: NotFoundPage },
]);

export default router;
