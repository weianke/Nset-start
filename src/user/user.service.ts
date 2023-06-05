import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getUsers() {
    return {
      code: 0,
      data: [],
      msg: '请求用户列表成功',
    };
  }

  addUsers() {
    return {
      code: 0,
      data: {},
      msg: '添加用户列表成功',
    };
  }
}
