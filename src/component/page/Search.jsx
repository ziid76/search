import React, { useState } from 'react';
import superagent from 'superagent';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import TextInput from '../ui/TextInput';
import Button from '../ui/Button';

const Wrapper = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    width: 100%;
    max-width: 720px;

    & > * {
        :not(:last-child) {
            margin-bottom: 16px;
        }
    }
`;

const apiKey =
  'pattkLEbneKLwgxbs.54e741074be764fed2c114231c7c464e93f82ea93c3e8655d16aaecd4597c9fb';

function SearchPage(props) {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [title, setTitle] = useState('검색어를 입력하세요');
  const [content, setContent] = useState('');
  const onClick = () => {
    superagent
      .get('https://api.airtable.com/v0/appmfr5Mp5ZbHh1Mc/mtlist')
      .set('Authorization', `Bearer ${apiKey}`)
      .then((response) => {
        setData(response.data);
      });
  };

  return (
    <Wrapper>
      <Container>
        <TextInput
          height={20}
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <Button
          title="검색"
          onClick={() => {
            onClick();
          }}
        />
      </Container>
    </Wrapper>
  );
}

export default SearchPage;
