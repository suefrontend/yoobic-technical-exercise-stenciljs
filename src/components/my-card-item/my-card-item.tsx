import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-card-item',
  styleUrl: 'my-card-item.css',
  shadow: true,
})
export class MyCardItem {
  @Prop() title: string = '';
  @Prop() imageUrl: string = '';

  render() {
    return (
      <li>
        <img src={this.imageUrl} alt={this.title} />
        <p>{this.title}</p>
      </li>
    );
  }
}
