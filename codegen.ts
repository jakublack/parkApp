import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'src/lib/graphql/schema.graphql',
  documents: 'src/**/*.{ts,tsx}',
  generates: {
    'src/lib/graphql/generated/types.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
      config: {
        withHooks: true,
        withHOC: false,
        withComponent: false,
        enumsAsTypes: true,
        skipTypename: true,
      },
    },
  },
};

export default config;
