import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpBlurCircularElement
 * @class IconSharpBlurCircularElement
 * @extends {AoflElement}
 */
class IconSharpBlurCircularElement extends AoflElement {
  /**
   * Creates an instance of IconSharpBlurCircularElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-blur-circular';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpBlurCircularElement.is, IconSharpBlurCircularElement);

export default IconSharpBlurCircularElement;
