import React, { PropsWithChildren } from 'react';
import cn from '../../util/cn';

type Props = {
  isHeader?: boolean;
  className?: string;
}

export default function TableCell({ isHeader, className, children }: PropsWithChildren<Props>) {
  const Cell = isHeader ? 'th' : 'td';

  return (
    <Cell
      className={cn('p-[15px] font-normal bg-inherit', {
        'lg:z-10 lg:sticky lg:left-0 text-left': isHeader,
      }, className)}
    >
      {children}
    </Cell>
  )
}