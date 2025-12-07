import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { Home } from "./pages/Home";
import { Match } from "./pages/Match";
import { AddPlayers } from "./pages/AddPlayers";
import { ShowPlayers } from "./pages/ShowPlayers";
import { UpdatePlayer } from "./pages/UpdatePlayer";
import { AddSeedingScore } from "./pages/AddSeedingScore";
import { SeedingPage } from "./pages/SeedingPage";

export const App = ()=>{

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout/>}>
        <Route index element={<Home/>}/>
        <Route path="/add-players" element={<AddPlayers/>}/>
        <Route path="/show-players" element={<ShowPlayers/>}/>
        <Route path="/update-player/:id" element={<UpdatePlayer/>}/>
        <Route path="/seedings-page" element={<SeedingPage/>}/>
        <Route path="/add-seeding-score" element={<AddSeedingScore/>}/>
        <Route path="/matches" element={<Match/>}/>
      </Route>
    )
  )




  return <RouterProvider router={router}/>
}