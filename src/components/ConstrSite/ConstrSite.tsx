import { selectConstrSite, onClickSiteRev } from '../../redux/sliceConstrSite'
import { useSelector, useDispatch } from 'react-redux'

import './ConstrSite.scss'

export const ConstrSite = () => {
  const dispatch = useDispatch()
  const { stateBlock } = useSelector(selectConstrSite)
  const onClickSite = (item: object) => {
    dispatch(onClickSiteRev(item))
  }
  return (
    <div className='ConstrSite'>
      <ul>
        {stateBlock.map((item, i) => 
          <li onClick={() => onClickSite(item)} 
              key={i} ><img src={item.icon} 
              alt="#icon" />
              <p>{item.title}</p>
          </li>)}
      </ul>
    </div>
  )
}
