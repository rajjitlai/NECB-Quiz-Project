import { link } from "fs";

export const profileStats = [
    {
        label: "Rank",
        value: "1000th",
    },
    {
        label: "Questions Attempted",
        value: "500",
    },
    {
        label: "Score",
        value: "50000",
    },
    {
        label: "Favorite Category",
        value: "Programming",
    },
    {
        label: "Time Spent",
        value: "17 hours",
    },
    {
        label: "Level",
        value: "Intermediate",
    },
];

export const categories = [
    {
        label: "English",
        value: "English",
        link: "/english"
    },
    {
        label: "Physics",
        value: "Physics",
        link: "/physics",
    },
    {
        label: "Chemistry",
        value: "Chemistry",
        link: "/chemistry",
    },
    {
        label: "Biology",
        value: "Biology",
        link: "/biology",
    },
]

export const columns = [
    { name: "Rank", uid: "rank" },
    { name: "Username", uid: "username" },
    { name: "Points", uid: "points" },
];

export const users = [
    {
        id: 1,
        rank: 1,
        username: "User1",
        email: "user1@example.com",
        avatar: "https://i.ytimg.com/vi/KwsQq7Ci20Y/maxresdefault.jpg",
        points: 5000,
    },
    {
        id: 2,
        rank: 2,
        username: "User2",
        email: "user2@example.com",
        avatar: "https://i.ytimg.com/vi/KwsQq7Ci20Y/maxresdefault.jpg",
        points: 4500,
    },
    {
        id: 3,
        rank: 3,
        username: "User3",
        email: "user3@example.com",
        avatar: "https://i.ytimg.com/vi/KwsQq7Ci20Y/maxresdefault.jpg",
        points: 4000,
    },
];