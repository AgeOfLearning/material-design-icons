import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneArrowUpwardElement
 * @class IconTwotoneArrowUpwardElement
 * @extends {AoflElement}
 */
class IconTwotoneArrowUpwardElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneArrowUpwardElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-arrow-upward';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneArrowUpwardElement.is, IconTwotoneArrowUpwardElement);

export default IconTwotoneArrowUpwardElement;
