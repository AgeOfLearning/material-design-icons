import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpLayersClearElement
 * @class IconSharpLayersClearElement
 * @extends {AoflElement}
 */
class IconSharpLayersClearElement extends AoflElement {
  /**
   * Creates an instance of IconSharpLayersClearElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-layers-clear';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpLayersClearElement.is, IconSharpLayersClearElement);

export default IconSharpLayersClearElement;
