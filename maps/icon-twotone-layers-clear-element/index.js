import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneLayersClearElement
 * @class IconTwotoneLayersClearElement
 * @extends {AoflElement}
 */
class IconTwotoneLayersClearElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneLayersClearElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-layers-clear';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneLayersClearElement.is, IconTwotoneLayersClearElement);

export default IconTwotoneLayersClearElement;
