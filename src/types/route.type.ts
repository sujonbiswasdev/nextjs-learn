// [
//     {
//       title: "Blog Managemen",
//       url: "#",
//       items: [
//         {
//           title: "Create Blog",
//           url: "/create-blog",
//         }
//       ],
//     },
    
// ]

export interface Route{
    title:string;
    url:string;
    items:{
        title:string;
        url:string;
    }[]
} 