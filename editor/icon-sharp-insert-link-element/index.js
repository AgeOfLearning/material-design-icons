import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpInsertLinkElement
 * @class IconSharpInsertLinkElement
 * @extends {AoflElement}
 */
class IconSharpInsertLinkElement extends AoflElement {
  /**
   * Creates an instance of IconSharpInsertLinkElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-insert-link';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpInsertLinkElement.is, IconSharpInsertLinkElement);

export default IconSharpInsertLinkElement;
