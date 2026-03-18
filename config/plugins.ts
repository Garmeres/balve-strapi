import type { Core } from "@strapi/strapi";

const config = ({
	env,
}: Core.Config.Shared.ConfigParams): Core.Config.Plugin => ({
	upload: {
		config: {
			provider: "aws-s3",
			providerOptions: {
				baseUrl: env("S3_CDN_URL", ""),
				s3Options: {
					credentials: {
						accessKeyId: env("S3_ACCESS_KEY_ID", ""),
						secretAccessKey: env("S3_SECRET_ACCESS_KEY", ""),
					},
					endpoint: env("S3_ENDPOINT", ""),
					region: env("S3_REGION", ""),
					forcePathStyle: true,
					params: {
						Bucket: env("S3_BUCKET", ""),
					},
				},
			},
		},
	},
});

export default config;
