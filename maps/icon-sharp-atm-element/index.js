import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpAtmElement
 * @class IconSharpAtmElement
 * @extends {AoflElement}
 */
class IconSharpAtmElement extends AoflElement {
  /**
   * Creates an instance of IconSharpAtmElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-atm';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpAtmElement.is, IconSharpAtmElement);

export default IconSharpAtmElement;
