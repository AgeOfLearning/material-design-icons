import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundKeyboardArrowRightElement
 * @class IconRoundKeyboardArrowRightElement
 * @extends {AoflElement}
 */
class IconRoundKeyboardArrowRightElement extends AoflElement {
  /**
   * Creates an instance of IconRoundKeyboardArrowRightElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-keyboard-arrow-right';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundKeyboardArrowRightElement.is, IconRoundKeyboardArrowRightElement);

export default IconRoundKeyboardArrowRightElement;
