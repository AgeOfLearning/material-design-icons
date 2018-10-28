import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpArrowDropDownElement
 * @class IconSharpArrowDropDownElement
 * @extends {AoflElement}
 */
class IconSharpArrowDropDownElement extends AoflElement {
  /**
   * Creates an instance of IconSharpArrowDropDownElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-arrow-drop-down';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpArrowDropDownElement.is, IconSharpArrowDropDownElement);

export default IconSharpArrowDropDownElement;
