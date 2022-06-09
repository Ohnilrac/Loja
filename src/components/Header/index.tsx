import logo from '../../assets/logo.svg'
import search from '../../assets/search.svg'
import user from '../../assets/user.svg'
import carrinho from '../../assets/carrinho.svg'

import { Container, Content } from './styles'

export function Header() {
  return (
    <Container>
      <Content>
        <div>
          <img src={ logo } alt="selfecare" />
        </div>
        <div>
          <a href="">
            <img src={ search } alt="" />
          </a>
          <a href="">
          <img src={ user } alt="" />
          </a>
          <a href="">
          <img src={ carrinho } alt="" />
          </a>
        </div>
      </Content>
    </Container>
  )
}