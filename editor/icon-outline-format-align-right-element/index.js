import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineFormatAlignRightElement
 * @class IconOutlineFormatAlignRightElement
 * @extends {AoflElement}
 */
class IconOutlineFormatAlignRightElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineFormatAlignRightElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-format-align-right';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineFormatAlignRightElement.is, IconOutlineFormatAlignRightElement);

export default IconOutlineFormatAlignRightElement;
