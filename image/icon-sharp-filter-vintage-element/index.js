import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpFilterVintageElement
 * @class IconSharpFilterVintageElement
 * @extends {AoflElement}
 */
class IconSharpFilterVintageElement extends AoflElement {
  /**
   * Creates an instance of IconSharpFilterVintageElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-filter-vintage';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpFilterVintageElement.is, IconSharpFilterVintageElement);

export default IconSharpFilterVintageElement;
