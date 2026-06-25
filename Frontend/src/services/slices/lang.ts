import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { LANG, TLang } from '../../types/lang'
import { TDropdownItemLang } from '../../component/DropdownLang/DropdownLang'


interface langState {
  lang: TLang
  languages: Array<TDropdownItemLang>
}

const initialState: langState = {
  lang: LANG.EN,
  languages: [],
}

export const langSlice = createSlice({
  name: 'lang',
  initialState,
  reducers: {
    setLang(state, action: PayloadAction<TLang>) {
      state.lang = action.payload
    },
    setLanguages(state, action: PayloadAction<Array<TDropdownItemLang>>) {
      state.languages = action.payload
    },
  },
})

export const { setLang, setLanguages } = langSlice.actions
