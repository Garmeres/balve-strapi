# balve-strapi

Headless CMS for [Garmeres](https://garmeres.com), built on [Strapi 5](https://strapi.io). Provides content APIs consumed by the website.

- **Database:** SQLite, replicated to S3 via [Litestream](https://litestream.io)
- **Media uploads:** Hetzner Object Storage (S3-compatible)
- **Runtime:** Node 20, deployed as a container on Kubernetes

## Local development

```bash
cp .env.example .env
# Fill in S3_ACCESS_KEY_ID and S3_SECRET_ACCESS_KEY
npm install
npm run develop
```

Admin panel: http://localhost:1337/admin

## Environment variables

See [.env.example](.env.example). The S3 variables are required for media uploads to work.

## Docker

The image is automatically built and pushed to `ghcr.io/garmeres/balve-strapi:latest` on every push to `main`.

## Deployment

Deployed to Kubernetes via Helm chart in [balve-k8s](https://github.com/garmeres/balve-k8s). ArgoCD handles continuous delivery.
