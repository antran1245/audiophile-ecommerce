# Objective

Create a e-commerce website using TypeScript and TailWind CSS

A **Front End** focus website with a **json file** as data.

[**Live Link**](https://antran1245.github.io/audiophile-ecommerce/)

# Packages

- tailWind css
  - CSS framework
- react-router-dom
  - navigate between pages
- typescript
  - JavaScript with additional syntax
- sass/scss
  - CSS extension
- prettier
  - format codes to make it easier to read
- prettier-plugin-tailwindcss
  - auto sorting of classes on elements with tailwind css
  - default setting

# Different Approach

- Overlay for the Cart and Thank You
  - cart -> background as a sibling div element to the content
  - thank you -> background as a parent div to the content
- SASS and Tailwind CSS
  - most div classes are using tailwind css
  - shopOption -> use `@apply`
    - require `foo:bar` after `@apply` in a class to deal with `resolve-url-loader`
      - Credit to [thecrypticace](https://github.com/tailwindlabs/tailwindcss/issues/8806)

# Credit

Project provide by [Frontend Mentor](https://www.frontendmentor.io/challenges/audiophile-ecommerce-website-C8cuSd_wx)
