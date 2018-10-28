import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineZoomOutElement
 * @class IconOutlineZoomOutElement
 * @extends {AoflElement}
 */
class IconOutlineZoomOutElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineZoomOutElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-zoom-out';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineZoomOutElement.is, IconOutlineZoomOutElement);

export default IconOutlineZoomOutElement;
