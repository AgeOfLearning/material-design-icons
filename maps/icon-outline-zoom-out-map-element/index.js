import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineZoomOutMapElement
 * @class IconOutlineZoomOutMapElement
 * @extends {AoflElement}
 */
class IconOutlineZoomOutMapElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineZoomOutMapElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-zoom-out-map';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineZoomOutMapElement.is, IconOutlineZoomOutMapElement);

export default IconOutlineZoomOutMapElement;
