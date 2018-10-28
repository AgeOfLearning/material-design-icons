import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpFullscreenExitElement
 * @class IconSharpFullscreenExitElement
 * @extends {AoflElement}
 */
class IconSharpFullscreenExitElement extends AoflElement {
  /**
   * Creates an instance of IconSharpFullscreenExitElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-fullscreen-exit';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpFullscreenExitElement.is, IconSharpFullscreenExitElement);

export default IconSharpFullscreenExitElement;
