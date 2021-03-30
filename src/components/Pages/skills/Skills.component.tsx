import React, { Component, ReactElement } from 'react';

import PageFirstBlock from '../../Common/page-first-block/PageFirstBlock.component';
import PageText from '../../Common/page-text/PageText.component';
import SplitLink from '../../Common/split-link/SplitLink.component';
import css from './Skills.module.css';
import SkillsList from './SkillsList/SkillsList.component';
import SkillsSearch from './SkillsSearch/SkillsSearch.component';

interface Values {
    img: string;
    logoColor: string;
    title: string;
    text: string;
}

export interface IList {
    title: string;
    text: string;
    item: Values[];
}

interface IProps {
    content: {
        title: string;
        text: string[];
        relink: string;
        search: string;
        empty: IList[];
        list: IList[];
    };
}
interface IState {
    search: string;
}

class Skills extends Component<IProps, IState> {
    state = {
        search: '',
    };

    handleChange = (search: string): void => {
        this.setState({ search });
    };

    render(): ReactElement {
        const { title, text, empty, relink, search, list } = this.props.content;
        return (
            <div className="container">
                <PageFirstBlock title={title} img="/images/emoji/skills.png" webp="/images/emoji/skills.webp" />

                <PageText>
                    {text.map((paragraph, id) => (
                        <p key={id}>{paragraph}</p>
                    ))}
                </PageText>

                <SkillsSearch
                    search={search}
                    empty={empty}
                    value={this.state.search}
                    onChange={this.handleChange}
                    list={this.state.search.trim() ? list : empty}
                />

                {this.state.search.trim() ? null : (
                    <article className={css.article}>
                        {list.map((section, index) =>
                            !(index % 2) ? (
                                <section key={index} className={css.section}>
                                    <div className={css.left + ' gradient'}>
                                        <h3>{section.title}</h3>
                                        <p className={css.itemText}>{section.text}</p>
                                    </div>

                                    <div className={css.right}>
                                        <SkillsList skills={section.item} />
                                    </div>
                                </section>
                            ) : (
                                <section key={index} className={css.section}>
                                    <div className={css.right}>
                                        <SkillsList skills={section.item} />
                                    </div>

                                    <div className={css.leftRevers + ' gradient'}>
                                        <h3>{section.title}</h3>
                                        <p className={css.itemText}>{section.text}</p>
                                    </div>
                                </section>
                            ),
                        )}
                    </article>
                )}

                <SplitLink path="/salary" text={relink} />
            </div>
        );
    }
}

export default Skills;
