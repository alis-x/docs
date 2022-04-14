# Contributing to alis.exchange Documentation

We believe high quality documentation helps shape a positive relationship between users and the alis.exchange ecosystem. The purpose of this ever-evolving guide is to provide rules and recommendations to maintain and improve the documentation in a consistent fashion. All contributions are manged through pull requests (PR). In this guide you will get an overview of the contribution workflow from opening an issue, creating a PR, reviewing, and merging the PR.

## Getting started

### Issues

If you spot a problem with the docs, before you jump into providing a solution, search if an issue already exists. In the case that it does, use the issue to create a PR. If a related issue doesn't exist, you can open a new issue using a relevant issue form.

## Make Changes
The content of the documents are written in <a href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet" target="_blank">Github Flavoured Markdown</a>. Each document is saved in a relevant topic folder in the docs directory. See the **Adding a new document** section for more info on the different topics.

The site is built with VuePress. See <a href="https://vuepress.vuejs.org/guide/markdown.html" target="_blank">VuePress</a> docs on supported Markdown Extensions and the ability to use Vue syntax inside markdown.
### Making changes on Github

 For simple edits, you can directly edit the file on GitHub and generate a PR. We will then review the PR and make comments if their is rework required.
#### Making changes locally

1. Fork the docs repo to your personal github.
2. Clone the forked repo into your local environment.
3. Install dependencies.
```bash
$ npm install
```
4. Run the docs locally.
```bash
$ npm run docs:dev
```
5. Open the docs locally at 
```
http://localhost:8080
```
## Adding a new file:

1. Create a new `.md` under the relevant topic folder.
    - **Guides**: 
    - **References**: 
    - **Other Resources**: 
2. Adding a link to the navigation bar.
    - Open the config.js file in the docs/.vuepress directory. 
    - In the *sidebar* variable add the link to the new file under the relevant topic folder children array:
        ```
        {
            ...
            children: [
                "/{topic}/{file_name}",
            ]
        },
        ```
    - File names should be separated with hyphens for example `quick-start.md`.
    > The title of the document will be displayed in the sidebar.
3. Commit and push your changes to the forked repo.
4. Make a PR to the original repo with the PR template. We will give comments on the PR if any rework is required.

## Merging your PR

Once we have reviewed your PR we will merge it into the original repo and your're changes will be visible on <a href="https://docs.alis.exchange" target="_blank">doc.alis.exchange</a>   :tada:.


## Working on the content

The set of guidelines provided are to ensure consistency in maintaining and improving the documentation. Following these guidelines would speed up the review process and ultimately the addition of your contribution which would provide higher quality documentation. 

### alis.exchange

All mentions to **alis.exchange** should be in bold type face. This could be achieved by placing double ** before and after **alis.exchange**.
### Page Headers

Each page should have a `YAML front matter` stating the title of the page. This will also be the title displayed in the side navigation bar.

Prev and next links are defined in the `YAML front matter`. Provide the relative page link in the format '/{topic}/{document-name}'.

```
---
title: Page Title
next: {topic}/{document_name}
prev: {topic}/{document_name}
---
```
## Asset Handling

Asset are saved in the `docs/.vuepress/public/assets/images/` directory. Referencing a image in a document should use relative URLs:

```
![](~@asset_directory/image_name.png)
```

The an alias for the asset directory is set as `@asset_directory` and can be referenced by `~` followed by the asset's name.

## External Links

All links to internal and external resources should be referenced with the Vuepress styled links:

```
[display_name](link)
```