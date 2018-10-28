import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineFormatClearElement
 * @class IconOutlineFormatClearElement
 * @extends {AoflElement}
 */
class IconOutlineFormatClearElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineFormatClearElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-format-clear';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineFormatClearElement.is, IconOutlineFormatClearElement);

export default IconOutlineFormatClearElement;
