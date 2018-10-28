import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineKeyboardCapslockElement
 * @class IconBaselineKeyboardCapslockElement
 * @extends {AoflElement}
 */
class IconBaselineKeyboardCapslockElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineKeyboardCapslockElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-keyboard-capslock';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineKeyboardCapslockElement.is, IconBaselineKeyboardCapslockElement);

export default IconBaselineKeyboardCapslockElement;
