import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineKeyboardElement
 * @class IconBaselineKeyboardElement
 * @extends {AoflElement}
 */
class IconBaselineKeyboardElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineKeyboardElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-keyboard';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineKeyboardElement.is, IconBaselineKeyboardElement);

export default IconBaselineKeyboardElement;
