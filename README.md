[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=react-bp-microservice&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=react-bp-microservice)

# BP Calc Frontend Service

## Overview

This project demonstrates the use of microservice and its deployment to kubernetes.
This frontend service is written in ReactJS to interact with backend service written in Go.

## Useful Commands
```
# Development
npm i
npm start
npm test

# Production
npm ci
npm run build

# Docker
docker compose up -d
```

## Manually Image Build and Push

```
docker build . --file Dockerfile --tag frontend:v1.0.91-manual;
docker tag frontend:v1.0.91-manual gcr.io/tudublin/frontend:v1.0.91-manual;
docker push gcr.io/tudublin/frontend:v1.0.91-manual
```

## Note on Package JSON
This project adds `react-scripts` in `devDependencies` section of package.json to avoid vulnerability in production environment. This caused a version conflict of typescript node package in `package-lock.json` while using `npm ci`. Hence to resolve this `package-lock.json` has been manually updated with the following.

**from**
```
  "node_modules/typescript": {
    "version": "5.0.4",
    "resolved": "https://registry.npmjs.org/typescript/-/typescript-5.0.4.tgz",
    "integrity": "sha512-cW9T5W9xY37cc+jfEnaUvX91foxtHkza3Nw3wkoF4sSlKn0MONdkdEndig/qPBWXNkmplh3NzayQzCiHM4/hqw==",
```
**to**
```
  "node_modules/typescript": {
    "version": "4.9.5",
    "resolved": "https://registry.npmjs.org/typescript/-/typescript-4.9.5.tgz",
    "integrity": "sha512-1FXk9E2Hm+QzZQ7z+McJiHL4NW1F2EzMu9Nq9i3zAaGqibafqYwCVU6WyWAuyQRRzOlxou8xZSyXLEN8oKj24g==",
```

In future version `react-scripts` dependency shall be removed and an improved granual dependency [approach](https://dev.to/ivadyhabimana/how-to-create-a-react-app-without-using-create-react-app-a-step-by-step-guide-30nl) will be used. 
