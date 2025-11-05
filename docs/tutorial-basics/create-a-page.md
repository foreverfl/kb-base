---
sidebar_position: 1
---

# 페이지 생성하기

Docusaurus에서 새로운 **페이지**를 생성하는 방법을 알아봅니다.

## 새 페이지 추가하기

`src/pages` 디렉토리에 React 컴포넌트를 추가하여 새로운 페이지를 생성할 수 있습니다.

- `src/pages/index.js` → `localhost:3000/`
- `src/pages/foo.md` → `localhost:3000/foo`
- `src/pages/foo/bar.js` → `localhost:3000/foo/bar`

## 첫 번째 React 페이지 만들기

`src/pages/my-react-page.js` 파일을 생성합니다:

```jsx
import React from 'react';
import Layout from '@theme/Layout';

export default function MyReactPage() {
  return (
    <Layout>
      <h1>My React page</h1>
      <p>This is a React page</p>
    </Layout>
  );
}
```

이제 `http://localhost:3000/my-react-page`에서 새 페이지를 확인할 수 있습니다.

## 첫 번째 Markdown 페이지 만들기

`src/pages/my-markdown-page.md` 파일을 생성합니다:

```markdown
# My Markdown page

This is a Markdown page
```

이제 `http://localhost:3000/my-markdown-page`에서 새 페이지를 확인할 수 있습니다.