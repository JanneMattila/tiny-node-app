# tiny-node-app

## Demo setup

Use dev spaces to debug your app in your AKS cluster.

From this call hierarchy in your dev space (e.g. `demospace`):

![api-clone](docs/web-api-db.svg)

To this call hierarchy in your child dev space (e.g. `demospace/janne`):

![api-clone](docs/web-api-clone-db.svg)

Above `api-clone` is now something that you can easily debug locally.

## Team development with dev spaces

You can use dev spaces to share different microservices between your team members.
In below example services `A`, `B`, `C`, `D`, `E` and `F` are baseline
versions of the services. In this example these are running in dev spaces
enabled namespace `integration`.

Those baseline services are then overridden in feature specific dev space
with services `feature-C`, `feature-D` and `feature-E`. These are running
in child dev space `integration/feature`.

And developer working in this feature has even created child dev space to
override one specific service with `feature-D-dev` and that is running
in child dev space `integration/feature/dev`:

![Team development with dev spaces](docs/team-development.svg)

## Try this yourself

Read this blog [post](https://dev.to/janne_mattila/debugging-microservices-running-in-azure-kubernetes-service-aks-using-azure-dev-spaces-2d7i) for longer version of the story.
**Note**: Below commands expects that `azds` is in your path ([install client side tooling](https://docs.microsoft.com/en-us/azure/dev-spaces/how-to/install-dev-spaces#install-the-client-side-tooling)).
Here are the individual commands to create the demo scenario.

```bash
git clone https://github.com/JanneMattila/tiny-node-app.git
cd tiny-node-app

# web
cd web
npm install
azds up --detach-after Listening

# db
cd ../db
npm install
azds up --detach-after Listening

# api
cd ../api
npm install
azds up --detach-after Listening

# Open Visual Studio Code
cd ..
code tiny-node-app.code-workspace
```

## Links

[Azure Dev Spaces documentation](https://docs.microsoft.com/en-us/azure/dev-spaces/)

[Azure / dev-spaces](https://github.com/Azure/dev-spaces)
