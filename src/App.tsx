import { useState, createRef } from "react"
import DragDropArea from "./DragDropArea"
import Footer from "./Footer"
import VideoPlayer from "./VideoPlayer"
import Header from "./Header"
import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import enTranslation from "./assets/translations/en.json"
import koTranslation from "./assets/translations/ko.json"
import jaTranslation from "./assets/translations/ja.json"
import { MediaFile } from "./utils/getMediaFiles"
// import VideoControlOverlay from "./VideoControlOverlay"

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      ko: {
        translation: koTranslation,
      },
      ja: {
        translation: jaTranslation,
      },
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  })

function App() {
  const [mediaFiles, setMediaFiles] = useState<MediaFile[]>([])
  const videoRef = createRef<HTMLVideoElement>()

  const exit = () => {
    setMediaFiles([])
  }

  if (mediaFiles.length > 0) {
    return (
      <>
        <VideoPlayer mediaFiles={mediaFiles} exit={exit} ref={videoRef} />
        {/* <VideoControlOverlay videoRef={videoRef} /> */}
      </>
    )
  }

  return (
    <>
      <Header />
      <DragDropArea setMediaFiles={setMediaFiles} />
      <Footer />
    </>
  )
}

export default App
