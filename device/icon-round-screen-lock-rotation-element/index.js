import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundScreenLockRotationElement
 * @class IconRoundScreenLockRotationElement
 * @extends {AoflElement}
 */
class IconRoundScreenLockRotationElement extends AoflElement {
  /**
   * Creates an instance of IconRoundScreenLockRotationElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-screen-lock-rotation';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundScreenLockRotationElement.is, IconRoundScreenLockRotationElement);

export default IconRoundScreenLockRotationElement;
