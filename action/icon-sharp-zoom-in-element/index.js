import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpZoomInElement
 * @class IconSharpZoomInElement
 * @extends {AoflElement}
 */
class IconSharpZoomInElement extends AoflElement {
  /**
   * Creates an instance of IconSharpZoomInElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-zoom-in';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpZoomInElement.is, IconSharpZoomInElement);

export default IconSharpZoomInElement;
