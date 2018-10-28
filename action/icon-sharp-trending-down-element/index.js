import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpTrendingDownElement
 * @class IconSharpTrendingDownElement
 * @extends {AoflElement}
 */
class IconSharpTrendingDownElement extends AoflElement {
  /**
   * Creates an instance of IconSharpTrendingDownElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-trending-down';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpTrendingDownElement.is, IconSharpTrendingDownElement);

export default IconSharpTrendingDownElement;
