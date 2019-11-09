FROM    node:10-alpine

RUN     apk add --no-cache python automake autoconf libtool git alpine-sdk

WORKDIR /home/ddk.registry

COPY    ./package.json /home/ddk.registry/
COPY    ./package-lock.json /home/ddk.registry/

RUN     npm install

COPY    ./tsconfig.json /home/ddk.registry/
COPY    ./tslint.json /home/ddk.registry/
COPY    ./src/ /home/ddk.registry/src/
COPY    ./test/ /home/ddk.registry/test/

RUN     npm install sodium-native

RUN     npm run build
