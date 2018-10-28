import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneArrowDropDownElement
 * @class IconTwotoneArrowDropDownElement
 * @extends {AoflElement}
 */
class IconTwotoneArrowDropDownElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneArrowDropDownElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-arrow-drop-down';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneArrowDropDownElement.is, IconTwotoneArrowDropDownElement);

export default IconTwotoneArrowDropDownElement;
