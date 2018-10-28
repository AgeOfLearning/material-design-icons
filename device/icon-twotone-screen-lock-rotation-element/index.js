import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneScreenLockRotationElement
 * @class IconTwotoneScreenLockRotationElement
 * @extends {AoflElement}
 */
class IconTwotoneScreenLockRotationElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneScreenLockRotationElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-screen-lock-rotation';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneScreenLockRotationElement.is, IconTwotoneScreenLockRotationElement);

export default IconTwotoneScreenLockRotationElement;
