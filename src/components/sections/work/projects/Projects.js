import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Project } from './Project';

export const Projects = () => {
    const data = useStaticQuery(graphql`
        query {
            allProjectsJson(sort: { date: DESC }) {
                edges {
                    node {
                        title
                        description
                        tech
                        viewOn {
                            url
                            github
                        }
                        image {
                            childImageSharp {
                                gatsbyImageData(
                                    width: 600
                                    placeholder: BLURRED
                                    formats: [AUTO, WEBP, AVIF]
                                )
                            }
                        }
                    }
                }
            }
        }
    `);
    console.log(data.allProjectsJson.edges);
    return (
        <ul className="pb-10">
            {data.allProjectsJson.edges.map(({ node }, i) => (
                <Project key={node.title} project={node} isEven={i % 2 === 0} />
            ))}
        </ul>
    );
};
