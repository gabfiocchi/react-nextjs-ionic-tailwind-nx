## Ionic React 
More info React: https://nxext.dev/docs/ionic-react/getting-started.html
More info Capacitor: https://nxext.dev/docs/ionic-react/capacitor.html

## Storybook
More info: https://blog.nrwl.io/build-your-design-system-with-storybook-nx-e3bde4087ad8
### Create new component
- Check the atomic design: https://atomicdesign.bradfrost.com/chapter-2/
Ex: `button`

1. `nx g @nrwl/react:component button --project=shared-ui --directory=lib/atoms --style=scss --export`
2. `npm run build:stories`

