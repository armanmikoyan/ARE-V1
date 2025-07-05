| File             | Purpose                                                             |
| ---------------- | ------------------------------------------------------------------- |
| `index.tsx`      | Main component file. Import and use this component from here.       |
| `index.test.tsx` | Main component's test file.                                         |
| `hooks.ts`       | Local custom hooks used by the component.                           |
| `styles.ts`      | Styled Components or style definitions.                             |
| `utils.ts`       | Utility/helper functions scoped to this component.                  |
| `utils.test.js`  | Unit tests for the utility functions.                               |
| `types.ts`       | TypeScript type/interface/enums declarations used in the component. |
| `states.ts`      | Local Jotai atomsused in this component.                            |
| `constants.ts`   | Constant values                                                     |
| `contents.ts`    | Local Contents for dynamic mapping                                  |

---

## Example Usage

```tsx
// MyComponent/index.tsx
import React from 'react';
import { useMyCustomHook } from './hooks';
import { Wrapper } from './styles';
import { formatLabel } from './utils';
import { countAtom } from './states';
import { data } from './contents';
import { useAtom } from 'jotai';

export default function MyComponent() {
	const { label } = useMyCustomHook();
	const [count] = useAtom(countAtom);

	return (
		<Wrapper>
			{data.map((val, id) => (
				<span key={id}>val</span>
			))}
			{formatLabel(labelText)} and {count}
		</Wrapper>
	);
}
```
