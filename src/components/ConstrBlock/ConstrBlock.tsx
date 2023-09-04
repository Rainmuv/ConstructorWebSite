import React from 'react'
import { selectConstrSite, onClickLiReverse, onClickSiteDel, onClickKey } from '../../redux/sliceConstrSite'
import { useSelector, useDispatch } from 'react-redux'

import './ConstrBlock.scss'
import IconTrash from '../../assets/trash.svg'

export const ConstrBlock = () => {
  const { stateClickLi, keyLi, stateArr } = useSelector(selectConstrSite)
  const dispatch = useDispatch()
  const onClickLi = (state: boolean, i: number) => {
    dispatch(onClickLiReverse(state))
    dispatch(onClickKey(i))
    console.log(state);
    
  }
  const onClickDel = (i:number) => {
    dispatch(onClickSiteDel(i))
  }
  return (
    <div className='ConstrBlock' >
      <ul>
        {stateArr ? stateArr.map((item, i) => <li className={`ConstrBlock-li ${keyLi === i && stateClickLi ?  'active' : ''}`} key={i} > <div  onClick={() => onClickLi(!stateClickLi, i)} ><img src={item.icon} alt="#icon" /><p>{item.title}</p></div>{keyLi === i && stateClickLi && <input/>} <img onClick={() => onClickDel(i)} className='img-trash' src={IconTrash} alt="trash" /></li>) : false}
      </ul>
    </div>
  )
}
