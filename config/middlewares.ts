import type { Core } from "@strapi/strapi";

const config = ({
	env,
}: Core.Config.Shared.ConfigParams): Core.Config.Middlewares => [
	"strapi::logger",
	"strapi::errors",
	{
		name: "strapi::security",
		config: {
			contentSecurityPolicy: {
				directives: {
					"img-src": ["'self'", "data:", "blob:", env("S3_CDN_URL", "")],
					"media-src": ["'self'", "data:", "blob:", env("S3_CDN_URL", "")],
				},
			},
		},
	},
	"strapi::cors",
	"strapi::poweredBy",
	"strapi::query",
	"strapi::body",
	"strapi::session",
	"strapi::favicon",
	"strapi::public",
];

export default config;
