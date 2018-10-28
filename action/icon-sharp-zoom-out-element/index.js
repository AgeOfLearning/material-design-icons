import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpZoomOutElement
 * @class IconSharpZoomOutElement
 * @extends {AoflElement}
 */
class IconSharpZoomOutElement extends AoflElement {
  /**
   * Creates an instance of IconSharpZoomOutElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-zoom-out';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpZoomOutElement.is, IconSharpZoomOutElement);

export default IconSharpZoomOutElement;
