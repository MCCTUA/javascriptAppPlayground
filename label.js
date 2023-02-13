/*
 * Step การทำงาน
 * 1. ป้อนข้อมูลว่าจะเอาสินค้าอะไรมากรอก เพื่อออก Label
 *   - Model สินค้า
 *   - sku
 *   - category สินค้า
 *   - วันที่ออกสินค้า
 *   - จำนวนที่ต้องการออก label
 * 2. ทำการหาว่าภายในเดือนนั้นๆ มีการออก label สินค้าในหมวด (category) นี้แล้วจำนวนเท่าไหร่
 * 3. ทำการ แจ้งจำนวน ที่ผลิต โดยให้ค่าในข้อ 2 เป็นค่าเริ่มต้น และจำนวนที่ต้องการออก label
 * 4. ทำการ run หมายเลข serial no 5 ตำแหน่ง
 * 5. กำหนด prefix โดยการหา unixTimestamp / 1000
 * 6. นำข้อ 4 และ 5 มาต่อกัน
 * 7. นำผลลัพธ์ที่ได้ในข้อ 6 ไปหา Check จาก mod function แล้วเอาไปต่อท้าย serial no
 * 8. ทำการ modify base object ของ สินค้า พร้อมกับ ใส่ serial no เข้าไป แล้วให้ return ค่าออกมาเป็น object ใน array
 */

import { demoData } from "./model/label.js";

import {
  lastCount,
  prefixSn,
  modifySn,
  rangeSn,
  serailNoFunction,
} from "./util/label/labelUtil.js";

const baseData = {
  date: "2023-01-22T17:00:00.000Z",
  isPrint: false,
  brand: "KSC Lighting",
  model: "KSCRH-6A25-15065",
  sku: 503050020186,
  power: "150W",
  input: "100 - 277 VAc",
  surge: "",
  cct: 6500,
  cri: 70,
  lumen: 24000,
  category: "RH",
  prefixLot: 2301,
  numberInLot: 41,
  oldSn: "RH-230100041",
  sn: "RH-16744608413",
  checkUnique: 1,
  mfg: "2301-3",
  customer: "กฤษณุกูล",
  beamAngle: "60°",
  deliveryDate: "2023-01-20T17:00:00.000Z",
  poNo: "",
  woNo: "",
  soNo: "",
  extraOnLable: "",
  warranty: "3",
  originalSource: "SCL",
  receptDate: "2023-01-22T17:00:00.000Z",
  productSizemm: "",
  packagingSizemm: "",
  note: "",
};

const fakeInputData = [
  {
    date: "2023-02-12T00:00:00.00",
    isPrint: false,
    brand: "Gismo Lighting",
    model: "RH-6A25-15065",
    sku: 503050020186,
    power: "150W",
    input: "100 - 277 VAc",
    surge: "",
    cct: 6500,
    cri: 70,
    lumen: 24000,
    category: "RH",
    prefixLot: 2301,
    numberInLot: 41,
    oldSn: "RH-230100041",
    sn: "RH-16744608413",
    checkUnique: 1,
    mfg: "2301-3",
    customer: "TPC",
    beamAngle: "90°",
    deliveryDate: "2023-01-20T17:00:00.000Z",
    poNo: "",
    woNo: "",
    soNo: "",
    extraOnLable: "",
    warranty: "3",
    originalSource: "SCL",
    receptDate: "2023-01-22T17:00:00.000Z",
    productSizemm: "",
    packagingSizemm: "",
    note: "",
  },
  {
    date: "2023-02-01T17:00:00.000Z",
    isPrint: false,
    brand: "LUCE",
    model: "RH-6A25-10040",
    sku: 503050020017,
    power: "100W",
    input: "100-305 VAc",
    surge: "6KV",
    cct: 4000,
    cri: 80,
    lumen: 15000,
    category: "RH",
    prefixLot: 2302,
    numberInLot: 12,
    oldSn: "RH-230200012",
    sn: "RH-16753248121",
    checkUnique: 1,
    mfg: "2302-3",
    customer: "เซาท์อีสไทยแลนด์",
    beamAngle: "90°",
    deliveryDate: "2023-02-01T17:00:00.000Z",
    poNo: "",
    woNo: "",
    soNo: "",
    extraOnLable: "",
    warranty: "3",
    originalSource: "SCL",
    receptDate: "2023-02-01T17:00:00.000Z",
    productSizemm: "",
    packagingSizemm: "",
    note: ".",
  },
];

// const dDate = +new Date(fakeInputData[0].date);
// console.log(dDate);

const todayIs = "2023-02-12T00:00:00";

const filterData = lastCount(fakeInputData, demoData);
const prefix = prefixSn(todayIs);
const range = rangeSn(filterData, 8);
const newSn = serailNoFunction(range, prefix);

// console.log(newSn[0].length);
console.log(newSn);

const newData = modifySn(newSn, fakeInputData[0]);

const dataBaseList = [...demoData, ...newData];

/*******/
const inputName = {
  isPrint: "chekc for print",
  brand: "Brand",
  model: "model",
};
console.log(Object.entries(inputName));
