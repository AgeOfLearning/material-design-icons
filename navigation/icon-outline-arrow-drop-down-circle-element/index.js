import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineArrowDropDownCircleElement
 * @class IconOutlineArrowDropDownCircleElement
 * @extends {AoflElement}
 */
class IconOutlineArrowDropDownCircleElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineArrowDropDownCircleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-arrow-drop-down-circle';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineArrowDropDownCircleElement.is, IconOutlineArrowDropDownCircleElement);

export default IconOutlineArrowDropDownCircleElement;
