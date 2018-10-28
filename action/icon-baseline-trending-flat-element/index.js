import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineTrendingFlatElement
 * @class IconBaselineTrendingFlatElement
 * @extends {AoflElement}
 */
class IconBaselineTrendingFlatElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineTrendingFlatElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-trending-flat';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineTrendingFlatElement.is, IconBaselineTrendingFlatElement);

export default IconBaselineTrendingFlatElement;
