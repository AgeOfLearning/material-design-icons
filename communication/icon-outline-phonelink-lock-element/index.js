import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlinePhonelinkLockElement
 * @class IconOutlinePhonelinkLockElement
 * @extends {AoflElement}
 */
class IconOutlinePhonelinkLockElement extends AoflElement {
  /**
   * Creates an instance of IconOutlinePhonelinkLockElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-phonelink-lock';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlinePhonelinkLockElement.is, IconOutlinePhonelinkLockElement);

export default IconOutlinePhonelinkLockElement;
