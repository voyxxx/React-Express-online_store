import { makeAutoObservable } from "mobx";

export default class DeviceStore {
  constructor() {
    this._types = [
      {id: 1, name: 'Холодильники'},
      {id: 2, name: 'Смартфоны'},
    ]
    this._brands = [
      {id: 1, name: 'Samsung'},
      {id: 2, name: 'Apple'},
    ]
    this._devices = [
      {id: 1, name: "Samsung Galaxy S23 Ultra", price: 25000, rating: 5, img: 'https://telemarket24.ru/upload/img/samsung-galaxy-s23-ultra2.png'},
      {id: 2, name: "Samsung Galaxy S23 Ultra", price: 25000, rating: 5, img: 'https://telemarket24.ru/upload/img/samsung-galaxy-s23-ultra2.png'},
      {id: 3, name: "Samsung Galaxy S23 Ultra", price: 25000, rating: 5, img: 'https://telemarket24.ru/upload/img/samsung-galaxy-s23-ultra2.png'},
      {id: 4, name: "Samsung Galaxy S23 Ultra", price: 25000, rating: 5, img: 'https://telemarket24.ru/upload/img/samsung-galaxy-s23-ultra2.png'},
      {id: 5, name: "Samsung Galaxy S23 Ultra", price: 25000, rating: 5, img: 'https://telemarket24.ru/upload/img/samsung-galaxy-s23-ultra2.png'},
    ]
    makeAutoObservable(this)
  }

  setTypes(types) {
    this._types = types
  }
  setBrands(brands) {
    this._brands = brands
  }
  serDevices(devices) {
    this._devices = devices
  }
  getTypes() {
    return this._types
  }
  getBrands() {
    return this._brands
  }
  getDevices() {
    return this._devices
  }
}