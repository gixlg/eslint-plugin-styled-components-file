# eslint-plugin-styled-components-file

## Context
In project where **React** is used in conjunction with [styled-component](https://styled-components.com/),  
it might happen that the components can have the rendering logic + business logic + style inside a single tsx file.

**This might be confusing.**
[Vishal Sharma](https://www.linkedin.com/in/vishal-sharma-29749bb6/) introduced a nice way to segregate the style part:  

The creation of a file with the extension `.style.tsx` for bounding the styled components.  
e.g.
```
.
└── FooterLinkGroup/
├── FooterLinkGroup.styles.tsx <-----
├── FooterLinkGroup.test.tsx
└── FooterLinkGroup.tsx
```

That change it’s as simple as beneficial.  
In the past file length start to increase - multiple scroll are needed from the top of the file for reaching the render function.  
With the extraction of the style in a separate file the code immediately appear to be more manageable and improves the separation of concerns and the readability in the code.  

In addition, importing the style with
```
import * as S from './LinkGroup.styles';
```
and using inside the JSX
```
<Container>
    <S.Title>{title}</S.Title>
    {links.map((element) => (
        <S.Link href={`${element.url}`}>
            {element.text}
        </S.Link>
    ))}
</Container>
```
has the benefit that the `S.` makes very clear what are just normal HTML tag with a styled on it and what are “React component” with logic.

**This [eslint custom plugin](https://eslint.org/docs/latest/extend/custom-rule-tutorial) ensure that this patter is followed**.

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-styled-components-file`:

```sh
npm install eslint-plugin-styled-components-file --save-dev
```

## Usage

Add `styled-components-file` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "styled-components-file"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "styled-components-file/import-style-file-rule": 2
    }
}
```



## Configurations

<!-- begin auto-generated configs list -->
TODO: Run eslint-doc-generator to generate the configs list (or delete this section if no configs are offered).
<!-- end auto-generated configs list -->



## Rules

<!-- begin auto-generated rules list -->
TODO: Run eslint-doc-generator to generate the rules list.
<!-- end auto-generated rules list -->


