# Angular Ngrx Skeleton

This project is a skeleton to help you start quickly with redux pattern in angular using ngrx

## Run with docker-compose

Run `docker-compose up --build -d` for a dev server. Navigate to `http://localhost:4202/`. The app will automatically reload if you change any of the source files.\
You need to create a API which can handle CRUD of a resource (Account in our case)

## Stop and remove app image

Run `docker-compose down`.

## Application structure

├── app\
 │ ├── app-routing.module.ts\
 │ ├── app.component.css\
 │ ├── app.component.html\
 │ ├── app.component.ts\
 │ ├── app.module.ts\
 │ ├── components\
 │ │    └── home\
 │ │    └── navbar\
 │ ├── containers\
 │ │    └── accounts\
 │ │         ├── account.component.css\
 │ │         ├── account.component.html\
 │ │         └── account.component.ts\
 │ ├── models\
 │ │    ├── index.ts\
 │ │    └── account.model.ts\
 │ └── services\
 │ │    ├── index.ts\
 │ │    └── account.service.ts\
 │ ├── app-store\
 │ │    ├── index.ts\
 │ │    ├── app-store.module.ts\
 │ │    ├── selectors.ts\
 │ │    ├── state.ts\
 │ │    └── account-store\
 │ │         ├── actions.ts\
 │ │         ├── effects.ts\
 │ │         ├── index.ts\
 │ │         ├── reducer.ts\
 │ │         ├── selectors.ts\
 │ │         ├── state.ts\
 │ │         └── account-store.module.ts\
 │ ├── shared\
 │ │    └── utils.ts\
 ├── assets\
 ├── browserslist\
 ├── environments\
 │ ├── environment.prod.ts\
 │ └── environment.ts\
 ├── index.html\
 ├── main.ts\
 ├── polyfills.ts\
 ├── styles.css\
 ├── test.ts\
 ├── tsconfig.app.json\
 ├── tsconfig.spec.json\
 ├── Dockerfile\
 ├── docker-compose\
 └── tslint.json\
