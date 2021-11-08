import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-card-item',
  styleUrl: 'my-card-item.css',
  shadow: true,
})
export class MyCardItem {
  render() {
    return <div>MyCardItem Component</div>;
  }
}
