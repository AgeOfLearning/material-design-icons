import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundKeyboardCapslockElement
 * @class IconRoundKeyboardCapslockElement
 * @extends {AoflElement}
 */
class IconRoundKeyboardCapslockElement extends AoflElement {
  /**
   * Creates an instance of IconRoundKeyboardCapslockElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-keyboard-capslock';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundKeyboardCapslockElement.is, IconRoundKeyboardCapslockElement);

export default IconRoundKeyboardCapslockElement;
