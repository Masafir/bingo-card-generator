import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Tile from '../components/Tile';


const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #1f3465;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const GenerateCardButton = styled.button`
  border: 0;
  padding: 15px;
  background-color: #fbc426;
  color: #1f3465;
  border-radius: 10px;
  margin-bottom: 50px;
  cursor: pointer;
`;

const TabBingo = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Home: NextPage = () => {
  const [numbers,setNumbers]: any[] = useState([]);
  const [isGenerate,setIsGenerate] = useState(false);

  const generateNumbers = () => {
    let newNumbers: any[] = [];
    for(let i = 0; i < 15; i++) {
      let newNumber: number;
      do {
         newNumber = Math.floor(Math.random() * 90) +1;
      }
      while(newNumbers.find(n => newNumber === n));
      newNumbers.push(newNumber);
    }

    setNumbers(newNumbers);
  }

  useEffect(() => {
    setIsGenerate(true);
  },[numbers])


  return (
    <Container>
      <GenerateCardButton onClick={() => generateNumbers()}> Générer votre grille </GenerateCardButton>
      {
        isGenerate && <TabBingo>
          {
            numbers.map((n: number) => <Tile value={n} />)
          }
        </TabBingo>
      }
    </Container>
  )
}

export default Home
