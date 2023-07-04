export interface RiskScore {
    name: string;
    details: Details[];
}
interface Details{
    ip_address: string;
    asset_name: string;
    cvss2_score: number;
    risk_score: number;
}