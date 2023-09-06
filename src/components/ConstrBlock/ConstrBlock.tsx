import React, { useRef } from 'react'
import { selectConstrSite, onClickLiReverse, onClickSiteDel, onClickKey, onChangeProps, onClickCopy, onClickDown, onClickUp } from '../../redux/sliceConstrSite'
import { useSelector, useDispatch } from 'react-redux'

import './ConstrBlock.scss';
import IconTrash from '../../assets/trash.svg';
import IconArrDown from '../../assets/arrow-down.svg';
import IconCopy from '../../assets/copy.svg';
import IconArrUp from '../../assets/arrow-top.svg'


export const ConstrBlock = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const { stateClickLi, keyLi, stateArr } = useSelector(selectConstrSite)
  const dispatch = useDispatch()
  const onClickLi = ( i: number) => {
    dispatch(onClickLiReverse())
    dispatch(onClickKey(i))
  }
  const onClickDel = (i:number) => {
    dispatch(onClickSiteDel(i))
  }
  const onChange = (i: number) => {
    const value = inputRef.current?.value
    dispatch(onChangeProps({value, i}))
  }
  const onClickCopes = (item: object) => {
    dispatch(onClickCopy(item))
  }
  const onClickDw = (i: number, item: object) => {
    dispatch(onClickDown({i, item}))
  }
  const onClickUper = (i: number, item: object) => {
    dispatch(onClickUp({i, item}))
  }
  

  return (
    <div className='ConstrBlock' >
      <ul>
        {
        stateArr ? stateArr.map((item, i) => 
        <li
          className={`ConstrBlock-li ${keyLi === i && stateClickLi ?  'active' : ''}`} 
          key={i} > 
          <div onClick={() => onClickLi( i)} >
            <img src={item.icon} alt="#icon" />
            <p>{item.title}</p>
          </div>
          {
            keyLi === i && stateClickLi && 
            <>
              {item.title === 'Image' && <p className='p-link'>Insert link</p>}
              <input 
                placeholder='Register now'
                type='text'
                onChange={() => onChange(i)} 
                ref={inputRef} 
                />
                <div className='BorrUpDown' >
                  <img 
                    onClick={() => onClickDw(i, item)}
                    src={IconArrDown} 
                    alt="#BorrUp" 
                    className='BorrUp'
                  />
                  <img 
                    onClick={() => onClickUper(i, item)}
                    src={IconArrUp} 
                    alt="#BorrDown"
                    className='BorrDown'
                  />
                </div>
                <div className='CoaTr'>
                  <img
                    onClick={() => onClickCopes(item)}
                    src={IconCopy} 
                    alt="#Copy"
                    className='Copy' 
                  />
                  <img 
                    onClick={() => onClickDel(i)} 
                    className='Trash' 
                    src={IconTrash} 
                    alt="#Trash" />
                </div>
            </> 
          } 
          
        </li>) : false}
      </ul>
    </div>
  )
}
