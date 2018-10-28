import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineViewListElement
 * @class IconOutlineViewListElement
 * @extends {AoflElement}
 */
class IconOutlineViewListElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineViewListElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-view-list';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineViewListElement.is, IconOutlineViewListElement);

export default IconOutlineViewListElement;
