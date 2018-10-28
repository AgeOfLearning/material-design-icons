import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpWavesElement
 * @class IconSharpWavesElement
 * @extends {AoflElement}
 */
class IconSharpWavesElement extends AoflElement {
  /**
   * Creates an instance of IconSharpWavesElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-waves';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpWavesElement.is, IconSharpWavesElement);

export default IconSharpWavesElement;
