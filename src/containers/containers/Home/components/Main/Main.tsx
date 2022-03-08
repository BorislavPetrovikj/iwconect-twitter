import React, {useEffect, useState} from 'react';
import {Post} from './components/Post/Post';
import type {Post as PostType} from './types';

export const Main = () => {
  const [data, setData] = useState<PostType[]>([]);

  useEffect(() => {
    // fetch('https://jsonplaceholder.typicode.com/posts')
    //   .then(response => {
    //     // doagja od fetch - da koristevme axios, nemashe potreba od ovoj chekor
    //     return response.json();
    //     // toa shto go vrakjame ovde - odi kako argument na sledniot then -> data
    //   })
    //   .then((data: PostType[]) => setData(data));

    const fetchFromApi = async () => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts'
      );
      const data: PostType[] = await response.json();
      setData(data);
    };

    fetchFromApi();
  }, []);

  console.log('data', data);

  return (
    <main className="col-6" style={{background: 'black', height: '100vh'}}>
      {data?.map(post => {
        return <Post key={post.id} title={post.title} content={post.body} />;
      })}
    </main>
  );
};
