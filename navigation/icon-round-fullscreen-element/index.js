import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundFullscreenElement
 * @class IconRoundFullscreenElement
 * @extends {AoflElement}
 */
class IconRoundFullscreenElement extends AoflElement {
  /**
   * Creates an instance of IconRoundFullscreenElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-fullscreen';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundFullscreenElement.is, IconRoundFullscreenElement);

export default IconRoundFullscreenElement;
