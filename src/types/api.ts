// eslint-disable-next-line @typescript-eslint/no-namespace
export declare namespace ApiResponseType {
  interface MetaInfoResponseType {
    domain: AssetsBox;
    ip: AssetsBox;
    cloud: AssetsBox;
    assets: Asset[];
  }

  interface AssetsBox {
    total: number;
    total_live: number;
    live: number[];
    total_monitored: number;
    monitored: number[];
    ips: number;
    ports: number;
    vulns: number;
  }

  interface Asset {
    grade: string;
    name: string;
    type: string;
    total_vuls: number;
    lastSeen: number;
  }
}
