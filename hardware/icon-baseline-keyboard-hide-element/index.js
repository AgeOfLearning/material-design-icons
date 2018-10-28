import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineKeyboardHideElement
 * @class IconBaselineKeyboardHideElement
 * @extends {AoflElement}
 */
class IconBaselineKeyboardHideElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineKeyboardHideElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-keyboard-hide';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineKeyboardHideElement.is, IconBaselineKeyboardHideElement);

export default IconBaselineKeyboardHideElement;
