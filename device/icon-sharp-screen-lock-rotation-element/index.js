import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpScreenLockRotationElement
 * @class IconSharpScreenLockRotationElement
 * @extends {AoflElement}
 */
class IconSharpScreenLockRotationElement extends AoflElement {
  /**
   * Creates an instance of IconSharpScreenLockRotationElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-screen-lock-rotation';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpScreenLockRotationElement.is, IconSharpScreenLockRotationElement);

export default IconSharpScreenLockRotationElement;
