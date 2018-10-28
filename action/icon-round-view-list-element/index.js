import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundViewListElement
 * @class IconRoundViewListElement
 * @extends {AoflElement}
 */
class IconRoundViewListElement extends AoflElement {
  /**
   * Creates an instance of IconRoundViewListElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-view-list';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundViewListElement.is, IconRoundViewListElement);

export default IconRoundViewListElement;
