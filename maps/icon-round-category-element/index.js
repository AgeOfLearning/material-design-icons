import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundCategoryElement
 * @class IconRoundCategoryElement
 * @extends {AoflElement}
 */
class IconRoundCategoryElement extends AoflElement {
  /**
   * Creates an instance of IconRoundCategoryElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-category';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundCategoryElement.is, IconRoundCategoryElement);

export default IconRoundCategoryElement;
