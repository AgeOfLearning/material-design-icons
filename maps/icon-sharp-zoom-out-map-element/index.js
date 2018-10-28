import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpZoomOutMapElement
 * @class IconSharpZoomOutMapElement
 * @extends {AoflElement}
 */
class IconSharpZoomOutMapElement extends AoflElement {
  /**
   * Creates an instance of IconSharpZoomOutMapElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-zoom-out-map';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpZoomOutMapElement.is, IconSharpZoomOutMapElement);

export default IconSharpZoomOutMapElement;
