import { observable, action } from 'mobx';

class Store {
  @observable number = 0;
  @observable color = [255, 255, 255];

  @action increase = () => {
    this.number++;
  }

  @action decrease = () => {
    this.number--;
  }

  @action setColor = (color) => {
    this.color = color;
  }
}

export default Store;