import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpTrendingUpElement
 * @class IconSharpTrendingUpElement
 * @extends {AoflElement}
 */
class IconSharpTrendingUpElement extends AoflElement {
  /**
   * Creates an instance of IconSharpTrendingUpElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-trending-up';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpTrendingUpElement.is, IconSharpTrendingUpElement);

export default IconSharpTrendingUpElement;
