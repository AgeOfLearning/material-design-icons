import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineFormatListNumberedElement
 * @class IconOutlineFormatListNumberedElement
 * @extends {AoflElement}
 */
class IconOutlineFormatListNumberedElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineFormatListNumberedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-format-list-numbered';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineFormatListNumberedElement.is, IconOutlineFormatListNumberedElement);

export default IconOutlineFormatListNumberedElement;
