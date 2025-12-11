import { NextRequest, NextResponse } from 'next/server'
import connectDB from '@/src/database/db'
import Blog from '@/src/database/blogSchema'


type IParams = {
		params: {
			slug: string
		}
}

export async function GET(req: NextRequest, { params }: IParams) {
		// If { params } looks confusing, check the note below this code block
		
    await connectDB() // function from db.ts before
	const { slug } = await  params // another destructure

	try {
	    const blog = await Blog.findOne({ slug }).lean().orFail();
            
	    return NextResponse.json(blog)
	} catch (err) {
	    return NextResponse.json('Blog not found.', { status: 404 })
	}
}
