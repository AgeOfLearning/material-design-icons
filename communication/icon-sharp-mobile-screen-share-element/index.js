import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpMobileScreenShareElement
 * @class IconSharpMobileScreenShareElement
 * @extends {AoflElement}
 */
class IconSharpMobileScreenShareElement extends AoflElement {
  /**
   * Creates an instance of IconSharpMobileScreenShareElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-mobile-screen-share';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpMobileScreenShareElement.is, IconSharpMobileScreenShareElement);

export default IconSharpMobileScreenShareElement;
