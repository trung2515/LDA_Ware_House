export class CMNDModel {
    name: string;
    value: string;
    nameOwn: string
    constructor(data: any) {
      this.name = data.cccd
      this.value = data.cccd
      this.nameOwn =  data.name
    }
  }