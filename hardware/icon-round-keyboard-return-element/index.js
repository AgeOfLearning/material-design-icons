import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundKeyboardReturnElement
 * @class IconRoundKeyboardReturnElement
 * @extends {AoflElement}
 */
class IconRoundKeyboardReturnElement extends AoflElement {
  /**
   * Creates an instance of IconRoundKeyboardReturnElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-keyboard-return';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundKeyboardReturnElement.is, IconRoundKeyboardReturnElement);

export default IconRoundKeyboardReturnElement;
