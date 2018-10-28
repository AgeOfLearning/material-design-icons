import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneFullscreenExitElement
 * @class IconTwotoneFullscreenExitElement
 * @extends {AoflElement}
 */
class IconTwotoneFullscreenExitElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneFullscreenExitElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-fullscreen-exit';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneFullscreenExitElement.is, IconTwotoneFullscreenExitElement);

export default IconTwotoneFullscreenExitElement;
