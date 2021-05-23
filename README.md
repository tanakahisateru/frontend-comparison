# JavaScript Framework Comparison

This project is minimum example using several JavaScript frameworks
for server side applications which generates HTMLs with template
engine like PHP or such as.

## Install & Run

```
npm i
npm run build
php -S 0.0.0.0:8000 -t public
```

### Build options

- `npm run build` = Development build (without hash)
- `npm run build:prod` = Production build (with content base hash)

### Test targets

- jQuery plugin
- Vue.js component
- Alpine.js with global function
- Stimulus
- React component

