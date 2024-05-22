export type RoomUnit = {
  roomName: string;
  availableRooms: number;
};

export type SurgeryUnit = {
  surgeryName: string;
  feasible: boolean;
};

export interface HospitalListDataProp {
  name: string;
  emergencyGeneralWard?: number;
  generalWard?: number;
  distance: number;
  location: string;
  callNumber: string;
  hospitalCode: string;
  image?: string;
}

export interface DetailHospitalDataProp extends HospitalListDataProp {
  hospitalLink: string;
  hospitalOpen: boolean;
  hospitalRoomData: RoomUnit[];
}
