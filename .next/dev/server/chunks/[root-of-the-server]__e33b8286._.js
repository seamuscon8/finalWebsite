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
"[project]/BootCamp/bootcamp-project-2025/milestone-4/src/database/db.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/BootCamp/bootcamp-project-2025/milestone-4/src/database/projectSchema.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "projectSchema",
    ()=>projectSchema
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs)");
;
const projectSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["Schema"]({
    title: {
        type: String,
        required: true
    },
    info: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
});
const Project = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].models['projects'] || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].model('projects', projectSchema);
const __TURBOPACK__default__export__ = Project;
}),
"[project]/BootCamp/bootcamp-project-2025/milestone-4/src/app/api/portfolio/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$BootCamp$2f$bootcamp$2d$project$2d$2025$2f$milestone$2d$4$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/BootCamp/bootcamp-project-2025/milestone-4/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$BootCamp$2f$bootcamp$2d$project$2d$2025$2f$milestone$2d$4$2f$src$2f$database$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/BootCamp/bootcamp-project-2025/milestone-4/src/database/db.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$BootCamp$2f$bootcamp$2d$project$2d$2025$2f$milestone$2d$4$2f$src$2f$database$2f$projectSchema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/BootCamp/bootcamp-project-2025/milestone-4/src/database/projectSchema.ts [app-route] (ecmascript)");
;
;
;
async function GET() {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$BootCamp$2f$bootcamp$2d$project$2d$2025$2f$milestone$2d$4$2f$src$2f$database$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        const projects = await __TURBOPACK__imported__module__$5b$project$5d2f$BootCamp$2f$bootcamp$2d$project$2d$2025$2f$milestone$2d$4$2f$src$2f$database$2f$projectSchema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].find().sort({
            date: -1
        }).lean();
        return __TURBOPACK__imported__module__$5b$project$5d2f$BootCamp$2f$bootcamp$2d$project$2d$2025$2f$milestone$2d$4$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(projects);
    } catch (err) {
        console.error("GET /api/projects error:", err);
        return __TURBOPACK__imported__module__$5b$project$5d2f$BootCamp$2f$bootcamp$2d$project$2d$2025$2f$milestone$2d$4$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            message: "Failed"
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__e33b8286._.js.map