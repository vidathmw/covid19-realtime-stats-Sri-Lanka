import Repository from "./Repository";

const resource = "/get-current-statistical";
export default {
  get() {
    return Repository.get(`${resource}`);
  }
};
