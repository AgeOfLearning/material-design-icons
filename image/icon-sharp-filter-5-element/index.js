import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpFilter5Element
 * @class IconSharpFilter5Element
 * @extends {AoflElement}
 */
class IconSharpFilter5Element extends AoflElement {
  /**
   * Creates an instance of IconSharpFilter5Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-filter-5';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpFilter5Element.is, IconSharpFilter5Element);

export default IconSharpFilter5Element;
