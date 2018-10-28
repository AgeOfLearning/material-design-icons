import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineFormatSizeElement
 * @class IconOutlineFormatSizeElement
 * @extends {AoflElement}
 */
class IconOutlineFormatSizeElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineFormatSizeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-format-size';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineFormatSizeElement.is, IconOutlineFormatSizeElement);

export default IconOutlineFormatSizeElement;
