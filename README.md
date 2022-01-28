# Flutter Documentation Theme

## Prerequisites

- [Ruby](https://www.ruby-lang.org/en/documentation/installation/)
- [Bundler](https://bundler.io/) (depends on Ruby)
- [Node.js](https://nodejs.org/)

On MacOS:

- [Xcode](https://apps.apple.com/us/app/xcode/id497799835?mt=12)

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

Run the build command to build the website to \_site folder:

```
bundle exec jekyll build
```

or

```
npm run build
```

## Update TailwindCSS config to customize the theme colors

Update the tailwind.config.js with the wanted changes and then run the build command to update the CSS.

To customize the theme colors edit the following lines in the tailwind.config.js file:

```
  theme: {
    extend: {
      colors: {
        'theme-color': '#1188D6',
        'theme-header-bg': '#FFFFFF',
        'theme-header-nav-link': '#666666',
        'theme-header-nav-link-sel': '#1188D6',
        'theme-header-nav-link-bg': 'transparent',
        'theme-header-nav-link-bg-sel': 'transparent',
        'theme-header-logo-message': '#999999',
        'theme-header-support-button': '#666666',
        'theme-header-support-button-hover': '#666666',
        'theme-header-support-button-bg': '#FFFFFF',
        'theme-header-support-button-bg-hover': '#E0E5E9',
        'theme-mobile-menu-icon': '#666666',
        'theme-mobile-menu-icon-hover': '#666666',
      },
    }
```
