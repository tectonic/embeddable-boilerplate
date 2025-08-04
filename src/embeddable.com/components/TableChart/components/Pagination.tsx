import React from 'react';

import cn from '../../util/cn';
import { ChevronLeft, ChevronRight } from '../../icons';

type Props = {
  currentPage: number;
  hasNextPage: boolean;
  onPageChange?: (page: number) => void;
};

const Pagination = ({ currentPage, hasNextPage, onPageChange }: Props) => (
  <div className="flex items-center -space-x-px justify-end text-[12px] my-[20px] px-[10px] font-bold text-[#333942] select-none sticky left-0">
    <ChevronLeft
      className={cn(
        'cursor-pointer hover:bg-black/10 w-9 h-10 py-[11px] flex items-center justify-center border border-[#6f6f6f] rounded-s-md',
        {
          'bg-dark pointer-events-none': currentPage === 0,
        },
      )}
      onClick={() => {
        onPageChange?.(currentPage - 1);
      }}
    />

    <span className="px-[14px] py-[9px] border border-[#6f6f6f] text-[14px]">{currentPage + 1}</span>

    <ChevronRight
      className={`cursor-pointer hover:bg-black/10 w-9 h-10 py-[11px] flex items-center justify-center border border-[#6f6f6f] rounded-e-md ${hasNextPage ? 'bg-dark pointer-events-none' : ''
        }`}
      onClick={() => {
        onPageChange?.(currentPage + 1);
      }}
    />
  </div>
);

export default Pagination;
