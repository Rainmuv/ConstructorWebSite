import { createSlice } from '@reduxjs/toolkit'
import { RootState } from './store'

import { Headline, Paragrah, Button, Img } from './imports'


interface ArrIntial {
  title: string
  icon: string
  props: string
}

interface TypeInitialState {
  stateBlock: ArrIntial[]
  stateClickLi: boolean
  keyLi: number
  stateArr: ArrIntial[]
}

const initialState: TypeInitialState = {
  stateBlock: [
    {
      title: 'Headline',
      icon: Headline,
      props: ''
    },
    {
      title: 'Paragraph',
      icon: Paragrah,
      props: ''
    },
    {
      title: 'Button',
      icon: Button,
      props: ''
    },
    {
      title: 'Image',
      icon: Img,
      props: ''
    },
  ],
  stateClickLi: false,
  keyLi: -1,
  stateArr: [],
}

export const ConstrSite = createSlice({
  name: 'constrSite',
  initialState,
  reducers: {
    onClickLiReverse(state) {
      state.stateClickLi = !state.stateClickLi
    },
    onClickSiteRev(state, action) {
      if(state.stateArr.length === 6) {
        console.log('error');
      } else {
        state.stateArr.unshift(action.payload)
        state.stateClickLi = false
      }
    },
    onClickSiteDel(state, action) {    
      state.stateArr.splice(action.payload, 1)
      state.stateClickLi = false
    },
    onClickKey(state, action) {
      state.keyLi = action.payload
    },
    onChangeProps(state, action) {
      const { file,value, i } = action.payload
      if(state.stateArr[i].title === 'Image') {
        state.stateArr[i].props = file[0]
      } else {
        state.stateArr[i].props = value
      }
    }
  }
})

export const selectConstrSite = (state: RootState) => state.constrSite

export const { onClickLiReverse, onClickSiteRev, onClickSiteDel, onClickKey, onChangeProps } = ConstrSite.actions

export default ConstrSite.reducer