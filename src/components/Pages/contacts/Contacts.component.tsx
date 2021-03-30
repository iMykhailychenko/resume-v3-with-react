import { Parallax } from 'rc-scroll-anim';
import React, { ReactElement } from 'react';

import FormComponent from '../../Common/form/Form.container';
import PageFirstBlock from '../../Common/page-first-block/PageFirstBlock.component';
import PageText from '../../Common/page-text/PageText.component';
import SplitLink from '../../Common/split-link/SplitLink.component';
import css from './Contacts.module.css';

interface Props {
    content: {
        [key: string]: string;
    };
}

const Contacts = ({ content }: Props): ReactElement => {
    const mobile = window.innerWidth < 768;

    return (
        <div className="container">
            <PageFirstBlock
                title={content.title}
                img={'/images/emoji/contacts.png'}
                webp={'/images/emoji/contacts.webp'}
            />

            <section className={css.section}>
                <PageText>
                    <h3>{content.secondTitle}</h3>
                    <ul className={css.list}>
                        <li>+38 097 70 24 504</li>
                        <li>igor.c.m@ukr.net</li>
                        <li>
                            <a
                                href="https://www.linkedin.com/in/ihor-mykhailychenko-755778160/"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="telegram"
                            >
                                linkedin
                            </a>
                        </li>
                        <li>
                            <a href="https://t.me/ihormykh" target="_blank" rel="noopener noreferrer" title="telegram">
                                telegram
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.facebook.com/profile.php?id=100005827514352"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="facebook"
                            >
                                facebook
                            </a>
                        </li>
                    </ul>
                </PageText>

                <div className={css.container}>
                    {mobile ? (
                        <div className={css.formWrp}>
                            <FormComponent />
                        </div>
                    ) : (
                        <Parallax
                            className={css.formWrp}
                            animation={{ y: 0, scale: 1, playScale: [0, 0.8] }}
                            style={{ transform: 'translateY(200px) scale(0.9)' }}
                        >
                            <FormComponent />
                        </Parallax>
                    )}

                    <div className={css.mapWrp}>
                        <iframe
                            className={css.map}
                            title="myLocation"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2543.3493411358186!2d30.503960815729435!3d50.397326779468074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c8cb9360005b%3A0x5830ab4023f437c8!2z0LLRg9C70LjRhtGPINCS0LDRgdC40LvRjNC60ZbQstGB0YzQutCwLCA0LCDQmtC40ZfQsiwgMDIwMDA!5e0!3m2!1suk!2sua!4v1588016801284!5m2!1suk!2sua"
                            aria-hidden="false"
                        />
                    </div>
                </div>
            </section>

            <SplitLink path="/download" text={content.relink} />
        </div>
    );
};

export default Contacts;
