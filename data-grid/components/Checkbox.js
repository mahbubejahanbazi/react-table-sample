import React from 'react';
import { useRef, useEffect } from 'react';

export const Checkbox = React.forwardRef(({ indeterminate, ...rest }, ref) => {
  const defaultRef = useRef();
  const resolveRef = ref || defaultRef;
  useEffect(() => {
    resolveRef.current.indeterminate = indeterminate;
  }, [resolveRef, indeterminate]);
  return (
    <>
      <input type='checkbox' ref={resolveRef} {...rest}></input>
    </>
  );
});
