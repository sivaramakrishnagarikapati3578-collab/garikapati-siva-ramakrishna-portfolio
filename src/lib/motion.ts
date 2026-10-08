import type { CSSProperties } from 'react'

/** Stagger helper for data-reveal / rise elements. */
export const delay = (ms: number) => ({ '--d': `${ms}ms` }) as CSSProperties
