import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundFullscreenExitElement
 * @class IconRoundFullscreenExitElement
 * @extends {AoflElement}
 */
class IconRoundFullscreenExitElement extends AoflElement {
  /**
   * Creates an instance of IconRoundFullscreenExitElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-fullscreen-exit';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundFullscreenExitElement.is, IconRoundFullscreenExitElement);

export default IconRoundFullscreenExitElement;
