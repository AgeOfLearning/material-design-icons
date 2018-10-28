import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneWbIncandescentElement
 * @class IconTwotoneWbIncandescentElement
 * @extends {AoflElement}
 */
class IconTwotoneWbIncandescentElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneWbIncandescentElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-wb-incandescent';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneWbIncandescentElement.is, IconTwotoneWbIncandescentElement);

export default IconTwotoneWbIncandescentElement;
