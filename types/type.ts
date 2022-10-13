export interface JokeResponseRoot {
    dates: any;
    page: number;
   
    data: any;
    results:JokeItem[];

 }
 
 export interface JokeItem {

   id:string;
   joke:string;
  
 }
 

 