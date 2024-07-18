export interface Album {
    title: string,
    author: string,
    source: string,
    imgSource: string,
    price: string,
    currency: string,
    id: string,
    category: string,
    releaseDate: string
}



// <!-- after fetching data from api i need to have feed.entry (array of albums) -->
// <!-- there is 
//     im:name.label // title
//     id.label // link to music
//     im:releaseDate.attributes.label 
//     im:price.attributes.amount
//     im:price.attributes.currency
//     im:image[3]
//     im:artist.label
//     id.attributes.im:id
//     category.attributes.term // category of music
// -->