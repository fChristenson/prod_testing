import { UserService } from "./users/UserService";
import { UserModel } from "./users/User";
import { MetricService } from "./metrics/MetricService";

export const userService = new UserService(UserModel);
export const metricService = new MetricService();
