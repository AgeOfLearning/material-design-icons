import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpFilterListElement
 * @class IconSharpFilterListElement
 * @extends {AoflElement}
 */
class IconSharpFilterListElement extends AoflElement {
  /**
   * Creates an instance of IconSharpFilterListElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-filter-list';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpFilterListElement.is, IconSharpFilterListElement);

export default IconSharpFilterListElement;
