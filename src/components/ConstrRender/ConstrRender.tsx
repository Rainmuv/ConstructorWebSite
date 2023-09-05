import React from 'react'
import { selectConstrSite} from '../../redux/sliceConstrSite'

import { useSelector } from 'react-redux'

import './ConstrRender.scss'

export const ConstrRender = () => {
  const { stateArr } = useSelector(selectConstrSite)
  return (
    <div className='ConstrRender'>
      <ul>
        {stateArr ? stateArr.map((item, i) => {
          if(item.title === 'Paragraph') {
            return <li className='Paragraph' key={i} >{item.props}</li>
          } else if(item.title === 'Headline') {
            return <li className='Headline' key={i} ><h1>{item.props}</h1></li>
          }else if(item.title === 'Image') {
            return <li className='Image' key={i} ><img src={item.props} alt='#ph' /></li>
          }else if(item.title === 'Button') {
            return <li key={i} ><button className='Button' >{item.props}</button></li>
          }
          return true
        }) : false}
      </ul>
    </div>
  )
}
