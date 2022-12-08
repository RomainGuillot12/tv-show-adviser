import s from './style.module.css'
import { TVShowListItem } from '../../components/TVShowListItem/TVShowListItem'

export function TVShowList({ tvShowList, updateCurrentTVShow }) {
  return (
    <div>
      <div className={s.title}>You'll probably like :</div>
      <div className={s.list}>
        {tvShowList.map((tvShow) => {
          return (
            <span className={s.tv_show_item} key={tvShow.id}>
              <TVShowListItem onClick={updateCurrentTVShow} tvShow={tvShow} />
            </span>
          )
        })}
      </div>
    </div>
  )
}
