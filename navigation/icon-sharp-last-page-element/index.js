import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpLastPageElement
 * @class IconSharpLastPageElement
 * @extends {AoflElement}
 */
class IconSharpLastPageElement extends AoflElement {
  /**
   * Creates an instance of IconSharpLastPageElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-last-page';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpLastPageElement.is, IconSharpLastPageElement);

export default IconSharpLastPageElement;
