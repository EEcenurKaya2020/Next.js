import Layout from '../components/layout'
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 1.5em;
  color: palevioletred;
`;
export default function Home() {
  return <Layout>
    <h1>Hello World!</h1>
    <Title>Merhaba</Title>
  </Layout>
}
