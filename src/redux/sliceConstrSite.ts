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
      const { value, i } = action.payload
      state.stateArr[i].props = value
    },
    onClickCopy(state, action) {
      state.stateArr.unshift(action.payload)
    },
    onClickUp(state, action) {
      const {i, item} = action.payload
      if(0 === i) {
        console.log('error');
      } else {
        state.stateArr.splice(i - 1, 0, item)
        state.stateArr.splice(i + 1, 1)
      }
    },
    onClickDown(state, action) {
      const {i, item} = action.payload
      if(state.stateArr.length - 1 === i) {
        console.log('error');
      } else {
        state.stateArr.splice(i, 1)
        state.stateArr.splice(i + 1, 0, item)
      }
      
    }
  }
})

export const selectConstrSite = (state: RootState) => state.constrSite

export const { onClickLiReverse, onClickSiteRev, onClickSiteDel, onClickKey, onChangeProps, onClickUp, onClickDown, onClickCopy } = ConstrSite.actions

export default ConstrSite.reducer