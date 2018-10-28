import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineFormatAlignLeftElement
 * @class IconOutlineFormatAlignLeftElement
 * @extends {AoflElement}
 */
class IconOutlineFormatAlignLeftElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineFormatAlignLeftElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-format-align-left';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineFormatAlignLeftElement.is, IconOutlineFormatAlignLeftElement);

export default IconOutlineFormatAlignLeftElement;
