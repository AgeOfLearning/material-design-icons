import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpStyleElement
 * @class IconSharpStyleElement
 * @extends {AoflElement}
 */
class IconSharpStyleElement extends AoflElement {
  /**
   * Creates an instance of IconSharpStyleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-style';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpStyleElement.is, IconSharpStyleElement);

export default IconSharpStyleElement;
