import { Asset } from '.';

export class AssetDelegate extends Asset {
    username: string;
    url?: string;

    constructor(data: AssetDelegate) {
        super();

        this.username = data.username;
        this.url = data.url;
    }
}
