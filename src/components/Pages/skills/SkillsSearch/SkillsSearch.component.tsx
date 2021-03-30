import React, { ChangeEvent, ReactElement } from 'react';

import { IList } from '../Skills.component';
import SkillsList from '../SkillsList/SkillsList.component';
import css from './SkillsSearch.module.css';

interface IProps {
    list: IList[];
    empty: IList[];
    value: string;
    search: string;
    onChange: (value: string) => void;
}

const filterSkills = (search: string, list: IList[]): IList[] => {
    if (!search.trim()) return [];
    return list.reduce((acc, item) => {
        search = search.toLocaleLowerCase();
        const filteredList = item.item.filter(
            ({ title, text }) =>
                title.toLocaleLowerCase().includes(search) || text.toLocaleLowerCase().includes(search),
        );
        filteredList.length && acc.push({ title: item.title, text: item.text, item: filteredList });
        return acc;
    }, [] as IList[]);
};

const SkillsSearchItem = ({ skills }: { skills: IList[] }): ReactElement => {
    return (
        <>
            {skills.map(element => (
                <div className={css.skill} key={element.title}>
                    <h3 className={css.title}>{element.title}</h3>
                    <p className={css.text}>{element.text}</p>
                    <SkillsList skills={element.item} flex />
                </div>
            ))}
        </>
    );
};

const SkillsSearch = ({ list, empty, search, value, onChange }: IProps): ReactElement => {
    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        onChange(event.target.value);
    };

    const skills = filterSkills(value.trim(), list);

    return (
        <div>
            <label className={css.label}>
                <p>{search}</p>
                <input
                    className={css.input}
                    placeholder="Search"
                    type="text"
                    value={value}
                    onChange={handleChange}
                />
            </label>
            <div className={css.inner}>
                {value.trim().length ? (
                    skills.length ? (
                        <SkillsSearchItem skills={skills} />
                    ) : (
                        <SkillsSearchItem skills={empty} />
                    )
                ) : null}
            </div>
        </div>
    );
};

export default SkillsSearch;
