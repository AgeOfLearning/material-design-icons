import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineScreenLockLandscapeElement
 * @class IconBaselineScreenLockLandscapeElement
 * @extends {AoflElement}
 */
class IconBaselineScreenLockLandscapeElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineScreenLockLandscapeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-screen-lock-landscape';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineScreenLockLandscapeElement.is, IconBaselineScreenLockLandscapeElement);

export default IconBaselineScreenLockLandscapeElement;
