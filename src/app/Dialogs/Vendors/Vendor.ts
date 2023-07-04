export interface Vendor {
    search: string;
    details: VendorDetails[];
}
interface VendorDetails {
    ip_address : string;
    asset_name: string;
    os_vendor: string;
    os_product: string;
    count: number;
}