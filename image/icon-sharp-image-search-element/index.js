import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpImageSearchElement
 * @class IconSharpImageSearchElement
 * @extends {AoflElement}
 */
class IconSharpImageSearchElement extends AoflElement {
  /**
   * Creates an instance of IconSharpImageSearchElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-image-search';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpImageSearchElement.is, IconSharpImageSearchElement);

export default IconSharpImageSearchElement;
