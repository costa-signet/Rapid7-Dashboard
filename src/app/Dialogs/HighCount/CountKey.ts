export interface CountKey {
    name: string;
    output: Item[];
}
interface Item {
    ip_address: string;
    asset_name: string;
    count: number;
}