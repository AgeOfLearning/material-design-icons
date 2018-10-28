import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpBlurOffElement
 * @class IconSharpBlurOffElement
 * @extends {AoflElement}
 */
class IconSharpBlurOffElement extends AoflElement {
  /**
   * Creates an instance of IconSharpBlurOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-blur-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpBlurOffElement.is, IconSharpBlurOffElement);

export default IconSharpBlurOffElement;
