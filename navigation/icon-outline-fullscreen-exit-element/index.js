import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineFullscreenExitElement
 * @class IconOutlineFullscreenExitElement
 * @extends {AoflElement}
 */
class IconOutlineFullscreenExitElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineFullscreenExitElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-fullscreen-exit';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineFullscreenExitElement.is, IconOutlineFullscreenExitElement);

export default IconOutlineFullscreenExitElement;
