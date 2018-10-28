import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundKeyboardArrowDownElement
 * @class IconRoundKeyboardArrowDownElement
 * @extends {AoflElement}
 */
class IconRoundKeyboardArrowDownElement extends AoflElement {
  /**
   * Creates an instance of IconRoundKeyboardArrowDownElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-keyboard-arrow-down';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundKeyboardArrowDownElement.is, IconRoundKeyboardArrowDownElement);

export default IconRoundKeyboardArrowDownElement;
