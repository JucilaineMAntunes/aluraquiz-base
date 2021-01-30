import styled from 'styled-components'

import db from '../db.json';
import Widget from '../pages/src/components/Widget'
import QuizLogo from '../pages/src/components/QuizLogo'
import QuizBackground from '../pages/src/components/QuizBackground'
import Footer from '../pages/src/components/Footer'
import GitHubCorner from '../pages/src/components/GitHubCorner'


/*
 const BackgroundImage = styled.div`
   background-image: url(${db.bg});
   flex: 1;
   background-size: cover;
   background-position: center;
   estilo
 `;*/

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px; 
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return (
    /*<BackgroundImage>
      <QuizContainer>
        <Widget>
          <Widget.Header>
              <h1>  dsfsdfsdf</h1>
              <p> dfdfds</p>
          </Widget.Header>
          

          <Widget.Content>
            <h1>  dsfsdfsdf</h1>
            <p> dfdfds</p>
          </Widget.Content>
        </Widget>

        <Widget>
        <Widget.Content>
          <h1>  juciadfssdfj</h1>
          <p> agora sim</p>
          </Widget.Content>
          </Widget>
      </QuizContainer>
    </BackgroundImage>*/


    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>

            <p>lorem ipsum dolor sit amet...</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/JucilaineMAntunes" />
    </QuizBackground>
  );
}