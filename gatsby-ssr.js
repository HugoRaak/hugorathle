const React = require('react');

exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
    replaceHeadComponents([
        <script
            key="load-theme-script"
            dangerouslySetInnerHTML={{
                __html: `
                    const localStorageTheme = localStorage.getItem('theme');
                    if (!localStorageTheme || localStorageTheme !== 'light') {
                        document.documentElement.setAttribute('data-theme', 'dark');
                    }
                `,
            }}
        />,
        ...getHeadComponents(),
    ]);
};
