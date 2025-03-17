import {useRef, useState} from "react";
import {AiFillLike} from "react-icons/ai";
import {FaRegCommentDots} from "react-icons/fa";
import {TfiCommentAlt} from "react-icons/tfi";
import {toastWarning} from "./toast";

const fake = {
    id: 1,
    postUpdateBy: "User Name",
    postUpdateAt: "1h ago",
    title: "Event Title Goes Here For Testing",
    description:
        "Event description goes here. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet.",
    urgencyLevel: "Urgent", //Low, Medium, Urgent
    likes: 10,
    comments: [
        {
            id: 1,
            userName: "User 1",
            comment: "This is a comment",
            timeline: "1h ago",
        },
    ],
};

function HelpPost() {
    const [data, setData] = useState(fake);
    const [showComments, setShowComments] = useState(false);
    const commentText = useRef(null);

    const handleCommentClick = (e) => {
        e.preventDefault();
        setShowComments(!showComments);
        console.log("Comment button clicked!");
    };
    const handleSendMsgClick = () => {
        // Handle send message click logic here
        console.log("Send message button clicked!");
    };

    const handleLikeClick = (e) => {
        e.preventDefault();
        // Handle like button click logic here
        setData((prevData) => ({
            ...prevData,
            likes: prevData.likes + 1,
        }));
        console.log("Like button clicked!");
    };

    const handleCommentSendClick = (e) => {
        e.preventDefault();

        const comment = commentText.current.value;
        if (comment.trim() === "") {
            toastWarning("Please enter a comment.");
            return;
        }
        // Add the comment to the comments array
        const newComment = {
            id: data.comments.length + 1,
            userName: "Current User",
            comment: comment,
            timeline: "Just now",
        };
        setData((prevData) => ({
            ...prevData,
            comments: [...prevData.comments, newComment],
        }));
        // Clear the comment input field
        commentText.current.value = "";
    };

    return (
        <div className='flex flex-col items-start justify-center bg-white shadow-md rounded-lg p-8 w-full h-fit '>
            <div className='flex items-center justify-between w-full mt-2'>
                <div className='flex  flex-row items-center gap-2'>
                    <span className='text-gray-700 font-semibold text-lg'>
                        {data.postUpdateBy}
                    </span>
                    <span className='text-gray-500 text-sm'>
                        <span className='text-green-400'>• </span>
                        {data.postUpdateAt}
                    </span>
                </div>
                <div>
                    <span
                        className={`text-gray-600 px-4  p-2 rounded-md text-sm font-semibold ${
                            data.urgencyLevel === "Urgent"
                                ? "bg-red-100"
                                : data.urgencyLevel === "Medium"
                                ? "bg-orange-100"
                                : "bg-yellow-100"
                        }`}
                    >
                        {data.urgencyLevel}
                    </span>
                </div>
            </div>

            <h2 className='text-2xl font-semibold text-gray-800 mb-2'>
                {data.title}
            </h2>
            <p className='text-gray-600 mb-2'>{data.description}</p>

            <hr className='w-full border-1.5 border-gray-300 my-4' />

            <div className='flex items-center justify-between w-full '>
                <button
                    className='text-gray-500 font-semibold flex items-center gap-2 active:bg-green-200 rounded-md px-4 py-2 hover:text-green-700 transition-colors duration-300 ease-in-out'
                    onClick={handleLikeClick}
                >
                    <AiFillLike className='inline-block font-semibold text-xl' />{" "}
                    Likes {data.likes}
                </button>
                <button
                    className='text-gray-500 font-semibold flex items-center gap-2 active:bg-green-200 rounded-md px-4 py-2 hover:text-green-700 transition-colors duration-300 ease-in-out '
                    onClick={handleCommentClick}
                >
                    <FaRegCommentDots className='inline-block font-bold text-xl' />{" "}
                    Comments({data.comments.length})
                </button>
                <button
                    className='text-green-900 font-bold  px-4 py-2 rounded-md flex items-center gap-2 hover:text-green-700 transition-colors  duration-300 ease-in-out '
                    onClick={handleSendMsgClick}
                >
                    <TfiCommentAlt className='inline-block font-bold text-xl' />{" "}
                    Send Message
                </button>
            </div>
            {showComments && (
                <div className='mt-4 w-full'>
                    <div className='flex flex-col items-start justify-center w-full space-y-2'>
                        {data.comments.map((comment) => (
                            <Comment
                                key={comment.id}
                                id={comment.id}
                                userName={comment.userName}
                                timeline={comment.timeline}
                                comment={comment.comment}
                            />
                        ))}
                    </div>
                    <div className='flex items-center  justify-center bg-white  p-4 w-full h-fit *:h-12 mt-4 gap-4'>
                        <textarea
                            className='w-[85%]  border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-green-500'
                            placeholder='Write a comment...'
                            ref={commentText}
                        ></textarea>
                        <button
                            className='w-[15%]  bg-green-500 text-white font-semibold px-14 rounded-md hover:bg-green-600 transition-colors duration-300 ease-in-out'
                            onClick={handleCommentSendClick}
                        >
                            Send
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

function Comment({id, userName, timeline, comment}) {
    return (
        <div
            key={id}
            className='flex flex-col items-start px-4 py-2  w-full bg-white shadow-sm rounded-lg p-1  h-fit'
        >
            <div className='flex items-center justify-center gap-2'>
                <h3 className='text-gray-700 font-medium'>{userName}</h3>
                <span className='text-gray-500 text-sm'>
                    <span className='text-green-400'>• </span>
                    {timeline}
                </span>
            </div>
            <p className='text-gray-600 text-lg'>{comment}</p>
        </div>
    );
}

export default HelpPost;
