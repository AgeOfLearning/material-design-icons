import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpBorderStyleElement
 * @class IconSharpBorderStyleElement
 * @extends {AoflElement}
 */
class IconSharpBorderStyleElement extends AoflElement {
  /**
   * Creates an instance of IconSharpBorderStyleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-border-style';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpBorderStyleElement.is, IconSharpBorderStyleElement);

export default IconSharpBorderStyleElement;
