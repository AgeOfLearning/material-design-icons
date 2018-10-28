import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineMobileScreenShareElement
 * @class IconOutlineMobileScreenShareElement
 * @extends {AoflElement}
 */
class IconOutlineMobileScreenShareElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineMobileScreenShareElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-mobile-screen-share';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineMobileScreenShareElement.is, IconOutlineMobileScreenShareElement);

export default IconOutlineMobileScreenShareElement;
