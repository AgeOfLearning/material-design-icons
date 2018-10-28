import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneTrendingFlatElement
 * @class IconTwotoneTrendingFlatElement
 * @extends {AoflElement}
 */
class IconTwotoneTrendingFlatElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneTrendingFlatElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-trending-flat';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneTrendingFlatElement.is, IconTwotoneTrendingFlatElement);

export default IconTwotoneTrendingFlatElement;
