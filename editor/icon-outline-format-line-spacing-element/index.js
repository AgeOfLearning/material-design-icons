import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineFormatLineSpacingElement
 * @class IconOutlineFormatLineSpacingElement
 * @extends {AoflElement}
 */
class IconOutlineFormatLineSpacingElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineFormatLineSpacingElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-format-line-spacing';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineFormatLineSpacingElement.is, IconOutlineFormatLineSpacingElement);

export default IconOutlineFormatLineSpacingElement;
