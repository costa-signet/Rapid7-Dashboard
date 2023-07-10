export interface SDK {
    name: string;
    details: Item[];
}
interface Item {
    ip_address: string;
    asset_name: string;
    key: string;
    count: number;
}