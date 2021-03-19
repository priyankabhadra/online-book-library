const initialState = {
    bookDetails : [{
        bookName: "Agni Veena",
        bookAuthor: "Kazi Nasrul Islam",
        bookDescription: "Indian Literature, Sahitya Akademi’s bimonthly journal, is India’s oldest and the only journal of its kind featuring translations in English of poetry, fiction, drama and criticism from twenty-three Indian languages besides original writing in English.",
        bookCount: 1,
        bookId: 1
     },
     {
         bookName: "Time Machine",
         bookAuthor: "H.G. Wells",
         bookDescription: "The time machine is a science fiction novel by H.G.WELLS , published in 1895 and written as a frame narrative. The narrator feels differently, but the overwhelming message of the book can be construed as a warning against hubris and faith in progress.",
         bookCount: 2,
         bookId: 2
      },
      {
         bookName: "Chitra",
         bookAuthor: "R.N.Tagore",
         bookDescription: "Today I can only offer you Chitra, the daughter of a king” and to this Arjuna Tagore is known for his aesthetic and pantheistic attitude and his spiritually inclined mind. The source for this play is Mahabharata – an episode from Arjuna’s life during his vanvaas (forest life exile).",
         bookCount: 3,
         bookId: 3
      },
      {
         bookName: "Bisarjan",
         bookAuthor: "R.N.Tagore",
         bookDescription: "The play centers on a ban: the king of Tripura, Govinda Manik, has banned ritual sacrifice and slaughter at the altar of the goddess. His power threatened by the ban, Raghupati, the high priest, orchestrates opposition.",
         bookCount: 4,
         bookId: 4
      },
      {
         bookName: "Divine Comedy",
         bookAuthor: "Dante",
         bookDescription: "The main idea in Dante's The Divine Comedy is essentially how people learn to attain salvation. It gives a long narration of how Dante's pilgrim goes through hell in Inferno and gives such a figurative picture of how sinners suffer without any hope of redemption.",
         bookCount: 5,
         bookId: 5
      },
 ]}
 
 
 const BookDetails = (state = initialState, action) => {
     switch(action.type) {
         case 'addBook':
             return {
                 ...state,
                 bookDetails: [...state.bookDetails, action.payload]
             };
 
         case 'deleteBook':
             const newBookDetails = state.bookDetails.filter((book) => book.bookId !== action.payload)
         return {
             ...state,
             bookDetails: newBookDetails
         }; 
 
         case 'editBook':
             const editableBookDetails = state.bookDetails.map(m => {
                 if (m?.bookId === action.payload.bookId) {
                     return action.payload;
                 }
 
                 return m;
             })
             return {
                 ...state,
                 bookDetails: editableBookDetails
             }; 
         default:
             return state;
     }
 }
 
 export default BookDetails;