import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpFullscreenElement
 * @class IconSharpFullscreenElement
 * @extends {AoflElement}
 */
class IconSharpFullscreenElement extends AoflElement {
  /**
   * Creates an instance of IconSharpFullscreenElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-fullscreen';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpFullscreenElement.is, IconSharpFullscreenElement);

export default IconSharpFullscreenElement;
