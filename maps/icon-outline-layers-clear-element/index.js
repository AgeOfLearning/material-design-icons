import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineLayersClearElement
 * @class IconOutlineLayersClearElement
 * @extends {AoflElement}
 */
class IconOutlineLayersClearElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineLayersClearElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-layers-clear';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineLayersClearElement.is, IconOutlineLayersClearElement);

export default IconOutlineLayersClearElement;
