import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpLoupeElement
 * @class IconSharpLoupeElement
 * @extends {AoflElement}
 */
class IconSharpLoupeElement extends AoflElement {
  /**
   * Creates an instance of IconSharpLoupeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-loupe';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpLoupeElement.is, IconSharpLoupeElement);

export default IconSharpLoupeElement;
