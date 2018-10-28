import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineFullscreenElement
 * @class IconOutlineFullscreenElement
 * @extends {AoflElement}
 */
class IconOutlineFullscreenElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineFullscreenElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-fullscreen';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineFullscreenElement.is, IconOutlineFullscreenElement);

export default IconOutlineFullscreenElement;
