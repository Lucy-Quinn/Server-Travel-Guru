require("dotenv").config();

const mongoose = require('mongoose');

//requiring the schema
const User = require('../models/user.model');
const Post = require('../models/post.model');
const Comment = require('../models/comment.model')
const TravelLog = require('../models/TravelLog.model')
const saltRounds = 10;
const bcrypt = require('bcryptjs');

//requiring the 'fake' objects
const users = require('./user-mock-data');
const posts = require('./post-mock-data');
const comments = require('./comment-mock-data');
const travelLogs = require('./travelLog-mock-data');

const DB_NAME = "travel-guru";

// SEED SEQUENCE
// 0. ESTABLISH CONNECTION TO MONGO DATABASE
mongoose
    .connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    })
    .then((x) => {
        //DROP THE DATABASE
        const pr = x.connection.dropDatabase();
        return pr;
    })
    .then(() => {
        //mapping over users mock data to hash their passwords 
        const updatedUser = users.map((user) => {
            const salt = bcrypt.genSaltSync(saltRounds);
            user.password = bcrypt.hashSync(user.password, salt);
            return user

        })
        // creating users with already hashed passwords
        const pr = User.create(updatedUser);
        return pr;

    })
    .then((createdUsers) => {
        console.log(`Created ${createdUsers.length} users`);
        //mapping over the posts to add the userId to the postAuthor field in the post model
        const updatedPost = posts.map((post, i) => {
            const user = createdUsers[i];
            const userId = user._id;
            post.postAuthor = userId;
            return post; // return the updated post with the userId
        });
        const pr = Post.create(updatedPost);
        return pr;
    })
    .then((createdPosts) => {
        console.log(`Created ${createdPosts.length} posts`);
        //mapping over the created posts to find the userId and the postId and to update the users field 'myposts' with the postId
        const updateUserPromisesArr = createdPosts.map((post) => {
            const userId = String(post.postAuthor);
            const postId = post._id;
            return User.findByIdAndUpdate(userId, { $push: { myPosts: postId } }, { new: true }); //this returns many promises
        })
        const pr = Promise.all(updateUserPromisesArr); //makes one big promise out of all the promises coming from the array
        return pr;
    }).then((updatedUsers) => {
        console.log(`Updated ${updatedUsers.length} users`);
        const usersCopy = [...updatedUsers]; //make a copy of the user array
        //mapping over the comments to update the post field with the postId and the commentAuthor field with the userId. The userId found by Math.random
        const updatedComment = comments.map((comment, i) => {
            const randomIndex = Math.floor(Math.random() * usersCopy.length)
            const randomUser = usersCopy.splice(randomIndex, 1)[0]
            const user = updatedUsers[i];
            const postId = user.myPosts[0];
            comment.post = postId;
            comment.commentAuthor = randomUser._id;
            return comment;
        });
        const pr = Comment.create(updatedComment);
        return pr;
    }).then((createdComments) => {
        console.log(`Created ${createdComments.length} comments`);
        //mapping over the createdComments to get the postId and the commentId and to update the Post field comments with the comment id
        const promiseArr = createdComments.map((comment, i) => {
            const postId = String(comment.post);
            const currentComment = comment
            const commentId = currentComment._id
            return Post.findByIdAndUpdate(postId, { $push: { comments: commentId } }, { new: true });
        })
        const pr = Promise.all(promiseArr); //makes one big promise out of all the promises coming from array
        return pr
    })
    .then((updatedPosts) => {
        console.log(`Updated ${updatedPosts.length} posts`);
        //mapping over the travelLogs to get the userId and to set it to the travelLogAuthor field of the travelLog
        const updatedTravelLog = travelLogs.map((travelLog, i) => {
            const currentUserId = updatedPosts[i].postAuthor;
            travelLog.travelLogAuthor = currentUserId;
            return travelLog;
        })
        const pr = TravelLog.create(updatedTravelLog);
        return pr;
    })
    .then((createdTravelLogs) => {
        console.log(`Created ${createdTravelLogs.length} travelLog entries`);
        //mapping over the updatedTravelLog to update the User field myTravelLog with the traveLogId
        const updatedUser = createdTravelLogs.map((travelLog) => {
            const userId = travelLog.travelLogAuthor;
            const travelLogid = travelLog._id
            return User.findByIdAndUpdate(
                userId,
                { $push: { myTravelLog: travelLogid } },
                { new: true }
            )
        })
        const pr = Promise.all(updatedUser); //makes one big promise out of all the promises coming from array
        return pr
    })
    .then((updatedUser) => {
        console.log(`Updated ${updatedUser.length} users`);
        mongoose.connection.close();
    })
    .catch((err) => console.log(err));
