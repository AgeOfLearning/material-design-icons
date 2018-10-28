import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpFormatListNumberedElement
 * @class IconSharpFormatListNumberedElement
 * @extends {AoflElement}
 */
class IconSharpFormatListNumberedElement extends AoflElement {
  /**
   * Creates an instance of IconSharpFormatListNumberedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-format-list-numbered';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpFormatListNumberedElement.is, IconSharpFormatListNumberedElement);

export default IconSharpFormatListNumberedElement;
