import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundDesktopMacElement
 * @class IconRoundDesktopMacElement
 * @extends {AoflElement}
 */
class IconRoundDesktopMacElement extends AoflElement {
  /**
   * Creates an instance of IconRoundDesktopMacElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-desktop-mac';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundDesktopMacElement.is, IconRoundDesktopMacElement);

export default IconRoundDesktopMacElement;
