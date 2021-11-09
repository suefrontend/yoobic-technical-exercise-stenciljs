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
    } finally {
      console.log('Result has been delivered.');
    }
  }

  render() {
    const renderList = this.result.map(item => {
      return <card-list-item imageTitle={item.imageTitle} imageUrl={item.imageUrl}></card-list-item>;
    });

    return <ul>{renderList}</ul>;
  }
}
