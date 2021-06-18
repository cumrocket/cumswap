import React, { Suspense, useEffect, useState } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import { LangType } from '@pancakeswap-libs/uikit'
import Popups from '../components/Popups'
import Web3ReactManager from '../components/Web3ReactManager'
import Swap from './Swap'
import { RedirectPathToSwapOnly } from './Swap/redirects'
import { EN, allLanguages } from '../constants/localisation/languageCodes'
import { LanguageContext } from '../hooks/LanguageContext'
import { TranslationsContext } from '../hooks/TranslationsContext'
import Menu from '../components/Menu';

import useGetDocumentTitlePrice from '../hooks/useGetDocumentTitlePrice'

const AppWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  overflow-x: hidden;
  width: 100%;
`

const BodyWrapper = styled.div`
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 1;
  margin-bottom: 64px;
  ${({ theme }) => theme.mediaQueries.lg} {
    margin-bottom: 0;
  }
`

const CACHE_KEY = 'pancakeSwapLanguage'

export default function App() {
  const [selectedLanguage, setSelectedLanguage] = useState<any>(undefined)
  const [translatedLanguage, setTranslatedLanguage] = useState<any>(undefined)
  const [translations, setTranslations] = useState<Array<any>>([])

  const getStoredLang = (storedLangCode: string) => {
    return allLanguages.filter((language) => {
      return language.code === storedLangCode
    })[0]
  }

  useEffect(() => {
    const storedLangCode = localStorage.getItem(CACHE_KEY)
    if (storedLangCode) {
      const storedLang = getStoredLang(storedLangCode)
      setSelectedLanguage(storedLang)
    } else {
      setSelectedLanguage(EN)
    }
  }, [])


  const handleLanguageSelect = (langObject: LangType) => {
    setSelectedLanguage(langObject)
    localStorage.setItem(CACHE_KEY, langObject.code)
  }

  useGetDocumentTitlePrice()

  return (
    <Suspense fallback={null}>
      <HashRouter>
        <AppWrapper>
          <LanguageContext.Provider
            value={{
              selectedLanguage,
              setSelectedLanguage: handleLanguageSelect,
              translatedLanguage,
              setTranslatedLanguage,
            }}
          >
            <TranslationsContext.Provider value={{ translations, setTranslations }}>
              <Menu>
                <BodyWrapper>
                  <Popups />
                  <Web3ReactManager>
                    <Switch>
                      <Route exact strict path="/swap" component={Swap} />
                      <Route component={RedirectPathToSwapOnly} />
                    </Switch>
                  </Web3ReactManager>
                </BodyWrapper>
              </Menu>
            </TranslationsContext.Provider>
          </LanguageContext.Provider>
        </AppWrapper>
      </HashRouter>
    </Suspense>
  )
}
