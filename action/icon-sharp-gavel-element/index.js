import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpGavelElement
 * @class IconSharpGavelElement
 * @extends {AoflElement}
 */
class IconSharpGavelElement extends AoflElement {
  /**
   * Creates an instance of IconSharpGavelElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-gavel';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpGavelElement.is, IconSharpGavelElement);

export default IconSharpGavelElement;
