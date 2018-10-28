import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpTrendingFlatElement
 * @class IconSharpTrendingFlatElement
 * @extends {AoflElement}
 */
class IconSharpTrendingFlatElement extends AoflElement {
  /**
   * Creates an instance of IconSharpTrendingFlatElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-trending-flat';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpTrendingFlatElement.is, IconSharpTrendingFlatElement);

export default IconSharpTrendingFlatElement;
