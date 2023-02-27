// Question 1.
function instagramPost(handleOfAuthor, content, imageLink, numberOfViews, numberOfLikes) {
    this.handleOfAuthor = handleOfAuthor;
    this.content = content;
    this.imageLink = imageLink;
    this.numberOfViews = numberOfViews;
    this.numberOfLikes = numberOfLikes
}

// Question 2.
const firstPost = new instagramPost('@gistlover', 'Hello tueh tueh, Somebody needs to talk', 'https://pbs.twimg.com/profile_images/1519331068586999808/GcjwW5iX_400x400.jpg', '400,345 views', '300,234 likes');
const secondPost = new instagramPost('@superwatchman', 'What does your watch says about you', 'https://superwatchman.com/wp-content/uploads/2021/01/royal-oak.jpg', '12,345 views', '9,236 likes');

console.log(firstPost);
console.log(secondPost);

// Answer

// instagramPost {
//   handleOfAuthor: '@gistlover',
//   content: 'Hello tueh tueh, Somebody needs to talk',
//   imageLink: 'https://pbs.twimg.com/profile_images/1519331068586999808/GcjwW5iX_400x400.jpg',
//   numberOfViews: '400,345 views',
//   numberOfLikes: '300,234 likes'
// }
// instagramPost {
//   handleOfAuthor: '@superwatchman',
//   content: 'What does your watch says about you',
//   imageLink: 'https://superwatchman.com/wp-content/uploads/2021/01/royal-oak.jpg',
//   numberOfViews: '12,345 views',
//   numberOfLikes: '9,236 likes'
// }

// 3.
function createPerson(name, age, location) {
    return {
        name: name,
        age: age,
        location: location
    }
}

// Question 3 a.
const musa = new createPerson('Musa', 19, 'Lekki, Lagos State')

// Answer
// { name: 'Musa', age: 19, location: 'Lekki, Lagos State' }

// Question 3 b.

function musaJambScores(ENG, GOVT, LIT, CRK) {
    return {
        ENG: ENG,
        GOVT: GOVT,
        LIT: LIT,
        CRK: CRK
    }
}

musa.musaJambScores = new musaJambScores(70, 85, 82, 94);
console.log(musa);

// Question 3 b. Answer

// {
//     name: 'Musa',
//     age: 19,
//     location: 'Lekki, Lagos State',
//     musaJambScores: { ENG: 70, GOVT: 85, LIT: 82, CRK: 94 }
//   }

// Question 4.

const laptop = {
    brand: 'hp',
    Model: 'Envy',
    color: 'Silver'
}

// Answer
// Object.Assign Method
const firstLaptop = Object.assign({}, laptop);
console.log(firstLaptop);

// Spreading Meathod
const secondLaptop = {...firstLaptop}
console.log(secondLaptop);

// JSON Method

const thirdLaptop = JSON.parse(JSON.stringify(firstLaptop))
console.log(thirdLaptop);


// Question 5.
const presidentialCandidates = {
    AAC: 'Omoyele Sowore',
    ACCORD: 'Christopher Imumolen',
    APC: 'Bola Ahmed Tinubu',
    LP: 'Peter Obi',
    NNPP: 'Rabiu Kwankwaso',
    PDP: 'Atiku Abubakar',
 }
 
//  Answer

for(const key in presidentialCandidates) {
    console.log(presidentialCandidates[key] + ' is the presidential candidate of ' + [key]);
}