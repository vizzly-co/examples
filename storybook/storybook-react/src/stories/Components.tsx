import { FunctionComponent, ReactNode } from 'react';

export const Container: FunctionComponent<{ children?: ReactNode }> = (
  props
) => <div className="preview-container">{props?.children}</div>;
