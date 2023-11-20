const path = require('path');

exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions;
    const typeDefs = `
        type ProjectsJson implements Node {
          viewOn: ViewOn
        }
        
        type ViewOn {
          url: String
          github: String
        }
    `;
    createTypes(typeDefs);
};

exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
        resolve: {
            alias: {
                '@components': path.resolve(__dirname, 'src/components'),
                '@images': path.resolve(__dirname, 'src/images'),
                '@hooks': path.resolve(__dirname, 'src/hooks'),
                '@config': path.resolve(__dirname, 'src/config'),
            },
        },
    });
};
