import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundKeyboardHideElement
 * @class IconRoundKeyboardHideElement
 * @extends {AoflElement}
 */
class IconRoundKeyboardHideElement extends AoflElement {
  /**
   * Creates an instance of IconRoundKeyboardHideElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-keyboard-hide';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundKeyboardHideElement.is, IconRoundKeyboardHideElement);

export default IconRoundKeyboardHideElement;
