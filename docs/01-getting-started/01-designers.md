# Getting Started: Designers

## Markdown

Content in Verdigris is written in Markdown (see [Markdown guide](https://guides.github.com/features/mastering-markdown/)).
> **Notes**:
> 1. Internal links should ignore the `00-` prefix (of directories and files) and the file extension.
>    - For example, a link to `../02-guides/01-contributing.md` would be written as `../guides/contributing`
> 2. Use `../` instead of `./` when linking to internal pages
> 3. Images are saved to the directory: `./docs/assets` and are their URLs are referenced in Markdown as `/assets/filename.png`

## Updating Content via GitHub

Navigate to the [deployed site](http://verdigris.andrew.codes) and view the page you wish to update. In the upper right corner, click the `edit in github` button. This will take you to GitHub where you can edit the page's markdown source through their online editor. Once done, commit your changes at the bottom of the page.

<img style="max-width: 100%;" src="/assets/edit-in-github.gif" alt="Update via GitHub"/>

## Updating Content Locally

### Documentation Pages

Docs pages are located within section directories in: `./docs`. Each section directory; such as `./docs/01-getting-started` contains Markdown files of pages. File names will be used as the menu item text; excluding the number and following dash. The number dash, `01-` is used to order content in the navigation menu. Pages and document sections are ordered by file name.

### Component Documentation Pages

Component related documentation pages; such as "usages" and "style" may be found in the component's respective `docs` directory. For example, `analytics` main docs may be found `./packages/analytics/docs/usage.md` or `./packages/analytics/docs/style.md`. Any additional component documentation pages can be added underneath a `docs` directory within the component docs directory. `./packages/analytics/docs/docs/01-some-page.md`. Pages are ordered by file name in the navigation.

## Adding New Pages

New markdown files can be added to any docs directory. Additionally, new directories (with markdown files) added to `./docs` directory will show up as a navigation section and navigation items.