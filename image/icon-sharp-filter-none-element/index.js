import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpFilterNoneElement
 * @class IconSharpFilterNoneElement
 * @extends {AoflElement}
 */
class IconSharpFilterNoneElement extends AoflElement {
  /**
   * Creates an instance of IconSharpFilterNoneElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-filter-none';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpFilterNoneElement.is, IconSharpFilterNoneElement);

export default IconSharpFilterNoneElement;
