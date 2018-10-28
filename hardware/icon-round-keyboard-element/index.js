import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundKeyboardElement
 * @class IconRoundKeyboardElement
 * @extends {AoflElement}
 */
class IconRoundKeyboardElement extends AoflElement {
  /**
   * Creates an instance of IconRoundKeyboardElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-keyboard';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundKeyboardElement.is, IconRoundKeyboardElement);

export default IconRoundKeyboardElement;
