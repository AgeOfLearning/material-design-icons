import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineScreenLockRotationElement
 * @class IconOutlineScreenLockRotationElement
 * @extends {AoflElement}
 */
class IconOutlineScreenLockRotationElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineScreenLockRotationElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-screen-lock-rotation';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineScreenLockRotationElement.is, IconOutlineScreenLockRotationElement);

export default IconOutlineScreenLockRotationElement;
