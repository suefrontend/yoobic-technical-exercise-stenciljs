import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'my-card',
  styleUrl: 'my-card.css',
  shadow: true,
})
export class MyCard {
  @State() result: { name: string; marketOpen: string }[] = [];

  componentWillLoad() {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(json => {
        this.result = json;
        console.log(this.result);
      });
  }

  render() {
    return (
      <div>
        <p>Parent Component</p>
        <my-card-item></my-card-item>
      </div>
    );
  }
}
