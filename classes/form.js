import {randomString} from '../helpers/utils';

export default class Form {
  id = randomString(8);
  name;
  items;
  createTime = new Date().getTime();
  lastModifiedTime = new Date().getTime();
  
  get id() {
    return this.id;
  }

  /**
   * @param {string} val
   */
  set id(val) {
    this.id = val;
  }

  get name() {
    return this.name;
  }

  /**
   * @param {string} name
   */
  set name(name) {
    this.name = name;
  }

  get items() {
    return this.items;
  }

  /**
   * @param {FormItem[]} list
   */
  set items(list) {
    this.items = list || [];
  }

  get createTime() {
    return this.createTime;
  }

  /**
   * @param {number} time
   */
  set createTime(time) {
    this.createTime = time;
  }

  get lastModifiedTime() {
    return this.lastModifiedTime;
  }

  /**
   * @param {number} time
   */
  set lastModifiedTime(time) {
    this.lastModifiedTime = time;
  }
}
