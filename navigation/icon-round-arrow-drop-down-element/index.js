import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundArrowDropDownElement
 * @class IconRoundArrowDropDownElement
 * @extends {AoflElement}
 */
class IconRoundArrowDropDownElement extends AoflElement {
  /**
   * Creates an instance of IconRoundArrowDropDownElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-arrow-drop-down';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundArrowDropDownElement.is, IconRoundArrowDropDownElement);

export default IconRoundArrowDropDownElement;
