import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'card-list-item',
  styleUrl: 'card-list-item.css',
  shadow: true,
})
export class CardListItem {
  @Prop() imageTitle: string = '';
  @Prop() imageUrl: string = '';

  render() {
    return (
      <li>
        <img src={this.imageUrl} alt={this.imageTitle} />
        <p>{this.imageTitle}</p>
      </li>
    );
  }
}
