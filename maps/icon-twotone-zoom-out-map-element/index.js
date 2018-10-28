import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneZoomOutMapElement
 * @class IconTwotoneZoomOutMapElement
 * @extends {AoflElement}
 */
class IconTwotoneZoomOutMapElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneZoomOutMapElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-zoom-out-map';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneZoomOutMapElement.is, IconTwotoneZoomOutMapElement);

export default IconTwotoneZoomOutMapElement;
