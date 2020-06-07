/**
 * all the interface
 */
export type Dispatch = React.Dispatch<IAction>
export interface IState {
  episodes: Array<IEpisode>
  favourites: Array<any>
}
export interface IAction {
  type: string
  payload: Array<IEpisode> | any
}
export interface IEpisodeProps {
  episodes: Array<IEpisode>
  store: {state: IState; dispatch: any}
  toggleFavAction: (state: IState, dispatch: any, episode: IEpisode) => IAction
  favourites: Array<IEpisode>
}

export interface IEpisode {
  airdate: string
  airstamp: string
  airtime: string
  id: number
  image: {medium: string; original: string}
  name: string
  number: number
  runtime: number
  season: number
  summary: string
  url: string
}