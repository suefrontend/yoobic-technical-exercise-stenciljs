import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'card-list-item',
  styleUrl: 'card-list-item.css',
  shadow: true,
})
export class CardListItem {
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
