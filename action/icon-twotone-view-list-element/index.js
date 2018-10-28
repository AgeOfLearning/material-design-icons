import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneViewListElement
 * @class IconTwotoneViewListElement
 * @extends {AoflElement}
 */
class IconTwotoneViewListElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneViewListElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-view-list';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneViewListElement.is, IconTwotoneViewListElement);

export default IconTwotoneViewListElement;
