import React from "react";

const PostDetail = ({ post }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8">
      <div className="relative overflow-hidden shadow-md mb-6">
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className="object-top h-full w-full rounded-t-lg"
        />
      </div>
      <div className="px-4 lg:px-0">
        <div className="flex items-center mb-8 w-full">
          <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
            <img
              height="30px"
              width="30px"
              alt={post.author.name}
              className="align-middle rounded-full"
              src={post.author.photo.url}
            />
            <p className="inline align-middle text-gray-700 ml-2 text-lg">
              {post.author.name}
            </p>
          </div>{" "}
          <div className="font-medium text-gray-700 ">
            {/* Expected SVG FROM GITHUB GIST */}
            <span>{moment(post.createdAt).format("MMM DD, YYYY")}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
