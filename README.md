# Flutter Documentation Theme

## Prerequisites

- [Ruby](https://www.ruby-lang.org/en/documentation/installation/)
- [Bundler](https://bundler.io/) (depends on Ruby)
- [Node.js](https://nodejs.org/)

## Installation

1. Clone the repository
2. Install needed Ruby gems:
```
bundle install
```
3. Install needed Node.js packages:
```
npm install
```
4. Run the website in development:
```
bundle exec jekyll serve --profile
```
or
```
npm run dev
```

## Deployment
Run the build command to build the website to _site folder:
```
bundle exec jekyll build
```
or
```
npm run build
````

## Update TailwindCSS config to customize the theme colors

Update the tailwind.config.js with the wanted changes and then run the build command to update the CSS.


To customize the theme colors edit the following lines in the tailwind.config.js file:
```
  theme: {
    extend: {
      colors: {
        'theme-color': '#1188D6',
        'theme-header-bg': '#1188D6',
        'theme-header-nav-link': '#FFFFFF',
        'theme-header-nav-link-sel': '#3CA8EF',
        'theme-header-logo-message': '#FFFFFF',
      },
    }
```