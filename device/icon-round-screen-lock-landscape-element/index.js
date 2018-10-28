import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundScreenLockLandscapeElement
 * @class IconRoundScreenLockLandscapeElement
 * @extends {AoflElement}
 */
class IconRoundScreenLockLandscapeElement extends AoflElement {
  /**
   * Creates an instance of IconRoundScreenLockLandscapeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-screen-lock-landscape';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundScreenLockLandscapeElement.is, IconRoundScreenLockLandscapeElement);

export default IconRoundScreenLockLandscapeElement;
