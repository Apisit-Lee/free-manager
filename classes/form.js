import {randomString} from '../helpers/utils';

export default class Form {
  id;
  name;
  items;
  createTime;
  lastModifiedTime;

  constructor() {
    this.id = randomString(8);
    this.createTime = new Date().getTime();
    this.lastModifiedTime = new Date().getTime();
  }
  
  get id() {
    return this.id;
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