import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneLayersElement
 * @class IconTwotoneLayersElement
 * @extends {AoflElement}
 */
class IconTwotoneLayersElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneLayersElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-layers';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneLayersElement.is, IconTwotoneLayersElement);

export default IconTwotoneLayersElement;
