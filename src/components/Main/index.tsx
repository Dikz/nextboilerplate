import * as S from './styles'

const Main = ({
  title = 'React Avançado',
  description = 'Typescript, NextJS e Styled Components'
}) => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Imagem de um Atomo e React Avançado ao Lado"
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illutstration
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor de frente para tela de código"
    />
  </S.Wrapper>
)

export default Main
