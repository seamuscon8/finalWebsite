module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/mongoose [external] (mongoose, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("mongoose", () => require("mongoose"));

module.exports = mod;
}),
"[project]/Desktop/portfolio-milestone-4/finalWebsite/src/database/db.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// db.ts
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs)");
;
const url = process.env.MONGO_URI;
let connection;
/**
 * Makes a connection to a MongoDB database. If a connection already exists, does nothing
 * Call this function at the start of api routes and data fetches
 * @returns {Promise<typeof mongoose>}
 */ const connectDB = async ()=>{
    if (!connection) {
        connection = await __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].connect(url);
        return connection;
    }
};
const __TURBOPACK__default__export__ = connectDB;
 /*
export async function getBlogs(){
	await connectDB() // function from db.ts before

	try {
			// query for all blogs and sort by date
		
		const docs = await Blog.find().
		sort({ date: -1 })
     .select("-_id -__v")     
        .lean()                   
        .orFail();

		//Make it normal 
		return docs.map((b: any) => ({
      	title: b.title,
      	slug: b.slug,
      	description: b.description,
      	image: b.image,
      	imageAlt: b.imageAlt ?? `Preview image for ${b.title}`,
      	finalScore: b.finalScore,
      	scorers: b.scorers,
      	videoLink: b.videoLink,
      	date: new Date(b.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      	})


    	}));

			// send a response as the blogs as the message
	 
	} catch (err) {
	    console.error("error fetching blogs",err);
		return [];
	}
}
*/ }),
"[project]/Desktop/portfolio-milestone-4/finalWebsite/src/database/commentSchema.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "commentSchema",
    ()=>commentSchema
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs)");
;
const commentSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["Schema"]({
    user: {
        type: String
    },
    comment: {
        type: String
    },
    time: {
        type: Date
    }
});
}),
"[project]/Desktop/portfolio-milestone-4/finalWebsite/src/database/blogSchema.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "blogSchema",
    ()=>blogSchema,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$milestone$2d$4$2f$finalWebsite$2f$src$2f$database$2f$commentSchema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/portfolio-milestone-4/finalWebsite/src/database/commentSchema.ts [app-route] (ecmascript)");
;
;
const blogSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["Schema"]({
    title: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: false,
        default: new Date()
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    imageAlt: {
        type: String,
        required: true,
        default: ""
    },
    slug: {
        type: String,
        required: true
    },
    finalScore: {
        type: String,
        required: true
    },
    scorers: {
        type: [
            String
        ],
        required: true
    },
    videoLink: {
        type: String,
        required: true
    },
    comments: [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$milestone$2d$4$2f$finalWebsite$2f$src$2f$database$2f$commentSchema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["commentSchema"]
    ]
});
// defining the collection and model
const Blog = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].models['blogs'] || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].model('blogs', blogSchema);
const __TURBOPACK__default__export__ = Blog;
}),
"[project]/Desktop/portfolio-milestone-4/finalWebsite/src/app/api/blogs/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$milestone$2d$4$2f$finalWebsite$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/portfolio-milestone-4/finalWebsite/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$milestone$2d$4$2f$finalWebsite$2f$src$2f$database$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/portfolio-milestone-4/finalWebsite/src/database/db.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$milestone$2d$4$2f$finalWebsite$2f$src$2f$database$2f$blogSchema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/portfolio-milestone-4/finalWebsite/src/database/blogSchema.ts [app-route] (ecmascript)");
;
;
;
async function GET() {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$milestone$2d$4$2f$finalWebsite$2f$src$2f$database$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        // empty filter + projection to keep only what you need
        const docs = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$milestone$2d$4$2f$finalWebsite$2f$src$2f$database$2f$blogSchema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].find({}, {
            title: 1,
            slug: 1,
            date: 1,
            description: 1,
            image: 1,
            imageAlt: 1,
            image_alt: 1
        }).sort({
            date: -1
        }).lean(); // no .orFail() needed for find()
        const blogs = docs.map((d)=>({
                _id: d._id?.toString?.() ?? "",
                title: String(d.title ?? ""),
                slug: String(d.slug ?? ""),
                description: d.description ?? "",
                image: d.image ?? "",
                // support either imageAlt or image_alt in DB
                imageAlt: d.imageAlt ?? d.image_alt ?? "",
                date: d.date ? new Date(d.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric"
                }) : ""
            }));
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$milestone$2d$4$2f$finalWebsite$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(blogs, {
            status: 200
        });
    } catch (err) {
        console.error("GET /api/blogs error:", err);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio$2d$milestone$2d$4$2f$finalWebsite$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            message: "Failed"
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__323e97a1._.js.map