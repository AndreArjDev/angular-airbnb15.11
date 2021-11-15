export interface Place {
  id?: number;
  type?: string;
  city?: string;
  address?: string;
  host?: string;
}
export interface Places {
  places: Place[];
}
