require('dotenv').config();
// Dependencies
const mongoose = require('mongoose');
const Tweet = require('./tweet');
// Global configuration
const mongoURI = process.env.MONGO_URI;
const db = mongoose.connection;
// Connect to Mongo
mongoose.connect(mongoURI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
});

// Connection Error/Success
// Define callback functions for various events
db.on("error", (err) => console.log(err.message + " is mongod not running?"));
db.on("open", () => console.log("mongo connected: ", mongoURI));
db.on("close", () => console.log("mongo disconnected"));

////create a document with mongoose//////
const myFirstTweet = {
    title: "Funny Thoughts",
    body: "Woo, I am the adventurer",
    author: "Ying W",
  };

// Tweet.create(myFirstTweet)
// // if database transaction succeeds
// .then((tweet) => {
//   console.log(tweet)
// })
// // if database transaction fails
// .catch((error) => {
//   console.log(error)
// })
// // close db connection either way
// .finally(() => {
//  db.close()
// })
//////////////////////////////////////////

////Many tweets//////////////////////
const manyTweets = [
    {
      title: "Deep Thoughts",
      body: "Friends, I am the realest coder alive",
      author: "Arthur",
    },
    {
      title: "Sage Advice",
      body: "Friends, I am awesome and you are too",
      author: "Arthur",
      likes: 20,
    },
    {
      title: "Is TI the Jadakiss of the South",
      body: "TI is severely underrated and we need to fix that expeditiously",
      author: "Arthur",
      likes: 40,
    },
    {
      title: "Crypto",
      body: "Friends, I have spent $2300 to be one of the first people to own a random jpeg and that makes me cool",
      author: "Arthur",
      likes: 162,
    },
    {
      title: "Confusion",
      body: "Friends, why do you just respond with the word `dislike`? Surely you mean to click the like button?",
      author: "Arthur",
      likes: -100,
    },
    {
      title: "Vespa",
      body: "Friends, my Vespa has been upgraded to run on old french fry oil. Its top speed is now 11 mph",
      author: "Arthur",
      likes: 2,
    },
    {
      title: "Licensed",
      body: "Friends, I am now officially licensed to teach yogalates. Like this to get 10% off a private lesson",
      author: "Arthur",
      likes: 3,
    },
    {
      title: "Water",
      body: "Friends, I have been collecting rain water so I can indulge in locally sourced raw water. Ask me how",
      author: "Arthur",
    },
  ];

// Tweet.insertMany(manyTweets)
// .then((tweets) => {
//   console.log(tweets)
// })
// .catch((error) => {
//   console.log(error)
// })
// .finally(() => {
//  db.close()
// })

// Tweet.find({ likes: { $gte: 20 } })
// // if database transaction succeeds
// .then((tweets) => {
//   console.log(tweets)
// })
// // if database transaction fails
// .catch((error) => {
//   console.log(error)
// })
// // close db connection either way
// .finally(() => {
//  db.close()
// })

// Tweet.findOneAndRemove({ title: "Deep Thoughts" })
// .then((tweet) => {
//   console.log(tweet)
// })
// .catch((error) => {
//   console.log(error)
// })
// .finally(() => {
//  db.close()
// })

// If we want to have our updated document returned to us in the callback, we have to set an option of {new: true}as the third argument
// Tweet.findOneAndUpdate(
//     { title: "Vespa" },
//     { sponsored: true },
//     { new: true }
//     )
//   .then((tweet) => {
//     console.log(tweet)
//   })
//   .catch((error) => {
//     console.log(error)
//   })
//   .finally(() => {
//    db.close()
//   })

//count how many tweets we have with likes greater than 20
// Tweet.countDocuments({ likes: { $gte: 20 } })
// .then((count) => {
//   console.log(count)
// })
// .catch((error) => {
//   console.log(error)
// })
// .finally(() => {
//  db.close()
// })

// Do a search, limit the number of returned queries to 2, sort them by title
Tweet.find({ likes: { $gte: 20 } }, "title -_id")
  .limit(2)
  .sort("title")
  .exec()

.then((tweets) => {
  console.log(tweets)
})

.catch((error) => {
  console.log(error)
})

.finally(() => {
 db.close()
})