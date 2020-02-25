import { ProdTestService } from "../ProdTestService";

export class MetricService extends ProdTestService {
  userSignedUp(id: string) {
    const data = this.maybeAddTestMetaData({ id });
    // make Metrics system call
    console.log("userSignedUp", data);
    return data;
  }
}
