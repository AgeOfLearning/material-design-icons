import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpTramElement
 * @class IconSharpTramElement
 * @extends {AoflElement}
 */
class IconSharpTramElement extends AoflElement {
  /**
   * Creates an instance of IconSharpTramElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-tram';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpTramElement.is, IconSharpTramElement);

export default IconSharpTramElement;
