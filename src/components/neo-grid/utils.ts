import data from "../../near-earth-asteroids.json";
import { ColDef } from "ag-grid-community";
import { dateCompare, formatBaseDate } from "../../utils/dates";
import { formatAfirmation } from "../../utils/formatters";

// convert non-string values to be able to filter them correctly
export const formattedData = data.map((obj) => ({
  ...obj,
  h_mag: obj.h_mag && Number(obj.h_mag),
  moid_au: obj.moid_au && Number(obj.moid_au),
  q_au_1: obj.q_au_1 && Number(obj.q_au_1),
  q_au_2: obj.q_au_2 && Number(obj.q_au_2),
  period_yr: obj.period_yr && Number(obj.period_yr),
  i_deg: obj.i_deg && Number(obj.i_deg),
  discovery_date: new Date(obj.discovery_date),
}));

export const columnDefs: ColDef[] = [
  { field: "designation", headerName: "Designation" },
  {
    field: "discovery_date",
    headerName: "Discovery Date",
    filter: "agDateColumnFilter",
    comparator: dateCompare,
    valueFormatter: (params) => formatBaseDate(params.value),
  },
  { field: "h_mag", headerName: "H (mag)", filter: "agNumberColumnFilter" },
  { field: "moid_au", headerName: "MOID (au)", filter: "agNumberColumnFilter" },
  { field: "q_au_1", headerName: "q (au)", filter: "agNumberColumnFilter" },
  { field: "q_au_2", headerName: "Q (au)", filter: "agNumberColumnFilter" },
  { field: "period_yr", headerName: "Period (yr)", filter: "agNumberColumnFilter" },
  { field: "i_deg", headerName: "Inclination (deg)", filter: "agNumberColumnFilter" },
  { field: "pha", headerName: "Potentially Hazardous", valueFormatter: (params) => formatAfirmation(params.value) },
  { field: "orbit_class", headerName: "Orbit Class" },
];
