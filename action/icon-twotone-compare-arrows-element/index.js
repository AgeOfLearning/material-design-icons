import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneCompareArrowsElement
 * @class IconTwotoneCompareArrowsElement
 * @extends {AoflElement}
 */
class IconTwotoneCompareArrowsElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneCompareArrowsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-compare-arrows';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneCompareArrowsElement.is, IconTwotoneCompareArrowsElement);

export default IconTwotoneCompareArrowsElement;
