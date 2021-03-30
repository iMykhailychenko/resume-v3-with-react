import clsx from 'clsx';
import React, { ReactElement } from 'react';

import icons from '../../../../assets/icons';
import css from './SkillsList.module.css';

interface Values {
    img: string;
    logoColor: string;
    title: string;
    text: string;
}

interface IProps {
    skills: Values[];
    flex?: boolean;
}

const SkillsList = ({ skills, flex = false }: IProps): ReactElement => (
    <ul className={clsx(css.list, flex && css.flexList)}>
        {skills.map(({ img, logoColor, title, text }, id) => (
            <li key={id} className={clsx(css.item, 'border', flex && css.flexItem)}>
                <div className={css.logo} style={{ background: `${logoColor}` }}>
                    <img className={css.img} src={icons[img]} alt="" />
                </div>

                <h4 className={css.itemTitle}>{title}</h4>
                <p className={css.itemText}>{text}</p>
            </li>
        ))}
    </ul>
);

export default SkillsList;
