import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneCompareElement
 * @class IconTwotoneCompareElement
 * @extends {AoflElement}
 */
class IconTwotoneCompareElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneCompareElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-compare';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneCompareElement.is, IconTwotoneCompareElement);

export default IconTwotoneCompareElement;
