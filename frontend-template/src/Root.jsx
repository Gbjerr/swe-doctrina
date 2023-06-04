import Header from "./components/Header"
import {
  visibleMenu,
  visibleSideMenu
} from "./components/recoil-state"
import { useRecoilState } from 'recoil';
import Content from "./components/Content";

const Root = () => {
  const [isVisibleBurgerMenu, setIsVisibleBurgerMenu] = useRecoilState(visibleMenu)
  const [isSideMenu, setIsSideMenu] = useRecoilState(visibleSideMenu)

  return (
    <>
      <Header />
      <Content />
    </>
  )
}

export default Root
