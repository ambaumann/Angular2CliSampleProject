import { RequestMethod } from '@angular/http';


//=====================================
//  REQUESTS
//-------------------------------------

export interface RequestArgs {
  method: RequestMethod;
  url: string;
}

export interface RequestOptions {
  method?: RequestMethod;
  url: string;
}


//=====================================
//  RESPONSE DATA
//-------------------------------------

export interface PaginatedData {
  collection: any[];
  next_href?: string;
}