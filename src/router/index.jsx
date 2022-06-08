import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppBarClient, AdminDrawer } from "../layouts";
import { HomeView, AboutView, AdminView, PokemonView, RegionView, ProtaView } from "../pages";
import * as ROUTES from "./routes";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppBarClient />}>
                    <Route path={ROUTES.HOME} element={<HomeView />} />
                    <Route path={ROUTES.ABOUT} element={<AboutView />} />
                    <Route path={ROUTES.POKEMON} element={<PokemonView />} />
                    <Route path={ROUTES.REGION} element={<RegionView />} />
                    <Route path={ROUTES.PROTAGONISTA} element={<ProtaView />} />
                </Route>
                <Route element={<AdminDrawer />}>
                    <Route path={ROUTES.ADMIN} element={<AdminView />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;