import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneFullscreenElement
 * @class IconTwotoneFullscreenElement
 * @extends {AoflElement}
 */
class IconTwotoneFullscreenElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneFullscreenElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-fullscreen';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneFullscreenElement.is, IconTwotoneFullscreenElement);

export default IconTwotoneFullscreenElement;
