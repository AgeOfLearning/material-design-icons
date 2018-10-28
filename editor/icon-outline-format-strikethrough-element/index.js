import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineFormatStrikethroughElement
 * @class IconOutlineFormatStrikethroughElement
 * @extends {AoflElement}
 */
class IconOutlineFormatStrikethroughElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineFormatStrikethroughElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-format-strikethrough';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineFormatStrikethroughElement.is, IconOutlineFormatStrikethroughElement);

export default IconOutlineFormatStrikethroughElement;
