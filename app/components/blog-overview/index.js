"use client";

import React from "react";
import { useState } from "react";
import { Button } from "../../../components/ui/button";
import AddNewBlog from "../add-new-blog";
export default function BlogOverview() {
  const [openBlogDialog, setOpenBlogDialog] = useState(false);
  return (
    <div className="min-h-screen flex flex-col gap-10 py-4 px-6 bg-gradient-to-r from-purple-400 to to-blue-600">
      <AddNewBlog
        openBlogDialog={openBlogDialog}
        setOpenBlogDialog={setOpenBlogDialog}
      />
    </div>
  );
}
