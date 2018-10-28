import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpCategoryElement
 * @class IconSharpCategoryElement
 * @extends {AoflElement}
 */
class IconSharpCategoryElement extends AoflElement {
  /**
   * Creates an instance of IconSharpCategoryElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-category';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpCategoryElement.is, IconSharpCategoryElement);

export default IconSharpCategoryElement;
