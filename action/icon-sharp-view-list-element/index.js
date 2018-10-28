import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpViewListElement
 * @class IconSharpViewListElement
 * @extends {AoflElement}
 */
class IconSharpViewListElement extends AoflElement {
  /**
   * Creates an instance of IconSharpViewListElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-view-list';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpViewListElement.is, IconSharpViewListElement);

export default IconSharpViewListElement;
