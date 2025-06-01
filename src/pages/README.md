| File/Folder     | Purpose                                                          |
| --------------- | ---------------------------------------------------------------- |
| `page.jsx`      | Main page file rendered by Next.js when the route is accessed.   |
| `layout.jsx`    | Optional layout to wrap the page and nested routes.              |
| `data/index.ts` | Contains `getPageData()` or similar functions for data fetching. |

---

## Example Usage

### `index.tsx`

```tsx
import React from 'react';
import { getPageData } from './data';

export default async function MyPage({ data }) {
	return <div>My Page Data: {data}</div>;
}

export async function getServerSideProps(ctx) {
	return getPageData(ctx);
}
```
