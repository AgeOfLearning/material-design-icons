import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineCategoryElement
 * @class IconBaselineCategoryElement
 * @extends {AoflElement}
 */
class IconBaselineCategoryElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineCategoryElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-category';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineCategoryElement.is, IconBaselineCategoryElement);

export default IconBaselineCategoryElement;
