import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineKeyboardTabElement
 * @class IconBaselineKeyboardTabElement
 * @extends {AoflElement}
 */
class IconBaselineKeyboardTabElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineKeyboardTabElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-keyboard-tab';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineKeyboardTabElement.is, IconBaselineKeyboardTabElement);

export default IconBaselineKeyboardTabElement;
