import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpTonalityElement
 * @class IconSharpTonalityElement
 * @extends {AoflElement}
 */
class IconSharpTonalityElement extends AoflElement {
  /**
   * Creates an instance of IconSharpTonalityElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-tonality';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpTonalityElement.is, IconSharpTonalityElement);

export default IconSharpTonalityElement;
