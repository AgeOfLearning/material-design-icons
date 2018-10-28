import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpLayersElement
 * @class IconSharpLayersElement
 * @extends {AoflElement}
 */
class IconSharpLayersElement extends AoflElement {
  /**
   * Creates an instance of IconSharpLayersElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-layers';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpLayersElement.is, IconSharpLayersElement);

export default IconSharpLayersElement;
