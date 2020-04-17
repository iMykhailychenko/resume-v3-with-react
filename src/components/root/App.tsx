import React from 'react';

// components
import Header from '../header/Header';

//styles
import { GlobalStyle } from '../../styled-components/GlobalStyle.js';

interface Props {
  theme: string
  menu: boolean
};

const App: React.FC<Props> = ({theme, menu}) => {
  return (
    <>
      <GlobalStyle theme={theme} menu={menu}/>

      <Header />

      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, amet?
        апав акпкерен кавава купкепк
      </h1>

      <h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, amet?
        апав акпкерен кавава купкепк
      </h2>

      <h3>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, amet?
        апав акпкерен кавава купкепк
      </h3>

      <p>
        Iste error blanditiis sint enim. Doloribus ullam earum deleniti aliquam
        explicabo recusandae illo alias. Optio voluptatibus dicta eius expedita
        sapiente veniam nulla esse odit quasi ipsa excepturi ab ducimus nihil
        adipisci, nobis molestiae animi alias quisquam culpa doloribus iste quae
        voluptates quos! Eum doloremque molestiae libero, doloribus aperiam
        repudiandae, adipisci amet, facilis est laudantium sequi?
      </p>

      <p className="mark">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi amet non
        sapiente id fugiat aperiam mollitia quidem dolor quisquam repellat rerum
        nemo qui sed porro voluptate unde officia, eveniet laudantium obcaecati
        nihil quam cupiditate temporibus. Iste error blanditiis sint enim.
        Doloribus ullam earum deleniti aliquam explicabo recusandae illo alias.
        Optio voluptatibus dicta eius expedita sapiente veniam nulla esse odit
        quasi ipsa excepturi ab ducimus nihil adipisci, nobis molestiae animi
        alias quisquam culpa doloribus iste quae voluptates quos! Eum doloremque
        molestiae libero, doloribus aperiam repudiandae, adipisci amet, facilis
        est laudantium sequi?
      </p>
    </>
  );
};

export default App;
