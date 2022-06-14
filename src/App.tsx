import { BannerImg } from './components/Banner/styles';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { GlobalStyle } from './styles/global';

export function App() {
  return (
    <>
    <GlobalStyle />
    <Header />
    <BannerImg />
    <Main />
    <Footer />
    </>
  )
}
