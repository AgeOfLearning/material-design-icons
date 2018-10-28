import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundKeyboardArrowLeftElement
 * @class IconRoundKeyboardArrowLeftElement
 * @extends {AoflElement}
 */
class IconRoundKeyboardArrowLeftElement extends AoflElement {
  /**
   * Creates an instance of IconRoundKeyboardArrowLeftElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-keyboard-arrow-left';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundKeyboardArrowLeftElement.is, IconRoundKeyboardArrowLeftElement);

export default IconRoundKeyboardArrowLeftElement;
