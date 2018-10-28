import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpLocalAtmElement
 * @class IconSharpLocalAtmElement
 * @extends {AoflElement}
 */
class IconSharpLocalAtmElement extends AoflElement {
  /**
   * Creates an instance of IconSharpLocalAtmElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-local-atm';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpLocalAtmElement.is, IconSharpLocalAtmElement);

export default IconSharpLocalAtmElement;
