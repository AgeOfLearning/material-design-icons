import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotonePhoneElement
 * @class IconTwotonePhoneElement
 * @extends {AoflElement}
 */
class IconTwotonePhoneElement extends AoflElement {
  /**
   * Creates an instance of IconTwotonePhoneElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-phone';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotonePhoneElement.is, IconTwotonePhoneElement);

export default IconTwotonePhoneElement;
