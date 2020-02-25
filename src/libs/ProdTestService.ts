import { IS_TEST } from "./config";

export class ProdTestService {
  protected maybeAddTestMetaData(data: any) {
    if (IS_TEST) {
      return { ...data, test: IS_TEST };
    }

    return data;
  }
}
