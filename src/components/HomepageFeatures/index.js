import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
    {
        title: 'Learn how to set up your own retro',
        Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
        description: (
            <>
                We have made an in-depth series, that takes you through the journey of setting up your own retro, we
                cover how to setup IIS, Cloudflare, database, Atom CMS, Nitro Html5 client, and everything else
                necessary to get up and running!
            </>
        ),
    },
    {
        title: 'Made for the community to enjoy',
        Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
        description: (
            <>
                We made this site for the community to enjoy! A place where people can come and gather inspiration or
                help for various issues or questions that might happen during their retro journey.
            </>
        ),
    },
    {
        title: 'Focus on What Matters',
        Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
        description: (
            <>
                We want you to focus on what matters! So we compiled various guides for you to get going as fast as
                possible ⚡️
            </>
        ),
    },
];

function Feature({Svg, title, description}) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <Svg className={styles.featureSvg} role="img"/>
            </div>
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures() {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
