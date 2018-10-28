import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneCategoryElement
 * @class IconTwotoneCategoryElement
 * @extends {AoflElement}
 */
class IconTwotoneCategoryElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneCategoryElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-category';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneCategoryElement.is, IconTwotoneCategoryElement);

export default IconTwotoneCategoryElement;
