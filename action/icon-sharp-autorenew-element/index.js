import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpAutorenewElement
 * @class IconSharpAutorenewElement
 * @extends {AoflElement}
 */
class IconSharpAutorenewElement extends AoflElement {
  /**
   * Creates an instance of IconSharpAutorenewElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-autorenew';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpAutorenewElement.is, IconSharpAutorenewElement);

export default IconSharpAutorenewElement;
