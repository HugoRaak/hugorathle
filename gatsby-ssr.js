const React = require('react');

exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
    replaceHeadComponents([
        <script
            key="load-theme-script"
            dangerouslySetInnerHTML={{
                __html: `
                  const localStorageTheme = localStorage.getItem('theme');
                  if (localStorageTheme && localStorageTheme === 'dark') {
                    document.documentElement.setAttribute('data-theme', localStorageTheme);
                  }
                `,
            }}
        />,
        ...getHeadComponents(),
    ]);
};
