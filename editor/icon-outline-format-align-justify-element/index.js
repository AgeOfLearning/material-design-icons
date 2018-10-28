import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineFormatAlignJustifyElement
 * @class IconOutlineFormatAlignJustifyElement
 * @extends {AoflElement}
 */
class IconOutlineFormatAlignJustifyElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineFormatAlignJustifyElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-format-align-justify';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineFormatAlignJustifyElement.is, IconOutlineFormatAlignJustifyElement);

export default IconOutlineFormatAlignJustifyElement;
