// Cube query.filter item
export interface Huge {
  params:()=>unknown;
  api: (data) => any;
  resFilter?: () => any | string;
  searchKey:string;
}

export type DataSource = any[]
