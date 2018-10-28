import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpAddLocationElement
 * @class IconSharpAddLocationElement
 * @extends {AoflElement}
 */
class IconSharpAddLocationElement extends AoflElement {
  /**
   * Creates an instance of IconSharpAddLocationElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-add-location';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpAddLocationElement.is, IconSharpAddLocationElement);

export default IconSharpAddLocationElement;
