import { makeAutoObservable } from 'mobx'

export default class DeviceStore {
  constructor() {
    this._types = [
      {id: 1, name: 'Холодильники'},
      {id: 2, name: 'Смартфоны'},
      {id: 3, name: 'Ноутбуки'},
      {id: 4 , name: 'Телевизоры'},
    ]
    this._brands = [
      {id: 1, name: 'Samsung'},
      {id: 2, name: 'Apple'},
      {id: 3, name: 'Lenovo'},
      {id: 4, name: 'Huawei'},
    ]
    this._devices = [
      {id: 1, name: "Samsung Galaxy S23 Ultra", price: 25000, rating: 5, img: 'https://telemarket24.ru/upload/img/samsung-galaxy-s23-ultra2.png'},
      {id: 2, name: "Samsung Galaxy S23 Ultra", price: 25000, rating: 5, img: 'https://telemarket24.ru/upload/img/samsung-galaxy-s23-ultra2.png'},
      {id: 3, name: "Samsung Galaxy S23 Ultra", price: 25000, rating: 5, img: 'https://telemarket24.ru/upload/img/samsung-galaxy-s23-ultra2.png'},
      {id: 4, name: "Samsung Galaxy S23 Ultra", price: 25000, rating: 5, img: 'https://telemarket24.ru/upload/img/samsung-galaxy-s23-ultra2.png'},
      {id: 5, name: "Samsung Galaxy S23 Ultra", price: 25000, rating: 5, img: 'https://telemarket24.ru/upload/img/samsung-galaxy-s23-ultra2.png'},
    ]
    this._selectedType = {}
    this._selectedBrand = {}
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
  setSelectedType(type) {
    this._selectedType = type
  }
  setSelectedBrand(brand) {
    this._selectedBrand = brand
  }
  get types() {
    return this._types
  }
  get brands() {
    return this._brands
  }
  get devices() {
    return this._devices
  }
  get selectedType() {
    return this._selectedType
  }
  get selectedBrand() {
    return this._selectedBrand
  }
}