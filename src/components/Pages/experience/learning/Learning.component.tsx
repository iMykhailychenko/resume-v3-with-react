import React, { ReactElement } from 'react';

import css from '../Experiance.module.css';

interface IProject {
  name: string;
  code: string;
  site: string;
}

const projects: IProject[] = [
  {
    name: 'My npm package (react-modal-dom)',
    code: 'https://github.com/iMykhailychenko/react-modal-dom',
    site: 'https://www.npmjs.com/package/react-modal-dom',
  },
  {
    name: 'Car rentals app (next.js, redux, typescript, node.js, google api)',
    code: 'https://github.com/iMykhailychenko/king-david-car-rent-app',
    site: 'https://car-rent-theta.vercel.app/',
  },
  {
    name: 'Chatbots (next.js, redux, typescript, node.js, saga)',
    code: 'https://github.com/iMykhailychenko/chat-bot',
    site: 'https://chat-bot-five.vercel.app/',
  },
  {
    name:
      'Blog application (react, redux, typescript, node.js, saga). In progress...',
    code: 'https://github.com/iMykhailychenko/blog-app-mern-ci',
    site: 'https://mykh-blog.netlify.app/',
  },
  {
    name: 'Js router (js, spa)',
    code: 'https://github.com/iMykhailychenko/simple-router',
    site: 'https://simple-router.netlify.app/',
  },
  {
    name: 'Blog app (next.js, redux, typescript, node.js)',
    code: 'https://github.com/iMykhailychenko/develops-today-blog-app',
    site: 'https://develops-today-blog-app.now.sh/',
  },
  {
    name: 'Users list (next.js, redux, typescript)',
    code: 'https://github.com/iMykhailychenko/edicasoft-crud-test-task',
    site: 'https://edicasoft.imykhailychenko.vercel.app/',
  },
  {
    name: 'Users list (react.js, redux, typescript)',
    code: 'https://mykh-merehead.netlify.app/',
    site: 'https://github.com/iMykhailychenko/merehead-users-list',
  },
  {
    name: 'Movie search app (js, spa)',
    code: 'https://github.com/iMykhailychenko/starway-media',
    site: 'https://starway-media.netlify.app/',
  },
  {
    name: 'Planner (react.js, redux, node.js)',
    code: 'https://github.com/LesyaTkachuk/goit-30-final-project-buy-a-flat',
    site: 'https://buy-a-flat.netlify.app/',
  },
];

const Learning = (): ReactElement => {
  return (
    <table className={css.table}>
      <tbody>
        {projects.map((item, index) => (
          <tr key={item.name}>
            <td>{index + 1}</td>
            <td>{item.name}</td>
            <td className={css.tableLink}>
              <a href={item.code} target="_blank" rel="noopener noreferrer">
                source code
              </a>
            </td>
            <td className={css.tableLink}>
              <a href={item.site} target="_blank" rel="noopener noreferrer">
                web site
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Learning;
