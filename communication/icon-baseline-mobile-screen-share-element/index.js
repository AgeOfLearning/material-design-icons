import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineMobileScreenShareElement
 * @class IconBaselineMobileScreenShareElement
 * @extends {AoflElement}
 */
class IconBaselineMobileScreenShareElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineMobileScreenShareElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-mobile-screen-share';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineMobileScreenShareElement.is, IconBaselineMobileScreenShareElement);

export default IconBaselineMobileScreenShareElement;
