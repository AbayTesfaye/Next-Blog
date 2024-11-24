"use client";

import React from "react";
import { useState } from "react";
import AddNewBlog from "../add-new-blog";

const initialBlogFormData = {
  title: "",
  description: "",
};

export default function BlogOverview() {
  const [openBlogDialog, setOpenBlogDialog] = useState(false);
  const [loading, setLoading] = useState(false);
  const [blogFormData, setBlogFormData] = useState(initialBlogFormData);

  console.log(blogFormData);
  return (
    <div className="min-h-screen flex flex-col gap-10 py-4 px-6 bg-gradient-to-r from-purple-400 to to-blue-600">
      <AddNewBlog
        openBlogDialog={openBlogDialog}
        setOpenBlogDialog={setOpenBlogDialog}
        loading={loading}
        setLoading={setLoading}
        blogFormData={blogFormData}
        setBlogFormData={setBlogFormData}
      />
      <div>Blog List Seciton</div>
    </div>
  );
}
