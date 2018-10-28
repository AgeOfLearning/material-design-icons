import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineKeyboardReturnElement
 * @class IconBaselineKeyboardReturnElement
 * @extends {AoflElement}
 */
class IconBaselineKeyboardReturnElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineKeyboardReturnElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-keyboard-return';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineKeyboardReturnElement.is, IconBaselineKeyboardReturnElement);

export default IconBaselineKeyboardReturnElement;
