import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineZoomInElement
 * @class IconOutlineZoomInElement
 * @extends {AoflElement}
 */
class IconOutlineZoomInElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineZoomInElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-zoom-in';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineZoomInElement.is, IconOutlineZoomInElement);

export default IconOutlineZoomInElement;
