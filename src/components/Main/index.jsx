import img1 from '../../assets/img-1.png'
import img2 from '../../assets/img-2.png'
import img3 from '../../assets/img-3.png'
import img4 from '../../assets/img-4.png'
import img5 from '../../assets/img-5.png'
import img6 from '../../assets/img-6.png'
import img7 from '../../assets/img-7.png'
import img8 from '../../assets/img-8.png'
import img9 from '../../assets/img-9.png'
import { Container, Header, Divider, Divider2 } from './styles'

export function Main() {
  return(
    <>
      <Header>
        <h3>PROMOÇÃO</h3>
        <p>9 Produtos</p>
      </Header>
      <Divider></Divider>
      <Container>
        <section>
          <img src={ img1 } alt="" />
          <p>Lorem ipsum dolor sit.</p>
          <span> <strong>R$ </strong>50,00</span>
        </section>
        <section>
          <img src={ img2 } alt="" />
          <p>Lorem ipsum dolor sit.</p>
          <span> <strong>R$ </strong>50,00</span>
        </section>
        <section>
          <img src={ img3 } alt="" />
          <p>Lorem ipsum dolor sit.</p>
          <span> <strong>R$ </strong>50,00</span>
        </section>
        <section>
          <img src={ img4 } alt="" />
          <p>Lorem ipsum dolor sit.</p>
          <span> <strong>R$ </strong>50,00</span>
        </section>
        <section>
          <img src={ img5 } alt="" />
          <p>Lorem ipsum dolor sit.</p>
          <span> <strong>R$ </strong>50,00</span>
        </section>
        <section>
          <img src={ img6 } alt="" />
          <p>Lorem ipsum dolor sit.</p>
          <span> <strong>R$ </strong>50,00</span>
        </section>
        <section>
          <img src={ img7 } alt="" />
          <p>Lorem ipsum dolor sit.</p>
          <span> <strong>R$ </strong>50,00</span>
        </section>
        <section>
          <img src={ img8 } alt="" />
          <p>Lorem ipsum dolor sit.</p>
          <span> <strong>R$ </strong>50,00</span>
        </section>
        <section>
          <img src={ img9 } alt="" />
          <p>Lorem ipsum dolor sit.</p>
          <span> <strong>R$ </strong>50,00</span>
        </section>
      </Container>
      <Divider2></Divider2>
    </>
  )
}