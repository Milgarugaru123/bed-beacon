export interface HospitalDetailRoomData {
  dutyName: string;
  hpid: string;
  hvcc: number;
  hvccc: number;
  hvgc: number;
  hvicc: number;
  hvncc: number;
  hvoc: number;
}

export interface HospitalDetailData {
  distance: number;
  dutyAddr: string;
  dutyName: string;
  dutyTel1: string;
  dutyTel3: string;
  hpid: string;
  hvec: number;
  hvgc: number;
  url: string;
}

export interface HospitalTotalData {
  code: string;
  isSuccess: boolean;
  message: string;
  result: {
    hospitalList: HospitalDetailData[];
    isFirst: boolean;
    lsLast: boolean;
    listSize: number;
    requestedAt: string;
    totalElements: number;
    totalPage: number;
  };
  success: boolean;
}

export interface HospitalDutyTimeData {
  [key: string]: string | null;
}

export interface HospitalEmerMedAvailableItem {
  [key: string]: string;
}

export interface HospitalEmerMedAvailableData {
  response: {
    body: {
      items: {
        item: HospitalEmerMedAvailableItem[] | HospitalEmerMedAvailableItem;
      };
      numOfRows: number;
      pageNo: number;
      totalCount: number;
    };
    header: {
      resultCode: string;
      resultMsg: string;
    };
  };
}
