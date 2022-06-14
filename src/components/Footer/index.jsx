import { Divider } from "../Main/styles";
import { Content, Enrollment, More, Socials, Finaly, Payments } from "./styles";

import insta from "../../assets/insta.svg"
import face from "../../assets/face.svg"
import master from "../../assets/master.svg"
import visa from "../../assets/visa.svg"
import pay from "../../assets/pay.svg"

export function Footer(){
  return (
    <Content>
      <div>
        <More>
          <a href="">Contato</a>
          <a href="">Termos de serviço</a>
          <a href="">Política de privacidade</a>
          <a href="">Cancelamento, troca e reembolso</a>
        </More>
        <Enrollment>
          <p>Newsletter</p>
          <input type="text" placeholder="Digite seu melhor e-mail" />
          <button>Inscrever</button>
        </Enrollment>
      </div>
      <Divider />
      <Finaly>
        <Socials>
          <a href="">
            <img src= { insta } alt="" />
          </a>
          <a href="">
          <img src= { face } alt="" />
          </a>
        </Socials>
        <Payments>
        <img src={ master } alt="" />
        <img src={ pay } alt="" />
        <img src={ visa } alt="" />
        </Payments >
      </Finaly>
    </Content>
  )
} 