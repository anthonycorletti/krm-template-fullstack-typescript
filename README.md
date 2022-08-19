# krm_template_fullstack_typescript

A minimal fullstack typescript application template, using KRM via Skaffold and Kustomize to deploy the stack onto GKE.

## Overview

This repo deploys an express server and a nextjs frontend. GitHub actions orchestrate deployment to Google Kubernetes Engine via Workload Identity authentication and generates kubernetes resources for two environments using Skaffold and Kustomize.

## Notable Tools

- [Skaffold](https://skaffold.dev/docs/install/)
- [Kustomize](https://kustomize.io/)
- [Google Cloud SDK](https://cloud.google.com/sdk/docs/install)
- [Docker](https://docs.docker.com/get-docker/)
- [Node.js](https://nodejs.org/en/download/)
- [Next.js](https://nextjs.org/docs/getting-started)

## Contributing

Pull requests and issues are very welcome.
