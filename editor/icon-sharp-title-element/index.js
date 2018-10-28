import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpTitleElement
 * @class IconSharpTitleElement
 * @extends {AoflElement}
 */
class IconSharpTitleElement extends AoflElement {
  /**
   * Creates an instance of IconSharpTitleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-title';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpTitleElement.is, IconSharpTitleElement);

export default IconSharpTitleElement;
