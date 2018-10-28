import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundKeyboardTabElement
 * @class IconRoundKeyboardTabElement
 * @extends {AoflElement}
 */
class IconRoundKeyboardTabElement extends AoflElement {
  /**
   * Creates an instance of IconRoundKeyboardTabElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-keyboard-tab';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundKeyboardTabElement.is, IconRoundKeyboardTabElement);

export default IconRoundKeyboardTabElement;
