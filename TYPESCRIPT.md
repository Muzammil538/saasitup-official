# TypeScript Configuration

## Current Configuration

The project uses a comprehensive TypeScript configuration in `tsconfig.json`:

### Key Settings

```json
{
  "strict": true,                    // Enable all strict type-checking
  "noEmit": true,                    // TypeScript compiles to JavaScript, don't emit files
  "esModuleInterop": true,           // Allow importing CommonJS/ES modules
  "jsx": "preserve",                 // JSX for Next.js
  "moduleResolution": "bundler",     // Modern module resolution
  "module": "esnext"                 // ES modules for modern browsers
}
```

### Path Aliases

Mapped in `tsconfig.json` for cleaner imports:

```typescript
@/*               → ./src/*
@/components/*    → ./src/components/*
@/app/*           → ./src/app/*
@/lib/*           → ./src/lib/*
```

## Using Path Aliases

### Examples

```typescript
// instead of:
import Button from "../../components/ui/Button";

// use:
import Button from "@/components/ui/Button";
```

```typescript
// instead of:
import { Button } from "../../lib/utils";

// use:
import { Button } from "@/lib/utils";
```

## TypeScript Best Practices

### 1. Type Safety

All components inherit common props interfaces:

```typescript
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
}
```

### 2. Generate Types with `tsocheck`

```bash
# Auto-generate TypeScript deps for all their imports
npm run typecheck
```

## Common TypeScript Errors

### "Cannot find module"

Run typecheck to identify module resolution issues:

```bash
npm run typecheck
```

### Missing type definitions

Add the correct type reference:

```typescript
import type { Metadata, Viewport } from "next";
```

### Props interface errors

Ensure proper export:

```typescript
// ✅ Correct:
export default function Component();

// ❌ Incorrect (missing parentheses):
export default function Component;
```

## Type Checking Scripts

- `npm run typecheck` - Run TypeScript compiler without emitting files
- `npm run lint` - Run ESLint (includes TypeScript errors)

## Troubleshooting

### Issues with `@/` paths

If you see "Could not resolve" errors:

1. Ensure `tsconfig.json` has the correct path mappings
2. Restart VS Code / your IDE to pick up new config
3. Run `npx tsc --noEmit` to verify the issue

### Component rendering with Types

Components using Next.js features need explicit type imports:

```typescript
function Component() {
  // ✅ ForwardRef component
  type Props = Omit<React.ComponentProps<typeof ChildComponent>, 'ref'> & { ref?: React.Ref<typeof ChildComponent> };
  const ref = React.useRef<typeof ChildComponent>(null);
  
  // ❌ No type - causes error
  const ref = React.useRef(null);
}
```

## TypeScript Version

```json
{
  "compilerOptions": {
    "target": "ES2019",      // Latest modern features
    "lib": ["dom", "esnext"], // DOM + modern language features
    "types": [
      "next",
      "node"
    ]
  }
}
```

## Next.js Specific Types

All Next.js APIs are automatically based on this:

```typescript
import type { Metadata, ImageMetadata } from 'next';
```

## Utility Type Examples

```typescript
// Spread options
import type { ButtonProps } from "./Button";
type Props = React.ComponentProps<typeof Button>;

// Destructure with default
type Props = {
  variant?: VariantsType;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
```