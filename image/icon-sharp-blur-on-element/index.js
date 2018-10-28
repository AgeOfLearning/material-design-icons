import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpBlurOnElement
 * @class IconSharpBlurOnElement
 * @extends {AoflElement}
 */
class IconSharpBlurOnElement extends AoflElement {
  /**
   * Creates an instance of IconSharpBlurOnElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-blur-on';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpBlurOnElement.is, IconSharpBlurOnElement);

export default IconSharpBlurOnElement;
