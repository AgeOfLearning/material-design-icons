import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneFormatStrikethroughElement
 * @class IconTwotoneFormatStrikethroughElement
 * @extends {AoflElement}
 */
class IconTwotoneFormatStrikethroughElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneFormatStrikethroughElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-format-strikethrough';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneFormatStrikethroughElement.is, IconTwotoneFormatStrikethroughElement);

export default IconTwotoneFormatStrikethroughElement;
