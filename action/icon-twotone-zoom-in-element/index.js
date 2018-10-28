import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneZoomInElement
 * @class IconTwotoneZoomInElement
 * @extends {AoflElement}
 */
class IconTwotoneZoomInElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneZoomInElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-zoom-in';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneZoomInElement.is, IconTwotoneZoomInElement);

export default IconTwotoneZoomInElement;
