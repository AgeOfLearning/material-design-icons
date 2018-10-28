import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpFilterElement
 * @class IconSharpFilterElement
 * @extends {AoflElement}
 */
class IconSharpFilterElement extends AoflElement {
  /**
   * Creates an instance of IconSharpFilterElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-filter';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpFilterElement.is, IconSharpFilterElement);

export default IconSharpFilterElement;
