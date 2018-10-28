import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineCategoryElement
 * @class IconOutlineCategoryElement
 * @extends {AoflElement}
 */
class IconOutlineCategoryElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineCategoryElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-category';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineCategoryElement.is, IconOutlineCategoryElement);

export default IconOutlineCategoryElement;
