import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotonePhoneMissedElement
 * @class IconTwotonePhoneMissedElement
 * @extends {AoflElement}
 */
class IconTwotonePhoneMissedElement extends AoflElement {
  /**
   * Creates an instance of IconTwotonePhoneMissedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-phone-missed';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotonePhoneMissedElement.is, IconTwotonePhoneMissedElement);

export default IconTwotonePhoneMissedElement;
