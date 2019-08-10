import React, {Fragment, useContext, useEffect} from 'react'
import './App.css'
import {Store} from './Store'
import {IEpisode, IAction} from './interfaces'
// import EpisodesList from './EpisodesList';

const EpisodesList = React.lazy(() => import('./EpisodesList'))

export default function App(): JSX.Element {
  // const store = useContext(Store)
  const {state, dispatch} = useContext(Store)
  useEffect(() => {
    state.episodes.length === 0 && fetchDataAction()
  })
  const fetchDataAction = async () => {
    const URL =
      'https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes'
    const data = await fetch(URL)
    const dataJSON = await data.json()

    return dispatch({
      type: 'FETCH_DATA',
      payload: dataJSON._embedded.episodes
    })
  }
  const toggleFavAction = (episode: IEpisode): IAction => {
    const episodeInFav = state.favourites.includes(episode)
    let dispatchObj = {
      type: 'ADD_FAV',
      payload: episode
    }
    if (episodeInFav) {
      const favWithoutEpisode = state.favourites.filter(
        (fav: IEpisode) => fav.id !== episode.id
      )
      dispatchObj = {
        type: 'REMOVE_FAV',
        payload: favWithoutEpisode
      }
    }
    return dispatch(dispatchObj)
  }
  const props = {
    episodes: state.episodes,
    toggleFavAction: toggleFavAction,
    favourites: state.favourites
  }
  return (
    <Fragment>
      <header className="header">
        <div>
          <h1>Rock</h1>
          <p>megaman</p>
        </div>
        <div>favourite(s): {state.favourites.length}</div>
      </header>
      <React.Suspense fallback={<div>loading......</div>}>
        <section className="episode-layout">
          <EpisodesList {...props} />
        </section>
      </React.Suspense>
    </Fragment>
  )
}
