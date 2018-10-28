import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundMobileScreenShareElement
 * @class IconRoundMobileScreenShareElement
 * @extends {AoflElement}
 */
class IconRoundMobileScreenShareElement extends AoflElement {
  /**
   * Creates an instance of IconRoundMobileScreenShareElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-mobile-screen-share';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundMobileScreenShareElement.is, IconRoundMobileScreenShareElement);

export default IconRoundMobileScreenShareElement;
