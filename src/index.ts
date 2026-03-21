import type { Core } from "@strapi/strapi";

export default {
	register(/* { strapi }: { strapi: Core.Strapi } */) {},

	bootstrap({ strapi }: { strapi: Core.Strapi }) {
		strapi.db.lifecycles.subscribe({
			models: ["admin::user"],
			async afterCreate(event) {
				const { result } = event;
				if (!result.registrationToken || !result.email) return;

				const url = strapi.config.get("server.url") as string;
				if (!url) return;

				const registrationUrl = `${url}/admin/auth/register?registrationToken=${result.registrationToken}`;

				try {
					await strapi
						.plugin("email")
						.service("email")
						.send({
							to: result.email,
							subject: "You have been invited to Garmeres Strapi",
							text: `Hi!\n\nYou have been invited to Garmeres Strapi, the content management tool for the Garmeres website.\n\nClick the link below to create your account:\n${registrationUrl}`,
							html: `<p>Hi!</p><p>You have been invited to Garmeres Strapi, the content management tool for the Garmeres website.</p><p><a href="${registrationUrl}">Click here to create your account</a></p>`,
						});
				} catch (err) {
					strapi.log.error("Failed to send invite email:", err);
				}
			},
		});
	},
};
