export const getGridCols = (cols?: number) => {
  switch (cols) {
    case 1: return 'grid-cols-1';
    case 2: return 'grid-cols-2';
    case 3: return 'grid-cols-3';
    case 4: return 'grid-cols-4';
    default: return 'grid-cols-3';
  }
};

export const getGridRows = (rows?: number) => {
  switch (rows) {
    case 1: return 'grid-rows-1';
    case 2: return 'grid-rows-2';
    case 3: return 'grid-rows-3';
    default: return 'grid-rows-2';
  }
};
