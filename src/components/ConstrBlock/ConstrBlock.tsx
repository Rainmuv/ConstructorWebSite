import React, { useRef } from 'react'
import { selectConstrSite, onClickLiReverse, onClickSiteDel, onClickKey, onChangeProps } from '../../redux/sliceConstrSite'
import { useSelector, useDispatch } from 'react-redux'

import './ConstrBlock.scss'
import IconTrash from '../../assets/trash.svg'

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
  const onChange = async (i: number) => {
    const file = inputRef.current?.files
    const value = inputRef.current?.value
    dispatch(onChangeProps({file,value, i}))
    
  }
  return (
    <div className='ConstrBlock' >
      <ul>
        {stateArr ? stateArr.map((item, i) => 
        <li 
          className={`ConstrBlock-li ${keyLi === i && stateClickLi ?  'active' : ''}`} 
          key={i} > 
            <div  onClick={() => onClickLi( i)} >
              <img src={item.icon} alt="#icon" />
              <p>{item.title}</p>
            </div>
          {keyLi === i && stateClickLi && <input 
                                            multiple 
                                            type={item.title === 'Image' ? 'file' : 'text'} 
                                            accept={item.title === 'Image' ? 'image/*,.png,.jpg,.gif,.web' : ''} 
                                            onChange={() => onChange(i)} ref={inputRef} 
                                            />} 
          <img onClick={() => onClickDel(i)} 
          className='img-trash' 
          src={IconTrash} 
          alt="trash" />
        </li>) : false}
      </ul>
    </div>
  )
}
