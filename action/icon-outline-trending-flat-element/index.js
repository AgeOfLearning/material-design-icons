import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineTrendingFlatElement
 * @class IconOutlineTrendingFlatElement
 * @extends {AoflElement}
 */
class IconOutlineTrendingFlatElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineTrendingFlatElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-trending-flat';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineTrendingFlatElement.is, IconOutlineTrendingFlatElement);

export default IconOutlineTrendingFlatElement;
