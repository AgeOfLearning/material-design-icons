import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineViewListElement
 * @class IconBaselineViewListElement
 * @extends {AoflElement}
 */
class IconBaselineViewListElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineViewListElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-view-list';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineViewListElement.is, IconBaselineViewListElement);

export default IconBaselineViewListElement;
