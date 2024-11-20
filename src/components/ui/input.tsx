import * as React from 'react';

import { cn } from '@/lib/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  errorText?: string | boolean; // Used to determine if there is an error
  labelText: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, labelText, errorText, ...props }, ref) => {
    return (
      <div>
        <label htmlFor="" className="capitalize">
          {labelText}
        </label>
        <input
          type={type}
          className={cn(
            'flex h-12 w-full rounded-md border border-slate-200 bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-slate-950 placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-600 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:border-slate-800 dark:file:text-slate-50 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300',
            className
          )}
          ref={ref}
          {...props}
        />
        {errorText && (
          <p className="text-xs text-red-600 md:text-md text-error">
            {errorText}
          </p>
        )}
      </div>
    );
  }
);
Input.displayName = 'Input';

export { Input };
