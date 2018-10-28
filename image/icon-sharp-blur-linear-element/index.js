import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpBlurLinearElement
 * @class IconSharpBlurLinearElement
 * @extends {AoflElement}
 */
class IconSharpBlurLinearElement extends AoflElement {
  /**
   * Creates an instance of IconSharpBlurLinearElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-blur-linear';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpBlurLinearElement.is, IconSharpBlurLinearElement);

export default IconSharpBlurLinearElement;
