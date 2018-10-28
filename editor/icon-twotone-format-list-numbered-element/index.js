import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneFormatListNumberedElement
 * @class IconTwotoneFormatListNumberedElement
 * @extends {AoflElement}
 */
class IconTwotoneFormatListNumberedElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneFormatListNumberedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-format-list-numbered';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneFormatListNumberedElement.is, IconTwotoneFormatListNumberedElement);

export default IconTwotoneFormatListNumberedElement;
