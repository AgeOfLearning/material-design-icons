import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineArrowDropDownElement
 * @class IconOutlineArrowDropDownElement
 * @extends {AoflElement}
 */
class IconOutlineArrowDropDownElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineArrowDropDownElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-arrow-drop-down';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineArrowDropDownElement.is, IconOutlineArrowDropDownElement);

export default IconOutlineArrowDropDownElement;
