import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundLockOpenElement
 * @class IconRoundLockOpenElement
 * @extends {AoflElement}
 */
class IconRoundLockOpenElement extends AoflElement {
  /**
   * Creates an instance of IconRoundLockOpenElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-lock-open';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundLockOpenElement.is, IconRoundLockOpenElement);

export default IconRoundLockOpenElement;
