export interface User {
   email: string,
   id: number,
   name: string,
   phone: string,
   username: string,
   website: string,
   address: {
      city: string,
      geo: {
         lat: string,
         lng: string,
      },
      street: string,
      suite: string,
      zipcode: string,
   },
   company: {
      bs: string,
      catchPhrase: string,
      name: string,
   },
}

export interface Post {
   userId: number,
   id: number,
   title: string,
   body: string
}