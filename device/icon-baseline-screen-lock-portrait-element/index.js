import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineScreenLockPortraitElement
 * @class IconBaselineScreenLockPortraitElement
 * @extends {AoflElement}
 */
class IconBaselineScreenLockPortraitElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineScreenLockPortraitElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-screen-lock-portrait';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineScreenLockPortraitElement.is, IconBaselineScreenLockPortraitElement);

export default IconBaselineScreenLockPortraitElement;
