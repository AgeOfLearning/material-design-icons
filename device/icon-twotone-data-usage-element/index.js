import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneDataUsageElement
 * @class IconTwotoneDataUsageElement
 * @extends {AoflElement}
 */
class IconTwotoneDataUsageElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneDataUsageElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-data-usage';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneDataUsageElement.is, IconTwotoneDataUsageElement);

export default IconTwotoneDataUsageElement;
