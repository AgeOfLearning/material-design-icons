import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpFilterBAndWElement
 * @class IconSharpFilterBAndWElement
 * @extends {AoflElement}
 */
class IconSharpFilterBAndWElement extends AoflElement {
  /**
   * Creates an instance of IconSharpFilterBAndWElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-filter-b-and-w';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpFilterBAndWElement.is, IconSharpFilterBAndWElement);

export default IconSharpFilterBAndWElement;
