import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpFilter8Element
 * @class IconSharpFilter8Element
 * @extends {AoflElement}
 */
class IconSharpFilter8Element extends AoflElement {
  /**
   * Creates an instance of IconSharpFilter8Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-filter-8';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpFilter8Element.is, IconSharpFilter8Element);

export default IconSharpFilter8Element;
