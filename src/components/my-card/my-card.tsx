import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'my-card',
  styleUrl: 'my-card.css',
  shadow: true,
})
export class MyCard {
  @State() result: { title: string; imageUrl: string }[] = [];

  componentWillLoad() {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(json => {
        this.result = json;
        console.log(this.result);
      });
  }

  render() {
    const renderList = this.result.map(item => {
      return <my-card-item title={item.title} imageUrl={item.photoUrl}></my-card-item>;
    });

    return <div>{renderList}</div>;
  }
}
