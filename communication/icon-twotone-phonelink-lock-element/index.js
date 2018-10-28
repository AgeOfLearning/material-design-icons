import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotonePhonelinkLockElement
 * @class IconTwotonePhonelinkLockElement
 * @extends {AoflElement}
 */
class IconTwotonePhonelinkLockElement extends AoflElement {
  /**
   * Creates an instance of IconTwotonePhonelinkLockElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-phonelink-lock';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotonePhonelinkLockElement.is, IconTwotonePhonelinkLockElement);

export default IconTwotonePhonelinkLockElement;
