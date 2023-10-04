import { Route, Routes } from 'react-router-dom'
import { Sidebar, TopPlays, Hamburger } from './components/index'
import AroundYou from './pages/AroundYou'
import Discover from './pages/Discover'
import TopCharts from './pages/TopCharts'
import TopArtists from './pages/TopArtists'
import ArtistDetails from './pages/ArtistDetails'
import SongDetails from './pages/SongDetails'
import Player from './components/musicPlayer/Player'
import { useSelector } from 'react-redux'
import { RootState } from './redux/store'
import { useState } from 'react'


function App() {

  const {isActive} = useSelector((state: RootState) => state.playerSlice)
  const [menuOpen, setMenuOpen] = useState<boolean>(false)

  return (
    <div className='flex flex-col sm:flex-row w-[100%] h-full relative'>
      <div className={`w-[150px] h-full lg:h-auto absolute top-0 duration-300 z-10 ${menuOpen ? 'left-0 shadow-[0_30px_50px_5px_rgba(0,0,0,0.3)]' : '-left-[200px]'} lg:shadow-none lg:static lg:w-[15%] bg-zinc-100/40 backdrop-blur-xl lg:bg-zinc-100 px-4 3xl:p-6`}>
        <Sidebar setMenuOpen={setMenuOpen}/>
      </div>
      <div className='w-full relative sm:w-[68%] lg:w-[65%] bg-zinc-200 px-4 md:px-8 pt-4 md:pt-8 pb-8 sm:pb-36'>
        <div className="w-fit block relative z-30 lg:hidden md:-top-[15px] md:-left-[15px] mb-6 md:mb-2">
          <Hamburger menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        </div>
        <Routes>
          <Route index path={'/'} element={<Discover />}/>
          <Route path={'/around-you'} element={<AroundYou />}/>
          <Route path={'/top-charts'} element={<TopCharts />}/>
          <Route path={'/top-artists'} element={<TopArtists />}/>
          <Route path={'/artist-details/:artistName'} element={<ArtistDetails />}/>
          <Route path={'/song-details/:songId'} element={<SongDetails />}/>
        </Routes>
      </div>
      <div className='top-0 w-[25%] xl:sticky xl:static h-full xl:max-w-[20%] pl-5'>
        <TopPlays />
      </div>
      <div className={`${isActive ? 'block' : 'hidden'}  flex animate-slideup backdrop-blur-lg rounded-t-1xl z-10 fixed bottom-0 left-0 right-0 z-20`}>
        <Player />
      </div>
    </div>
  )
}

export default App
