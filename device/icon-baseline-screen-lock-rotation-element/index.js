import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineScreenLockRotationElement
 * @class IconBaselineScreenLockRotationElement
 * @extends {AoflElement}
 */
class IconBaselineScreenLockRotationElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineScreenLockRotationElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-screen-lock-rotation';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineScreenLockRotationElement.is, IconBaselineScreenLockRotationElement);

export default IconBaselineScreenLockRotationElement;
