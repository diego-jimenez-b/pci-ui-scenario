import { useRef } from "react";
import { GridReadyEvent } from "ag-grid-community";

const useGridApi = <T extends any>() => {
  const gridRef = useRef<GridReadyEvent<T> | null>(null);

  const resetState = () => {
    gridRef.current?.api.setFilterModel(null);
    gridRef.current?.columnApi.resetColumnState();
  };

  const registerGrid = (e: GridReadyEvent<T>) => {
    gridRef.current = e;
  };

  return { register: registerGrid, resetState, ref: gridRef };
};

export default useGridApi;
