import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineFormatAlignCenterElement
 * @class IconOutlineFormatAlignCenterElement
 * @extends {AoflElement}
 */
class IconOutlineFormatAlignCenterElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineFormatAlignCenterElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-format-align-center';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineFormatAlignCenterElement.is, IconOutlineFormatAlignCenterElement);

export default IconOutlineFormatAlignCenterElement;
