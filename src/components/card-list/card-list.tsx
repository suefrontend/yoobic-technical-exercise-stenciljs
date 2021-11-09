import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'card-list',
  styleUrl: 'card-list.css',
  shadow: true,
})
export class CardList {
  @State() result: { imageTitle: string; imageUrl: string }[] = [];

  componentWillLoad() {
    return this.fetchData();
  }

  async fetchData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=20');

    try {
      const data = await response.json();
      this.result = data.map(item => {
        return {
          imageTitle: item['title'],
          imageUrl: item['thumbnailUrl'],
        };
      });
    } catch (error) {
      console.log('error: ', error);
    }
  }

  render() {
    const renderList = this.result.map(item => {
      return <my-card-item title={item.imageTitle} imageUrl={item.imageUrl}></my-card-item>;
    });

    return <ul>{renderList}</ul>;
  }
}
