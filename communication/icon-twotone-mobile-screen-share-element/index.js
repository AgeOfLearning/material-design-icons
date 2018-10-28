import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneMobileScreenShareElement
 * @class IconTwotoneMobileScreenShareElement
 * @extends {AoflElement}
 */
class IconTwotoneMobileScreenShareElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneMobileScreenShareElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-mobile-screen-share';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneMobileScreenShareElement.is, IconTwotoneMobileScreenShareElement);

export default IconTwotoneMobileScreenShareElement;
