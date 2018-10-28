import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneArrowDropDownCircleElement
 * @class IconTwotoneArrowDropDownCircleElement
 * @extends {AoflElement}
 */
class IconTwotoneArrowDropDownCircleElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneArrowDropDownCircleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-arrow-drop-down-circle';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneArrowDropDownCircleElement.is, IconTwotoneArrowDropDownCircleElement);

export default IconTwotoneArrowDropDownCircleElement;
