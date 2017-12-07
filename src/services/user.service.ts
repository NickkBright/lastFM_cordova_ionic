import {Injectable} from "@angular/core";

@Injectable()
export class UserService {
  private userInfo: Array<Object> = new Array<Object>();

  setUserInfo(info: Array<Object>) {
    this.userInfo = info;
  }

  getUserInfo() {
    return this.userInfo;
  }
}