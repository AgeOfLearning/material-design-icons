import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneZoomOutElement
 * @class IconTwotoneZoomOutElement
 * @extends {AoflElement}
 */
class IconTwotoneZoomOutElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneZoomOutElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-zoom-out';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneZoomOutElement.is, IconTwotoneZoomOutElement);

export default IconTwotoneZoomOutElement;
