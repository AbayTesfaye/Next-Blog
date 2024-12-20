import Joi from "joi";
import { NextResponse } from "next/server";
import connectToDB from "../../database";
import Blog from "../../models/blog";


const AddNewBlog = Joi.object({
    title : Joi.string().required(),
    description : Joi.string().required(),
})
export default async function POST(req){
    try {
        await connectToDB();
        const extractBlogData = await req.json();
        const {title, description} = extractBlogData;
        const {error} = AddNewBlog.validate(title,description);

        if(error){
            return NextResponse.json({
                success : false,
                message : error.details[0].message
            })
        }

        const newlyCreatedBlogItem = await Blog.create(extractBlogData);
        if(newlyCreatedBlogItem){
            return NextResponse.json({
                success : true,
                message : 'New Blog was created successfully.'
            })
        } else {
            return NextResponse({
                success : false,
                message : 'Something went wrong! Please try again'
            })
        }
    } catch (error) {
        console.log(error);
        return NextResponse({
            success : false,
            message : 'Something went wrong! Please try again'
        })
    }
}
