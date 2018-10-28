import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneArrowDownwardElement
 * @class IconTwotoneArrowDownwardElement
 * @extends {AoflElement}
 */
class IconTwotoneArrowDownwardElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneArrowDownwardElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-arrow-downward';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneArrowDownwardElement.is, IconTwotoneArrowDownwardElement);

export default IconTwotoneArrowDownwardElement;
