import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundLockElement
 * @class IconRoundLockElement
 * @extends {AoflElement}
 */
class IconRoundLockElement extends AoflElement {
  /**
   * Creates an instance of IconRoundLockElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-lock';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundLockElement.is, IconRoundLockElement);

export default IconRoundLockElement;
