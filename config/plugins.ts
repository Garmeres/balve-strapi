import type { Core } from "@strapi/strapi";

const s3Upload = (env: Core.Config.Shared.ConfigParams["env"]) => ({
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
});

const config = ({
	env,
}: Core.Config.Shared.ConfigParams): Core.Config.Plugin => ({
	upload: env("NODE_ENV") === "production" ? s3Upload(env) : { config: {} },
	email: {
		config: {
			provider: "@strapi/provider-email-nodemailer",
			providerOptions: {
				host: env("SMTP_HOST"),
				port: env.int("SMTP_PORT", 587),
				secure: false,
				auth: {
					user: env("SMTP_USERNAME"),
					pass: env("SMTP_PASSWORD"),
				},
			},
			settings: {
				defaultFrom: "balve@garmeres.com",
				defaultReplyTo: "admin@garmeres.com",
			},
		},
	},
});

export default config;
