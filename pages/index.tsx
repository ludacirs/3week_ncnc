import React from 'react';
import styled from 'styled-components';
import { getCategories, getSoonItems } from 'api';
import { useAxios } from 'hooks';
import { SoonItem, Category } from 'types';

const HomeWrapper = styled.div`
  background-color: yellow;
`;

interface HomeProps {
  data: {
    categories: Category[];
  };
}

const Home = ({ data }: HomeProps) => {
  const { categories } = data; // 카테고리 - 대분류
  const soonItems = useAxios<SoonItem[]>(getSoonItems); // 땡처리 아이템

  return <HomeWrapper>Home</HomeWrapper>;
};

export const getStaticProps = async () => {
  const categories = await getCategories();

  return { props: { data: { categories } } };
};

export default Home;
