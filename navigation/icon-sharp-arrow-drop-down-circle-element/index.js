import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpArrowDropDownCircleElement
 * @class IconSharpArrowDropDownCircleElement
 * @extends {AoflElement}
 */
class IconSharpArrowDropDownCircleElement extends AoflElement {
  /**
   * Creates an instance of IconSharpArrowDropDownCircleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-arrow-drop-down-circle';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpArrowDropDownCircleElement.is, IconSharpArrowDropDownCircleElement);

export default IconSharpArrowDropDownCircleElement;
