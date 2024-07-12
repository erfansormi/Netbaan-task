// eslint-disable-next-line @typescript-eslint/no-namespace
export declare namespace ApiResponseType {
  interface MetaInfoResponseType {
    domain: Domain;
    ip: Ip;
    cloud: Cloud;
    assets: Asset[];
  }

  interface Domain {
    total: number;
    total_live: number;
    live: number[];
    total_monitored: number;
    monitored: number[];
    ips: number;
    ports: number;
    vulns: number;
  }

  interface Ip {
    total: number;
    total_live: number;
    live: number[];
    total_monitored: number;
    monitored: number[];
    ips: number;
    ports: number;
    vulns: number;
  }

  interface Cloud {
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
