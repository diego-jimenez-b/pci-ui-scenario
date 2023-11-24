import useGridApi from "../../hooks/use-grid-api";
import { AgGridReact } from "ag-grid-react";
import { columnDefs, formattedData } from "./utils";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import styles from "./styles.module.css";

const NeoGrid = (): JSX.Element => {
  const grid = useGridApi();

  return (
    <>
      <div className={styles.tableHeader}>
        <h1>Near-Earth Object Overview</h1>
        <button className={styles.resetButton} onClick={grid.resetState}>
          Clear Filters and Sorters
        </button>
      </div>

      <div className="ag-theme-alpine" style={{ height: 900, width: 1920 }}>
        <AgGridReact
          // TODO: implement ag-grid-enterprise library for range selection to work
          enableRangeSelection
          defaultColDef={{ sortable: true, unSortIcon: true, filter: true }}
          rowData={formattedData}
          columnDefs={columnDefs}
          rowGroupPanelShow={"always"}
          onGridReady={grid.register}
        />
      </div>
    </>
  );
};

export default NeoGrid;
