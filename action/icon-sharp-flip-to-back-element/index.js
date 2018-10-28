import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpFlipToBackElement
 * @class IconSharpFlipToBackElement
 * @extends {AoflElement}
 */
class IconSharpFlipToBackElement extends AoflElement {
  /**
   * Creates an instance of IconSharpFlipToBackElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-flip-to-back';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpFlipToBackElement.is, IconSharpFlipToBackElement);

export default IconSharpFlipToBackElement;
