import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaseline360Element
 * @class IconBaseline360Element
 * @extends {AoflElement}
 */
class IconBaseline360Element extends AoflElement {
  /**
   * Creates an instance of IconBaseline360Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-360';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaseline360Element.is, IconBaseline360Element);

export default IconBaseline360Element;
