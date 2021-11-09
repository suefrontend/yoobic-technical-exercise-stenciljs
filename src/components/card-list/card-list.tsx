import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'card-list',
  styleUrl: 'card-list.css',
  shadow: true,
})
export class CardList {
  @State() result: { title: string; imageUrl: string }[] = [];

  componentWillLoad() {
    return this.fetchData();
  }

  async fetchData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=20');

    if (response.status === 200) {
      const data = await response.json();
      this.result = data.map(item => {
        return {
          title: item['title'],
          imageUrl: item['thumbnailUrl'],
        };
      });
    }
  }

  render() {
    const renderList = this.result.map(item => {
      return <my-card-item title={item.title} imageUrl={item.imageUrl}></my-card-item>;
    });

    return <ul>{renderList}</ul>;
  }
}
